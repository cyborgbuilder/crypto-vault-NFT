import React from 'react'
import styled from 'styled-components'

function Countdown() {
  return (
    <Container>
      <Wrap>
        <Timer>
        <h1 style={{color: '#8a8a13'}}>LIMITED STOCK</h1>
          <div>
            <span>0</span>
            <span>4</span>
            <span>3</span>
            <span>6</span>

          </div>

          <div>
            <h1 style={{color: '#8a8a13'}}>AVAILABLE</h1>
          </div>
        </Timer>
        <Header>
          <h1>COST: $250BUSD</h1>
        </Header>
        <Buttons>
          <button>WHITELIST</button>
          <button>MINT NOW</button>
          <button>HOW TO BUY</button>
        </Buttons>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    background: black;
    display: flex;
    justify-content: center;

`

const Wrap = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;




`

const Timer = styled.div`
width: 60%;
height: 300px;
border-radius: 15px;
background: url('/Images/mainback.png');
margin: 50px;
box-shadow: 0 0 10px #8a8a13, 0 0 20px #baba29, 0 0 40px #acac2b;

@media only screen and (max-width: 1200px) {
  width: 100%;
}

h1{
  text-align: center;
  margin: 10px 0;
}

div{
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

span{
  font-size: 80px;
  padding: 0 20px;
  margin: 5px;
  background: black;
  border-radius: 15px;
}

`

const Buttons = styled.div`
display: flex;

@media only screen and (max-width: 1200px) {
  flex-direction: column;
}
  button{
    width: 160px;
    height: 60px;
    border: none;
    outline: none;
    padding: 10px;
    margin: 40px;
    border-radius: 7px;
    background: #acac2b;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    @media only screen and (max-width: 1200px) {
      margin: 20px;
    }

    &:hover{
           cursor: pointer;
           transform: scale(1.03);
           background: #e6e653;
           color: black;
       }
  }

`

const Header = styled.div`
  

`
export default Countdown