import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Card } from "antd";
import "../Home/home.scss"
import {useParams} from "react-router-dom"
import { getAlldatasID } from "../../api/httpsrequests";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Details() {
  const [blog,setblog]=useState([])
  const { id } = useParams();
  useEffect(()=>{
    getAlldatasID(id)
    .then((res)=>{
      setblog(res)
      console.log(res)
    })
  },[id])

  return (
    <>
      <Helmet>
        <title>Details</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <h1 className="h1-details">Details Page</h1>
      <section className="func-section detail-func">
              <Card
                key={blog._id}
                hoverable="true"
                style={{
                  width: 300,
                }}
                cover={<img alt="example" src={blog.image} />}
              >
                <p>10 Jan 2018</p>

                <div className="map">
                  <p style={{fontSize:"20px",textAlign:"center"}}>
                    <span style={{ fontWeight: "600" }}></span> {blog.name}
                  </p>
                  <p style={{fontSize:"20px",textAlign:"center"}}>
                    <span style={{ fontWeight: "600" }}></span>

                   
                    {blog.price}
                    <span> $</span>
                  </p>

                  <p style={{color:"gray",fontSize:"15px",textAlign:"center"}}>
                    <span style={{ fontWeight: "600" }}></span>
                    {blog.desc}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p>
                    <i class="fa-regular fa-heart"></i> 15 Likes
                  </p>
                  <p>
                    <i class="fa-regular fa-comment"></i> 02 Comments
                  </p>
                </div>

                <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"}}>
                <Link to='/'><Button  variant="contained">Go back</Button></Link>
                </div>
              </Card>
      </section>
    </>
  );
}

export default Details;
