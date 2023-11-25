
export default function App() {

  const style = {
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

  return (
    <div style={style.container}>
      <p style={style.para}>helloooo</p>
    </div>
  )
}