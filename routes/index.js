var express = require("express");
var router = express.Router();
const antaresApi = require("../service/antaresAPI");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let status = "mati";
  let Temp = 0;
  
  const getDataID = await antaresApi.getDataAntaresID();
  // console.log(getDataID)
  const dataDownlink = await filterData('downlink', getDataID);
  const dataUplink = await filterData('uplink', getDataID);
  // console.log(dataDownlink, dataUplink)
  if (dataDownlink) status = dataDownlink.data;
  if (dataUplink) Temp = dataUplink.data.Temp;
  res.render("index", { status , Temp });
});

const filterData = async (type, data) => {
  for (uril of data["m2m:uril"]) {
    const detailData = await antaresApi.getDetailDataAntaresByUril(uril);
    const jsonData = JSON.parse(detailData["m2m:cin"].con);
    if (jsonData.type === type) {
      return jsonData;
    }
  }
}

/* POST DATA */
router.post("/postData", async function (req, res, next) {
  const data = {
    "m2m:cin": {
      con: JSON.stringify(req.body),
    },
  };
  await antaresApi.postData(data).then((response) => {
    res.status(200).json(response.data);
  });
});

module.exports = router;
