import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { slideItems } from "../slides";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1.2s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bgcolor};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 80px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
`;

const Image = styled.img`
  height: 80%;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {

    if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
    } else {
        setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((item) => (
          <Slide bgcolor={item.bgcolor}>
            <ImageContainer>
              <Image src={item.image} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>
                  {item.description}
              </Description>
              <Button>GET MY DISCOUNT NOW!</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
