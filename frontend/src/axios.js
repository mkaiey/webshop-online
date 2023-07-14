import axios from "axios";

const instance = axios.create({
    baseURL: "https://webshop-online-zeta.vercel.app",
});

export default instance;
