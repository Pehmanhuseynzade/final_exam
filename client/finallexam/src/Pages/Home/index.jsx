import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./home.scss";
import { Card } from "antd";
import Button from "@mui/material/Button";
import { getAlldatas, getDelete } from "../../api/httpsrequests";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2"
import { Link } from "react-router-dom";

function Home() {
  const [datas, setDatas] = useState([]);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState(true);
  useEffect(() => {
    getAlldatas().then((data) => {
      setDatas(data);
      console.log(data);
    });
  }, []);

  function handleSearch(e) {
    setInput(e.target.value);
  }
  function handleSort() {
    if (sort === true) {
      setDatas(datas.sort((x, y) => x.price - y.price));
      setSort(false);
    } else {
      setSort(true);
      setDatas(datas.sort((x, y) => y.price - x.price));
    }
  }
  function handleDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        getDelete(id)
        setDatas(datas.filter((x)=>x._id!==id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <main className="image-hero">
        <div className="word-div">
          <h1>A Discount Toner Cartridge</h1>
          <h1>Is Better Than Ever.</h1>
        </div>
        <div className="icon-div">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              color: "white",
            }}
          >
            <p>
              <i class="fa-regular fa-heart"></i> 15 Likes
            </p>
            <p>
              <i class="fa-regular fa-comment"></i> 02 Comments
            </p>
          </div>

          <div className="end-main">
            <div>
              <p style={{ color: "white", fontWeight: "bold" }}>Mark wiens</p>
              <p style={{ color: "white" }}>12 Dec, 2017 11:21 am</p>
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/blogger/img/user.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </main>

      <div className="sentences">
        <h1>Latest News from all categories</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
        <p>dolore magna aliqua.</p>
      </div>

      <section className="first-cards">
        <Card
          hoverable
          style={{
            width: 320,
          }}
          cover={
            <img
              alt="example"
              src="https://preview.colorlib.com/theme/blogger/img/c3.jpg"
            />
          }
        >
          <div>
            <p>10 Jan 2018</p>
            <h3>Addiction When Gambling</h3>
          </div>
        </Card>
        <Card
          hoverable
          style={{
            width: 320,
          }}
          cover={
            <img
              alt="example"
              src="https://preview.colorlib.com/theme/blogger/img/c1.jpg"
            />
          }
        >
          <div>
            <p>10 Jan 2018</p>
            <h3>Addiction When Gambling</h3>
          </div>
        </Card>
        <Card
          hoverable
          style={{
            width: 320,
          }}
          cover={
            <img
              alt="example"
              src="https://preview.colorlib.com/theme/blogger/img/c3.jpg"
            />
          }
        >
          <div>
            <p>10 Jan 2018</p>
            <h3>Addiction When Gambling</h3>
          </div>
        </Card>
      </section>

      <div className="sentences">
        <h1>Hot topics from Travel Section</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
        <p>dolore magna aliqua.</p>
      </div>

      {/* IMAGESS-CARD */}
      <section className="images-cardss">
        <div className="this-card">
          <div className="images">
            <img
              src="https://preview.colorlib.com/theme/blogger/img/t1.jpg"
              alt="imagess"
            />
          </div>
          <div>
            <div className="h2">
              <h2 className="h2-hover">Addiction When Gambling</h2>
              <h2 className="h2-hover">Becomes A Problem</h2>
            </div>
            <p>inappropriate behavior Lorem ipsum dolor sit</p>
            <p>amet, consectetur.</p>
            <div className="this-icons">
              <p>
                <i class="fa-regular fa-heart"></i> 15 Likes
              </p>
              <p>
                <i class="fa-regular fa-comment"></i> 02 Comments
              </p>
            </div>
          </div>
        </div>
        <div className="this-card">
          <div className="images">
            <img
              src="https://preview.colorlib.com/theme/blogger/img/t2.jpg"
              alt="imagess"
            />
          </div>
          <div>
            <div className="h2">
              <h2 className="h2-hover">Addiction When Gambling</h2>
              <h2 className="h2-hover">Becomes A Problem</h2>
            </div>
            <p>inappropriate behavior Lorem ipsum dolor sit</p>
            <p>amet, consectetur.</p>
            <div className="this-icons">
              <p>
                <i class="fa-regular fa-heart"></i> 15 Likes
              </p>
              <p>
                <i class="fa-regular fa-comment"></i> 02 Comments
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="images-cardss-two">
        <div className="this-card">
          <div className="images">
            <img
              src="https://preview.colorlib.com/theme/blogger/img/t3.jpg"
              alt="imagess"
            />
          </div>
          <div>
            <div className="h2">
              <h2>Addiction When Gambling</h2>
              <h2>Becomes A Problem</h2>
            </div>
            <p>inappropriate behavior Lorem ipsum dolor sit</p>
            <p>amet, consectetur.</p>
            <div className="this-icons">
              <p>
                <i class="fa-regular fa-heart"></i> 15 Likes
              </p>
              <p>
                <i class="fa-regular fa-comment"></i> 02 Comments
              </p>
            </div>
          </div>
        </div>
        <div className="this-card">
          <div className="images">
            <img
              src="https://preview.colorlib.com/theme/blogger/img/t4.jpg"
              alt="imagess"
            />
          </div>
          <div>
            <div className="h2">
              <h2>Addiction When Gambling</h2>
              <h2>Becomes A Problem</h2>
            </div>
            <p>inappropriate behavior Lorem ipsum dolor sit</p>
            <p>amet, consectetur.</p>
            <div className="this-icons">
              <p>
                <i class="fa-regular fa-heart"></i> 15 Likes
              </p>
              <p>
                <i class="fa-regular fa-comment"></i> 02 Comments
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="load-div">
        <button className="load">LOAD MORE</button>
      </div>

      <div className="sentences">
        <h1>Fashion News This Week</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
        <p>dolore magna aliqua.</p>
      </div>

      <div className="search-sort">
        <TextField
          onChange={(e) => handleSearch(e)}
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
        <Button onClick={handleSort} variant="contained">
          Sort By Price
        </Button>
      </div>

      <section className="func-section">
        {datas &&
          datas
            .filter((item) => {
              if (item === "") {
                return datas;
              } else if (
                item.name
                  .toLowerCase()
                  .trim()
                  .includes(input.toLowerCase().trim())
              ) {
                return item;
              }
            })
            .map((d) => (
              <Card
                key={d._id}
                hoverable="true"
                style={{
                  width: 300,
                }}
                cover={<img alt="example" src={d.image} />}
              >
                <p>10 Jan 2018</p>

                <div className="map">
                  <p style={{fontSize:"20px",textAlign:"center"}}>
                    <span style={{ fontWeight: "600" }}></span> {d.name}
                  </p>
                  <p style={{fontSize:"20px",textAlign:"center"}}>
                    <span style={{ fontWeight: "600" }}></span>

                   
                    {d.price}
                    <span> $</span>
                  </p>

                  <p style={{color:"gray",fontSize:"15px",textAlign:"center"}}>
                    <span style={{ fontWeight: "600" }}></span>
                    {d.desc}
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
                <div className="delete-view">
                  <button onClick={()=>handleDelete(d._id)} className="delete">Delete</button>
                  <Link to = {`/details/${d._id}`} ><button className="view">View Details</button></Link>
                </div>
              </Card>
            ))}
      </section>
      <div className="load-div">
        <button className="load">LOAD MORE</button>
      </div>
    </>
  );
}

export default Home;
