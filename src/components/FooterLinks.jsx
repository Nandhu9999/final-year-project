import React from 'react'
import { NavLink } from "react-router-dom";

function FooterLinks() {

  function LinkStyles({ isActive, isPending, isTransitioning }) {
    return { ...styles.alink, backgroundColor: isActive ? "yellow" : "" };
  }

  return (
    <div style={styles.footer}>
      <NavLink to="/" style={LinkStyles}>landing page</NavLink>
      <NavLink to="/login" style={LinkStyles}>login</NavLink>
      <NavLink to="/c" style={LinkStyles}>dashboard</NavLink>
      <NavLink to="/notfound" style={LinkStyles}>error</NavLink>
    </div>
  )
}

const styles = {
  footer:{
    height:"200px",
    width:"100px",
    display:"flex",
    flexDirection:"column",
    position:"absolute",
    top:"40%",right:"0",
    background:"grey",
    justifyContent:"space-around",
    alignItems:"center",
  },
  alink:{
    color:"red",
    textDecoration:"none",
    fontSize:"1.2rem",
    textAlign:"center",
    border:"2px solid red"
  },
  para:{
    fontSize:"20px"
  }
}


export default FooterLinks