import React from 'react'
import Brazil from '@svg-maps/brazil'
import { SVGMap } from "react-svg-map"
import "react-svg-map/lib/index.css"
import './map.css'

function BrazilMap (props) {
  return (
    
    <SVGMap
      {...props}
      map={Brazil}
      className="BrMap"
      locationClassName="locations"
    />
  )
}

export default BrazilMap

