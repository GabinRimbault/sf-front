import React from "react";

export default function Img({src, alt = "alt", classImg, ...props}) {
  const style = classImg !== undefined ? classImg + " img-fluid" : "img-fluid"
  let imgsrc = src !== undefined ? src : "http://via.placeholder.com/250x250";

  return (
    <>
      <img src={imgsrc} alt={alt} className={style} {...props}/>
    </>
  )
}