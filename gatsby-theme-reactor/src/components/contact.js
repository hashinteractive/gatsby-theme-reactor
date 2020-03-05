/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

const Contact = () => {
  const map = useRef()
  useEffect(() => {
    const mapbox = new mapboxgl.Map({
      container: map.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-96.7898, 46.87719],
      zoom: 12 
    });
    mapbox.scrollZoom.disable()
  })

  return (
    <Flex
      id="contact">
      <Box
        sx={{
          minHeight: '500px',
          width: 'full',
          position: 'relative'
        }}>
        <div
          sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
          }} 
          ref={map}>
        </div>
      </Box>
    </Flex>
  )
}

export default Contact