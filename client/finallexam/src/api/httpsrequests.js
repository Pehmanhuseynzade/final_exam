import axios from "axios"
import { BASE_URL } from "./base_URL"

export const getAlldatas = async()=>{
     let globalData;
     await axios.get(`${BASE_URL}`)
     .then((res)=>{
          globalData = res.data
     })
     return globalData
}

export const getAlldatasID = async(id)=>{
     let globalData;
     await axios.get(`${BASE_URL}/${id}`)
     .then((res)=>{
          globalData = res.data
     })
     return globalData
}

export const getDelete = async(id)=>{
     await axios.delete(`${BASE_URL}/${id}`)
}

export const getPost = async(payload)=>{
     await axios.post(`${BASE_URL}`,payload)
}