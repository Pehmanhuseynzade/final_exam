import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from "react-helmet"
import Button from "@mui/material/Button";
import { useFormik } from 'formik';
import TextField from "@mui/material/TextField";
import { getPost } from "../../api/httpsrequests"
import "./add.scss"
import { bloggerSchema } from '../../validation/bloggerValidation';
function Add() {

  const navigate = useNavigate()
  function handleSubmit(values, actions) {
    getPost(values)
    formik.resetForm();
    if (values) {
      navigate('/')
    }
    console.log(values)
    console.log(actions)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      desc: '',
      image: '',
    },
    onSubmit: handleSubmit,
    validationSchema: bloggerSchema,
  });

  return (
    <>
      <Helmet>
        <title>Add</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <h1 className='add-h1'>Add Pages</h1>

      <form onSubmit={formik.handleSubmit}>
        <TextField error={formik.errors.name && formik.touched.name ? true : false}
          onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='name' id="outlined-basic" label="Name" variant="outlined" />
        {formik.errors.name && formik.touched.name && <p style={{ color: "red" }} >{formik.errors.name}</p>}
        <TextField error={formik.errors.price && formik.touched.price ? true : false}
          onChange={formik.handleChange} onBlur={formik.handleBlur} type="number" name='price' id="outlined-basic" label="Price" variant="outlined" />
        {formik.errors.price && formik.touched.price && <p style={{ color: "red" }} >{formik.errors.price}</p>}
        <TextField error={formik.errors.desc && formik.touched.desc ? true : false}
          onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='desc' id="outlined-basic" label="Description" variant="outlined" />
        {formik.errors.desc && formik.touched.desc && <p style={{ color: "red" }} >{formik.errors.desc}</p>}
        <TextField error={formik.errors.image && formik.touched.image ? true : false}
          onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='image' id="outlined-basic" label="Image" variant="outlined" />
        {formik.errors.image && formik.touched.image && <p style={{ color: "red" }} >{formik.errors.image}</p>}
        <Button type='submit' variant="contained">Add</Button>
      </form>
    </>
  )
}

export default Add
