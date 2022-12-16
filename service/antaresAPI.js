const axios = require("axios");

const getLatestData = async () => {
  try {
    const url = `https://platform.antares.id:8443/~/antares-cse/antares-id/${process.env.applicationName}/${process.env.deviceName}/la`;
    const result = await axios.get(url, {
      headers: {
        "X-M2M-Origin": process.env.accessKey,
        Accept: "application/json",
        "Content-Type": "application/json;ty=4",
      },
    });
    return result.data;
  } catch (e) {
    throw new Error("Error");
  }
};

const axios = require("axios");

const getLatestData = async () => {
  try {
    const url = `https://platform.antares.id:8443/~/antares-cse/antares-id/${process.env.applicationName}/${process.env.deviceName}/la`;
    const result = await axios.get(url, {
      headers: {
        "X-M2M-Origin": process.env.accessKey,
        Accept: "application/json",
        "Content-Type": "application/json;ty=4",
      },
    });
    return result.data;
  } catch (e) {
    throw new Error("Error");
  }
};

const getDataAntaresID = async () => {
  // fill here
};

const getDetailDataAntaresByUril = async (uril) => {
  //fill here
};

const postData = async (data) => {
  // fill here
};

module.exports = {
  getLatestData,
  postData,
  getDataAntaresID,
  getDetailDataAntaresByUril,
};
