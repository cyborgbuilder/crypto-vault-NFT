import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'
import Ticker from 'react-ticker'
import ReactPlayer from 'react-player'


function Home() {
  return (
    <Container>

<Navbar  bg="myTra" variant='dark'  expand='lg' sticky='top'>

<Navbar.Toggle style={{marginLeft: '20px'}} />
<Navbar.Collapse>
<Nav >
    <Nav.Link  style={{margin: '0 12px', fontSize: '22px'}} href="">HOME</Nav.Link>
    <Nav.Link style={{margin: '0 12px', fontSize: '22px'}} href="">THE TEAM</Nav.Link>
    <Nav.Link style={{margin: '0 12px', fontSize: '22px'}} href="">PROJECT</Nav.Link>
    <Nav.Link style={{margin: '0 12px', fontSize: '22px'}} href="">ROADMAP</Nav.Link>
    <Nav.Link style={{margin: '0 12px', fontSize: '22px'}} href="">HOW TO BUY NFT</Nav.Link>
    <Nav.Link style={{margin: '0 12px', fontSize: '22px'}} href="">FAQ</Nav.Link>
</Nav>
</Navbar.Collapse >

<img src='/images/LogoCoin.png' />

</Navbar>



        <Video>
        
        <ReactPlayer  url='/images/videoslide.mov' config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' height='100%' width='90%' />
        </Video>

        <Image>
            <img src='/Images/24.png' />
        </Image>

        


     
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 1000;
    // background: linear-gradient(180deg, #0000004A -80%, #000000 100%), url('/Images/back5.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media only screen and (max-width: 1200px){
        height: 60vh;
    }

    .navbar{
        width: 100%;
        position: fixed;
        top: 0;
        background: black;
        opacity: 0.9;

        img{
            width: 5%;

            @media only screen and (max-width: 1200px){
                width: 10%;
            }
        
        }
    }



`
const Video = styled.div`
    width: 900px;
    height: 700px;
    position: absolute;
    bottom: 0;

    @media only screen and (max-width: 1200px){
        top: 0;
        width: 400px;
        height: 350px;
    }

    .reactPlayer{
        width: 100%;
        height: 100%;
    }

`

const Image = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 1000;

    @media only screen and (max-width: 1200px){
        height: 60vh;
    }


    img{
        width: 100%;
        height: 100%;
    }
`
export default Home