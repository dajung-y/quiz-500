import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";

const Result = () => {

    const location = useLocation();
    console.log("Result Page Data:", location.state); 
    const navigate = useNavigate();
    const resultData = location.state;
    const {score, resultMessage, resultImage} = location.state || {score: 0, resultMessage: "no result", resultImage: ""};

    return (
        <Container>
            <Header></Header>
            <Image src={resultImage} alt="result image"></Image>
            <Text>{resultMessage}</Text>
            <Button onClick={() => navigate("/")}>다시하기</Button>
        </Container>
    )
}
export default Result;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    maring-bottom: 3rem;
    align-items: center;
    height: 100vh;
`;

const Image = styled.img`
    width: 600px;
    height:450px;
    object-fit: contain;
    margin-bottom: 1rem;
`;

const Text = styled.h2`
    font-family: 'Font1Bold';
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
`;

const Button = styled.button`
    margin-bottom: 3rem;
    width: 120px;
    height: 50px;
    text-align: center;
    background-color: #F35A91;
    color: white;
    font-family: 'Font1Bold';
    font-size: 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;