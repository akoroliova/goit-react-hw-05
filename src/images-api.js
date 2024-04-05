import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const fetchImagesWithTopic = async (topic, page) => {
  const response = await axios.get(`/?query=${topic}`, {
    params: {
      client_id: "TXXLBjNA6Y0y8mIKWYg-j3lvWbiYzVBzOrZb1Ht508c",
      per_page: 9,
      page: page,
    },
  });
  return response.data;
};
