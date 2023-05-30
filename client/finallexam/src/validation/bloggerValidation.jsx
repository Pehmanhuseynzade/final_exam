import * as yup from 'yup'

export const bloggerSchema = yup.object().shape({
     name: yup.string().min(3).max(20).required("name is required"),
     price: yup.number().positive().min(1).required("Price is required"),
     desc: yup.string().required("Description is required"),
     image: yup.string().url().required("Image is required")
   });