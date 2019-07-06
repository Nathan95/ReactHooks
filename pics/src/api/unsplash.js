import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID d673847380e3e6be47f48cd476b7320585df3890e4608af7b6d33858c3fce707"
  }
});
