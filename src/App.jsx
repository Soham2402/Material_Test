import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Box, Button, Container, Paper, Typography} from '@mui/material'
function App() {
 
  const serviceList = ['Service1', 'Service2','Service3','Service3','Service4','Service5','Service6']


  return (
      <Container>
        <Typography variant='h1' sx={{my:4,textAlign:'center',color:'primary.main'}}>Servics</Typography>
        <Typography variant='h2'>OverView</Typography>

        <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}, justifyContent:'space-between', gap:2,flexWrap:'wrap'}}>
          {serviceList.map((service) => {
          return(
            <Paper elevation={6} sx={{p:3,width:{xs:1,md:320}}}>
              <Box>
                  <Typography variant = 'h3' sx={{mb:2}}>{service}</Typography>
                  <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ullam, nostrum eius et hic sint qui labore perferendis iure earum doloribus eligendi quam, quisquam voluptates ut consectetur porro possimus voluptas magnam, reiciendis quaerat sapiente! Quos sint eligendi commodi quasi cumque debitis eos, alias ipsam voluptatum dolorum mollitia necessitatibus quam odit?</Typography>
              </Box>
              <Button variant='contained' sx={{mt:2}}>Learn More</Button>


            </Paper>
          )
          })} 
        </Box>
      </Container>
  )
}

export default App
