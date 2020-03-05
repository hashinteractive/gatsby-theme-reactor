/** @jsx jsx */
import { jsx, Flex, Box, Styled } from 'theme-ui'
import { useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import mapboxgl from 'mapbox-gl'
const accessToken = process.env.MAPBOX_ACCESS_TOKEN
mapboxgl.accessToken = accessToken 

const fetchGeoLocation = async (encoded, cb) => {
  const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encoded}.json?access_token=${accessToken}`).then(res => res.json())
  cb(response)
}

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const Contact = () => {
  const map = useRef()
  //const [geoLocation, setGeoLocation] = useState('Boulder CO')
  
  const { bio: { location = 'Boulder CO' } } = useStaticQuery(graphql`
    query {
      bio {
        location
      }
    }
  `)
  
  useEffect(() => {
    const encoded = encodeURI(location)
    fetchGeoLocation(encoded, (response) => {
      const { features: [{ center = [-105.2705, 40.015] }] } = response
      const mapbox = new mapboxgl.Map({
        container: map.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center,
        zoom: 12 
      });
      mapbox.scrollZoom.disable()
    })
  })

  return (
    <Flex
      id="contact">
      <Box
        sx={{
          height: '500px',
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
        <Flex
          sx={{
            height: 'full',
            position: 'relative',
            zIndex: 99
          }}>
          <Box
            sx={{
              width: 'full',
              position: 'relative'
            }}>
            <div
              sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               height: 500,
               width: 500,
               maxHeight: '100vh',
               maxWidth: '100vh',
               borderRadius: 'full',
               p: 2,
               ml: [0, '10%'],
               mt: -75,
               boxShadow: '2xl',
               backgroundColor: theme => {
                 const [ hex = '000000' ] = /[0-9a-f]{6}/i.exec(theme.colors.primary);
                 const { r, g, b } = hexToRgb(`#${hex}`)
                 return `rgba(${r}, ${g}, ${b}, 0.9)`
               },
               color: 'white'
              }}>
              <Styled.h2 sx={{
                color: 'white'
              }}>
                Contact Me
              </Styled.h2>
            </div>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Contact