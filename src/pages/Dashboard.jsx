import React, { useRef, useState } from 'react'
import FooterLinks from '../components/FooterLinks'
import Sidebar from '../components/shared/Leftbar'
import Chatbox from '../components/home/Chatbox'
import RightPanel from '../components/shared/Rightbar'
import useIsMobile from '../hooks/useIsMobile'
import { useSearchParams } from 'react-router-dom'

function Dashboard() {
  const isMobile = useIsMobile()
  const [activeState, setActiveState] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams({s: false})
  const sidebarOpen = searchParams.get("s") === "1";

  const leftPanel = useRef(null) 
  const middlePanel = useRef(null) 
  const rightPanel = useRef(null) 

  PanelScrollIntoView(activeState, leftPanel.current, middlePanel.current, rightPanel.current)

  return (
    <div style={styles.container} id="DASHBOARD">
        {
          isMobile == false ?
          <div id="WRAPPER" style={styles.desktopWrapper}>
            <Sidebar customStyle={{flex:3}}/>
            <Chatbox customStyle={{flex:8 + (sidebarOpen ? 3 : 0)}}/>
            <RightPanel customStyle={{flex:4}}/>
          </div>
          :
          <div id="WRAPPER_OUTPUT_SCREEN" style={styles.wrapperOutput}>
            <div id="WRAPPER" style={styles.mobileWrapper}>
              <Sidebar 
                  customStyle={{width:"calc(100vw - 50px)"}} 
                  panelRef={leftPanel}
                  forceScrollLeft={()=>{setActiveState(0)}} 
                  forceScrollRight={()=>{setActiveState(1)}} 
                  />
              <Chatbox 
                  customStyle={{width:"calc(100vw - 0px)"}} 
                  panelRef={middlePanel}
                  forceScrollRight={()=>{setActiveState(2)}} 
              />
              <RightPanel 
                  customStyle={{width:"calc(100vw - 50px)"}} 
                  panelRef={rightPanel}
                  forceScroll={()=>{setActiveState(1)}}
              />
            </div>
          </div>
        }

        <FooterLinks />
    </div>
  )
}

function PanelScrollIntoView(activeState, leftPanel, middlePanel, rightPanel){
  if ( activeState == 0 && leftPanel != null) {
    leftPanel.scrollIntoView({
      behavior:"smooth",
      block:"start"
    })

  }
  else if ( activeState == 1 && middlePanel != null ) {
    middlePanel.scrollIntoView({
      behavior:"smooth",
      block:"start"
    })
  }
  else if ( activeState == 2 && rightPanel != null ) {
    rightPanel.scrollIntoView({
      behavior:"smooth",
      block:"start"
    })
  }
}

const styles = {
    container:{
      height:"100vh",
      width:"100vw",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      overflow:"hidden"
    },
    desktopWrapper:{
      height:"100%",
      width:"100%",
      display:"flex",
      flexDirection:"row",
    },
    wrapperOutput:{
      width:"100%",
      height:"100%",
      overflow:"hidden",
      display:"flex",
      flexDirection:"column"
    },
    mobileWrapper:{
      height:"100%",
      display:"flex",
      width:"fit-content",
    },

    para:{
      fontSize:"20px"
    }
}

export default Dashboard