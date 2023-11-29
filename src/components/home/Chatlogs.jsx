import React from 'react'

function Chatlogs({forceScroll}) {
  const isMobile = true;
  return (
    <div>
      <p>Chatlogs</p>
      {isMobile && <button onClick={()=>{forceScroll()}}>open me</button>}
    </div>
  )
}

export default Chatlogs