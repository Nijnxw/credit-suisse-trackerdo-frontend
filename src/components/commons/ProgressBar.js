import React, { useEffect, useState } from "react";

const ProgressBar = ({ value = 0, containerStyle = {} }) => {
  const [style, setStyle] = useState({});
  const [styleValue, setStyleValue] = useState({});

  const animation = () => {  
    setTimeout(() => {
      const newStyle = {
          opacity: 1,
          width: `${value}%`,
          background: value < 30 ? '#FF9999' : (value < 75 ? '#FFBB77' : '#6CBA95')
      }
      setStyleValue({
        opacity: 1,
      })
      setStyle(newStyle);
    }, 500);
  }

  useEffect(() => {
    animation()
  }, [value])
  
  return (
    <div className="progress-container">
      <div className="progress" style={containerStyle}>      
        <div className="progress-done" style={style} />
      </div>
      <div className="progress-value" style={styleValue}>
        {value} %
      </div>
    </div>
  )
}

export default ProgressBar
