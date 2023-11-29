import React from 'react'
import { useParams } from 'react-router-dom'
import useIsMobile from '../../hooks/useIsMobile'
import Chatlogs from './Chatlogs'

function DefaultChannel(){
  <div>
    <p>Select a Subject!</p>

  </div>
}

function InputBox(){
  return (
    <div style={styles.inputbox}>
      <textarea style={styles.textarea} rows="1" placeholder='Learn about...'></textarea>
      <span style={styles.sendbtn}>🚀</span>
    </div>
  )
}

function Chatbox({customStyle, panelRef, forceScrollRight}) {
  const isMobile = useIsMobile();
  const params = useParams()
  const channelId = params.cid

  function ChatboxStyles(){
    return {...styles.chatbox }
  }


  const messages = []
  console.log(channelId)

  return (
    <div style={{...ChatboxStyles(), ...customStyle}} id="CHATBOX" ref={panelRef}>
      {channelId === undefined ? 
        <>
          <p style={styles.para}>Dashboard</p>
          <DefaultChannel /> 
        </>
        :
        (["toc","os"].indexOf(channelId) != -1 ?
          <>
          <Chatlogs messages={messages} forceScroll={forceScrollRight}/>
          <InputBox />
          </>
          :
          <div>
            Error, Page doesn't exist
          </div>
        )
      }

      <p style={styles.bottomnotice}>This website is under development.</p>
    </div>
  )
}

const styles = {
  chatbox:{
    height:"100%",
    background:"#343541",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"relative"
  },


  inputbox:{
    width:"min(90%, 600px)",
    position:"absolute",
    left:"50%",bottom:"20px",
    transform:"translate(-50%,0)",
    display:"grid",
    height:"fit-content",
    gridTemplateColumns:"auto 50px",

    border:"3px solid grey",
    borderRadius:"15px",
  },
  textarea:{
    fontSize:"1.2rem",
    width:"100%",
    maxHeight:"200px",
    height:"24px",
    overflowY:"hidden",
    outline:"none",
    border:"0",
    fontFamily:"inherit",
    padding:"10px",
    paddingBlock:"12px",
    lineHeight:"1.25rem",
    background:"transparent"
  },
  
  sendbtn:{
    fontSize:"24px",
    display:"grid",
    placeItems:"center",
    background:"white",
    cursor:"pointer",
    scale:"0.8",
    borderRadius:"25%"
  },


  bottomnotice:{
    position:"absolute",
    left:"50%",bottom:"0px",
    transform:"translate(-50%,0)",
    textAlign:"center",
    fontSize:"12px",
    height:"20px",
    margin:"0",
    padding:"0",
  }
}

export default Chatbox