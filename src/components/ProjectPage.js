import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProjectPage() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: false,
    arrows: false
  };
  return (
    <Container>
        <Wrap>
          <h1 style={{margin: '80px 0'}}>About Project</h1>
            <Wrapper>

              <Left>
              

<p>Together we are creating High Performance Virtual Reality Game Centres all around the World with the first one being built right here in New Zealand.
A prime location for tourists and positioned right at the centre of attractions.
We aim to bring communities and families together to enjoy health and well-being in a new fun and innovative way.</p>

<h4>What is a High Performance Virtual Reality games centre?</h4>

<h5>It is an interactive virtual reality technology that allows you to interact in a virtual world through visual, sound and movement using highly advanced technology.</h5>

<p>A real NFT with real value. An NFT to be proud of owning.</p>
              </Left>

              <Right>
              <Video>
              <ReactPlayer  url='/images/nftvideo2.mp4' controls='true' config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true'  />
              </Video>
              </Right>



            </Wrapper>

            <Phase>
              <Slider {...settings}>

              <div >
                    <h1>Phase 1</h1>
                <h2>Cost: $250USD</h2>
                <h2>Amount: 3,000 NFT holders</h2>
                <h3>(NFT numbers from 1-3,000)</h3>
                    <p>Annual royalties and dividends from ALL VR business services.</p>

                    <p>Whitelisted for future events, products and services.</p>


                    <p>Lifetime free to use ALL VR business services.</p>

                    
                </div>


              <div >
              <h1>Phase 2</h1>
                <h2>Cost: $400USD</h2>
                <h2>Amount: 2,000 NFT holders</h2>
                <h3>(NFT numbers from 5001-10,000)</h3>
                    <p>Annual royalties and dividends from ALL VR business services.</p>

                    <p>Lifetime free to use ALL VR business services.</p>


                    <p>Whitelisted for future events, products and services.</p>
                    

                   
                
                </div>
                <div >

                <h1>Phase 3</h1>
                <h2>Cost: $550USD</h2>
                <h2>Amount: 5,000 NFT holders</h2>
                <h3>(NFT numbers from 5001-10,000)</h3>
                    <p>Annual royalties and dividends from ALL VR business services.</p>

                    <p>Lifetime free to use ALL VR business services.</p>

                </div>

                <div >
                    <h1>Phase 4</h1>
                <h2>Cost: $600USD</h2>
                <h2>Amount: 2,222 NFT holders</h2>
                <h3>(NFT numbers from 10,001-12,222)</h3>
                    <p>Annual royalties and dividends from ALL VR business services.</p>

                    <p>Lifetime free use ALL VR business services.</p>

                    
                </div>

                <div >
                    <h1>Phase 5</h1>
                <h2>Cost: $1,300USD</h2>
                <h2>Amount: 778 NFT holders</h2>
                <h3>(NFT numbers from 12,223 - 13,000)</h3>
                    <p>Annual royalties and dividends from ALL VR business services.</p>

                    
                </div>

              </Slider>

            </Phase>


           <Footer>
           <h3>Terms</h3>
            <h5>VR business services - Virtual Reality games.</h5>

            <p>Lifetime free - Free for life for all those who are the rightful owner of any eligible NFT.</p>

            <p>As we expand and grow, your NFT becomes more valuable, increasing its value.</p>

            <p>The more NFTs you own the more royalties & dividends you receive.</p>
           </Footer>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;

    


`

const Wrap = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1{
      font-size: 65px;
      margin: 20px 0;
      text-transform: uppercase;

      @media only screen and (max-width: 1200px){
        font-size: 50px;
      }
    }

    p{
      font-size: 20px;
      margin: 20px 0;

      @media only screen and (max-width: 1200px){
        font-size: 16px;
      }
    }

    h2{
      font-size: 22px;
    }

    h4{
      text-align: center;

      @media only screen and (max-width: 1200px){
        font-size: 22px;
      }
    }

    h5{
      font-size: 22px;

      @media only screen and (max-width: 1200px){
        font-size: 18px;
      }
    }


`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    border-radius: 15px;
    background: url('/Images/mainback.png');

    @media only screen and (max-width: 1200px){
      flex-direction: column;
    }


`

const Left = styled.div`
    width: 50%;
    padding: 20px;

    
    @media only screen and (max-width: 1200px){
      width: 100%;
    }

`

const Right = styled.div`
    width: 50%;
    padding: 10px 0;

    @media only screen and (max-width: 1200px){
      width: 100%;
    }

`

const Video = styled.div`
    display: flex;
    margin: 40px 0;
    justify-content: center;


    @media only screen and (max-width: 1200px){
      margin: 0;
    }

    

`

const Phase = styled.div`
    border-radius: 15px;
    background: url('/Images/mainback.png');
    margin: 60px 0;

    @media only screen and (max-width: 1200px){
      margin: 20px 0;
    }

    .phaseWrapper{
      border: 1px solid yellow;
      border-radius: 15px;

    
    }
`

const Footer = styled.div`
border-radius: 15px;
background: url('/Images/mainback.png');
margin: 30px 0;
padding: 20px;

`

export default ProjectPage