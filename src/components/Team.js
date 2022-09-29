import React, { useRef, useState } from 'react'
import styled from 'styled-components'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Team.css";

// import required modules
import { Pagination, Navigation } from "swiper";
function Team() {
  return (
    <Container>
        <Wrap>
            <ContainBox>

                <h1>THE<br></br> TEAM</h1>
            </ContainBox>

            <SliderBox>
            <Swiper
         pagination={{
            type: "progressbar",
          }}
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src='/images/profile3.png' />
            <h2>Member #0</h2>
            <p>Founder & CEO</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/profile3.png' />
        	<h2>Member #1</h2>
        	<p>Project Leader</p>    
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/profile3.png' />
        	<h2>Member #2</h2>
        	<p>Artist</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/profile3.png' />
        	<h2>Member #3</h2>
        	<p>Artist</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/profile3.png' />
        	<h2>Member #4</h2>
        	<p>Blockchain Developer</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/profile3.png' />
        	<h2>Member #5</h2>
        	<p>Game Developer</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/profile3.png' />
        	<h2>Member #6</h2>
        	<p>Community</p>
        </SwiperSlide>
        <SwiperSlide>
        	<img src='/images/profile3.png' />
        	<h2>Member #7</h2>
        	<p>Marketing</p>
        </SwiperSlide>
        
      </Swiper>
            </SliderBox>
        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: black;
    display: flex;
    justify-content: center;



`

const Wrap = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
      }



`

const ContainBox = styled.div`
    width: 35%;
    color: #c8c5b7;
    

    @media only screen and (max-width: 1200px) {
        text-align: center;
        width: 100%;
      }

    h1{
        font-size: 100px;

        @media only screen and (max-width: 1200px) {
          font-size: 60px;
        }
    }
    h2{
        color: rgb(206 178 102);

        @media only screen and (max-width: 1200px) {
          font-size: 16px;
        }
    }

`

const SliderBox = styled.div`
    width: 60%;
    height: 70vh;
    border-radius: 15px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
      }

`
export default Team
