import React from 'react'
import Brazil from '@svg-maps/brazil'
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import  './map.css'





function BrazilMap (props) {
  return (   
    
      <SVGMap map={Brazil} className="BrMap" onLocationFocus/>  
    
    
  )
}

export default BrazilMap;

