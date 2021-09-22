import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff8f8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    z-index: 1;
`

const Title = styled.h1`
    font-size: 80px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
`

const Button = styled.button`
    
`

const Image = styled.img`
    height: 80%;
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
               <ArrowLeftOutlined /> 
            </Arrow>
            <Wrapper>
                <Slide>
                <ImageContainer>
                    <Image src="https://images.squarespace-cdn.com/content/v1/5c109eb3a2772c5895c5cb30/1554004392333-IA0SA4N24HJHL3CF4GEB/fotografo+e-commerce.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Fall Sale</Title>
                    <Description>Get your seasonal clothing here! 50% OFF</Description>
                    <Button>GET MY DISCOUNT</Button>
                </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
               <ArrowRightOutlined /> 
            </Arrow>
        </Container>
    )
}

export default Slider;
