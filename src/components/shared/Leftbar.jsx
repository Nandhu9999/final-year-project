import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import useIsMobile from '../../hooks/useIsMobile';


function Leftbar({customStyle, panelRef, forceScrollLeft, forceScrollRight}) {
  const [searchParams, setSearchParams] = useSearchParams({s: "0"})
  const sidebarOpen = searchParams.get("s") === "1";

  const isMobile = useIsMobile()

	function toggleSidebar(){
    if (isMobile){
      if (sidebarOpen) {
        forceScrollRight();
      }else{
        forceScrollLeft();
      }
    }
    // else{
      setSearchParams(prev => {
        prev.set("s", sidebarOpen ? "0" : "1" )
        return prev
      }, {replace: true});
    // }
	}

	function SidebarStyles(){
    return { ...styles.sidebar}
	}
  const modifiedStyle = JSON.parse(JSON.stringify(customStyle));
  modifiedStyle.flex = sidebarOpen ? 0 : customStyle.flex;
  modifiedStyle.width = sidebarOpen ? "0" : "";
  
	const subjects = [
		{title: "Theory of Computation",url:"toc"},
    {title: "Operating Systems",    url:"os"},
    {title: "Computer Security",    url:"security"},
    {title: "Computer Networks",    url:"networks"},
    {title: "Distributed Systems",  url:"ds"},
    {title: "Compiler Design",      url:"compiler"}
	]

  return (
    <div style={{...SidebarStyles(), ...(isMobile ? customStyle : modifiedStyle) }} id="SIDEBAR" ref={panelRef}>

      <div style={styles.header}>
        <span style={styles.icon} onClick={toggleSidebar}>
          {isMobile ? (sidebarOpen ?"📚":"📖") : (sidebarOpen ?"📖":"📚")}
        </span>
      </div>

      <div style={{...styles.contentWrapper, display: customStyle.flex == 0 ? "none" : "block" }}>

        <div style={styles.content}>
          
          <p style={styles.title}>• Subjects •</p>
          <div style={styles.subjectList}>
            { subjects.length != 0 ? 
              subjects.map(item=>{return <SubjectItem key={item.title} conf={item} sidebarOpen={sidebarOpen}/>})
              : "No Subjects Available"
            }
          </div>
        </div>

      </div>

    </div>
  )
}

function SubjectItem({conf, sidebarOpen}){
  const path = "/c/" + conf.url + "?s=" + (sidebarOpen ? "1" : "0")
  function LinkStyles({ isActive, isPending, isTransitioning }) {
    return { ...styles.subjectItem, color: isActive ? "white" : "#aaa" };
  }
  
	return (
    <NavLink to={path} style={LinkStyles}>
        &nbsp;&nbsp;{conf.title}
    </NavLink>
	)
}


const styles = {
  sidebar:{
      // width:"250px",
      width:"100%",
      height:"100vh",
      background:"black",
      // position:"absolute",
      // top:"0",left:"0",
  },

  header:{
      width:"100%",
      position:"relative",
      display:"flex"
  },

  icon:{
      position:"absolute",
      left: "100%",top:"0",
      width:"50px",
      height:"50px",
      fontSize:"2rem",

      display:"flex",
      justifyContent:"center",
      alignItems:"center",

      cursor:"pointer",
      zIndex:"2"
  },

  contentWrapper:{
    width:"100%",
  },

  content:{
    width:"100%",
    overflow:"hidden"
  },

  title:{
    fontSize:"1.2rem",
    textAlign:"center"
  },

  subjectList:{
    paddingLeft:"10px",
    width:"100%",
    overflow:"auto",
    maxHeight:"400px",
    display:"flex",
    flexDirection:"column",
    gap:"5px"
  },

  subjectItem:{
    width:"calc(100% - 20px)",
    textWrap:"nowrap",
    whiteSpace:"nowrap",
    overflow:"hidden",
    textOverflow:"ellipsis",
    background:"#202020",
    borderRadius:"5px",
    paddingBlock:"10px",
    textDecoration:"none",
    color:"white",
    flexShrink:"0"
  }
}

export default Leftbar