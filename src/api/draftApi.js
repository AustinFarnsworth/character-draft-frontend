const axios = require("axios");

const DraftAPI = () => {
  axios.create({
    // For Development
    baseURL: "localhost:3005/draft",
  });
};

export default DraftAPI;
