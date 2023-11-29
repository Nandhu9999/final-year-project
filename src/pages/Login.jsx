import React from 'react'
import FooterLinks from '../components/FooterLinks'

function Login() {
  return (
    <div style={styles.container}>
        <p style={styles.para}>Login</p>

        <FooterLinks />
    </div>
  )
}
const styles = {
    container:{
      height:"100vh",
      width:"100vw",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
  
    para:{
      fontSize:"20px"
    }
}
export default Login