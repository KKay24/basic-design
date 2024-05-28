import React from 'react'
//https://www.kindpng.com/imgv/ixJxxo_no-profile-picture-icon-circle-member-icon-png/
const Avatar = ({className, src, alt}) => {
  return (
    <div>
     {src? (<img className={className} src={src} alt={alt} />) : (<img className={className} src={"https://www.kindpng.com/imgv/ixJxxo_no-profile-picture-icon-circle-member-icon-png/"} alt={alt}/>)} 
    </div>
  )
}

export default Avatar
