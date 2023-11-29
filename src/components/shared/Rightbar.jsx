import React from 'react'
import useIsMobile from '../../hooks/useIsMobile'

function Rightbar({customStyle, panelRef, forceScroll}) {
  const isMobile = useIsMobile()
  function goChat(){
    forceScroll()
  }
  return (
    <div style={{...styles.container, ...customStyle}} id="RIGHTPANEL" ref={panelRef}>
        <p style={styles.title}>• Queries •</p>
        {isMobile && <button onClick={goChat}>click</button>}
    </div>
  )
}

const styles = {
  container:{
    width:"100%",
    height:"100%",
    background:"black"
  },
  title:{
    fontSize:"1.2rem",
    textAlign:"center"
  }
}

export default Rightbar