import React from 'react'
import "./comp.scss"
function Footer() {
  return (
    <footer>
      <div style={{color:"white"}}>Copyright ©2023 All rights reserved | This template is made with <span style={{color:"#62bdfc"}}>&#x2764;</span> by <span style={{color:"#62bdfc"}}>Colorlib</span> </div>
      <div className='my-icons'>
      <i className="foot-icon fa-brands fa-facebook"></i>
      <i className="foot-icon fa-brands fa-twitter"></i>
      <i className="foot-icon fa-solid fa-volleyball"></i>
      <i className="foot-icon fa-brands fa-behance"></i>
      </div>
    </footer>

  )
}

export default Footer
