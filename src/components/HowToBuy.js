import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'


function HowToBuy() {
  return (
    <Container>
        <Wrap>
            <Header>
                <h1>HOW TO BUY NFT</h1>
            </Header>

            <MainWrapper>
                <Title className='numberOne__metamask'>
                    <h1>1. Get Metamask</h1>
                </Title>
                <Content>
                    <ContentLeft>
                    <ul>
                            <li>Download and install the Metamask wallet extension on a desktop browser like Google Chrome.</li>
                            <li>Set up Matic Polygon Network in your Metamask </li>
                        </ul>
                    </ContentLeft>
                    <ContentRight>
                    <ReactPlayer  url='/images/nftvideo2.mp4' controls='true' config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true'  width='90%' height=''/>
                    </ContentRight>
                </Content>


                <Title className='numberTwo__polygon'>
                    <h1>2. Buy Matic (Polygon)</h1>
                </Title>
                <Content>
                    <ContentLeft>
                    <ul>
                            <li>Buy Matic Polygon from your Binance Account. Buy enough to cover your NFTs and an extra
$10-$20 for network transfer fees (it shouldn’t cost anywhere near $10 for additional Network transfer fees).

                                    <ul>
                                        <li style={{fontSize: '20px'}}>Withdraw Matic from Binance</li>
                                        <li style={{fontSize: '20px'}}>Go to your Metamask.</li>
                                        <li style={{fontSize: '20px'}}>Select Address</li>
                                        <li style={{fontSize: '20px'}}>Copy Address</li>
                                        <li style={{fontSize: '20px'}}>Go to your Binance Account</li>
                                        <li style={{fontSize: '20px'}}>Select Withdraw</li>
                                        <li style={{fontSize: '20px'}}>Select Crypto</li>
                                        <li style={{fontSize: '20px'}}>Select Matic Polygon</li>
                                        <li style={{fontSize: '20px'}}>Select Network</li>
                                        <li style={{fontSize: '20px'}}>Scroll down to Matic Polygon</li>
                                        <li style={{fontSize: '20px'}}>Select Matic Polygon</li>
                                        <li style={{fontSize: '20px'}}>Select confirm</li>
                                        <li style={{fontSize: '20px'}}>Wait for transaction to confirm ($1 or less for Network transfer fee)</li>
                                        <li style={{fontSize: '20px'}}>Done. Matic Polygon will be in your Metamask </li>

                                    </ul>
                                </li>
                           
                        </ul>

                       
                        
                    </ContentLeft>
                    <ContentRight>
                    <ReactPlayer  url='/images/nftvideo2.mp4' controls='true' config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true'  width='90%' height=''  />

                    <h5>Don’t Have a Binance Account?</h5>
                        <a href='www.google.com'>Create Binance Account</a>
                        <p>(ignore if you have a Binance Account and carry on to step 3 below) </p>
                    </ContentRight>
                </Content>


               


                <Title className='numberFour__opensea'>
                    <h1>3.Swap Matic for ETH on Polygon</h1>
                </Title>
                <Content>
                    <ContentLeft>
                    <ul>
                        <li>Visit quickswap.exchange</li>
                        <li>Connect your Metamask wallet with the blue button and trade some of your Matic for ETH. Leave some Matic in your wallet to cover Network transfer fees/gas fees ($1 or less for fees)</li>       
                           
                    </ul>

                    
                       
                        
                    </ContentLeft>
                    <ContentRight>
                    <ReactPlayer  url='/images/nftvideo2.mp4' controls='true' config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' width='90%' height='' />
                    </ContentRight>
                </Content>


                <Title className='numberThree__ethToPolygon'>
                    <h1>4.Create a Opensea profile</h1>
                </Title>
                <Content>
                    <ContentLeft>
                    <ul>
                        <li>Connect wallet</li>
                        <li>Buy NFT with Matic Polygon (ETH on Polygon) </li>       
                           
                    </ul>

                    <h5>Note:</h5>
                        <p>Your NFT will be stored on your Opensea account and connected to ONLY your wallet.
Keep your 12 word seed phrase and password to your Metamask safe, and don’t give your 12 word seed phrase or password to ANYONE!
</p>
                        <h4>Success! Done!</h4>

                       
                        
                    </ContentLeft>
                    <ContentRight>
                    <ReactPlayer  url='/images/nftvideo2.mp4'  config={{ file: { attributes: {autoPlay: true,muted: true  }}}} playing='playing' loop='true' width='90%' height='' />
                    </ContentRight>
                </Content>
            </MainWrapper>
        </Wrap>

    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;

`

const Wrap = styled.div`
    width: 95%;

`

const Header = styled.div`
text-align: center;
margin: 50px 0;
    h1{
        font-size: 65px;
    }

`

const MainWrapper = styled.div`
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;

    .numberOne__metamask{
        background: linear-gradient(180deg, #0000004A -80%, #000000 100%), url('/Images/metamask.png');
        background-size: cover;
        background-repeat: no-repeat;
       
    }

    .numberTwo__polygon{
        background: linear-gradient(180deg, #0000004A -80%, #000000 100%), url('/Images/polygon.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        
    }

    .numberThree__ethToPolygon{
        background: linear-gradient(180deg, #0000004A -80%, #000000 100%), url('/Images/ethToPolygon.jpeg');
        background-size: cover;
        background-repeat: no-repeat;
        
    }

    .numberFour__opensea{
       
        background: linear-gradient(180deg, #0000004A -80%, #000000 100%), url('/Images/opensea5.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }


`

const Title = styled.div`
    width: 100%;
    height: 120px;
    border: 1px solid #4444d4;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 40px ;
    text-transform: uppercase;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    // &:hover{
    //     cursor: pointer;
    //     border: 1px solid #4444d4;
    //     transform: scale(1.01);
    // }
    

    h1{
        font-size: 60px;

        @media only screen and (max-width: 1200px) {
            font-size: 35px;
            text-align: center;
          }
    }
   

    
`

const Content = styled.div`
    width: 100%;
    display: flex;
    border-radius: 15px;
    background: url('/Images/mainback.png');

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
      }
    


`

const ContentLeft = styled.div`
    width: 50%;
    padding: 30px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
      }

    li{
        font-size: 22px;
        margin: 20px 0;

        @media only screen and (max-width: 1200px) {
            font-size: 17px;
          }
    }

    h5{
        margin-top: 50px ;
    }

    a{
        text-decoration: none;
    }

   
`

const ContentRight = styled.div`
    width: 50%;
    padding: 50px 0;
   

    @media only screen and (max-width: 1200px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

    h5{
        margin-top: 50px ;
    }

    a{
        text-decoration: none;
    }
`
export default HowToBuy