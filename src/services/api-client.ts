import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "697fe3617b694df0bcf87b182ac1e2c7",
  },
});