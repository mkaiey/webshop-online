import axios from "axios";

const instance = axios.create({
    baseURL: "https://webshop-online-one.vercel.app/",
});

export default instance;
