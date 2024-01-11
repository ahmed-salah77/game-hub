import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api/',
  params:{
    key:'e0b15b7e0ce34bc284737e8b3312ccc7'
  }
})