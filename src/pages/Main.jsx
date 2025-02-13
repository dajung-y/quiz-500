import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mainImage from "../images/main_image.jpg"

const Main = () => {
    const navigate = useNavigate();

    return (
        <MainContainer>
            <Image src={mainImage} alt="main image" />
            <Title>500 Days Test</Title>
            <Button onClick={() => navigate('/quiz')}>시작하기</Button> 
        </MainContainer>
    );
};

export default Main;


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 2rem;
    text-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
`;

const Image = styled.img`
    width: 650px;
    height:auto;
    object-fit: contain;
    margin-top: 3rem;
    margin-bottom: 1rem;
`;

const Button = styled.button`
    margin-top: auto;
    margin-bottom: 5rem;
    width: 120px;
    height: 50px;
    text-align: center;
    background-color: #F35A91;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;