import React from 'react'

function ColorCange(props) {

  const {bgcolor} =props

  return (
    <div>
        <div className="bgbox" style={{width:"200px",height:"50px",border:"solid",borderColor:"black",backgroundColor:`${bgcolor.colors1}`}}>
            hello
        </div>
    </div>
  )
}

export default ColorCange