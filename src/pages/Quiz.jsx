import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Quiz = () => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/api/quiz")
            .then((response) => {
                console.log("퀴즈 데이터 로드 완료:", response.data);
                setQuizData(response.data);
            })
            .catch(error => console.error("퀴즈 데이터 불러오기 오류:", error));
    }, []);

    useEffect(() => {
        if (userAnswers.length === quizData.length && quizData.length > 0) {
            console.log("최종 서버로 전송할 데이터:", { userAnswers });

            axios.post("http://localhost:8080/api/quiz/submit", userAnswers, {
                headers: {"Content-Type" : "application/json"}
            })
                .then(response => {
                    console.log("서버 응답 데이터:", response.data);
                    navigate('/result', { state: response.data });
                })
                .catch(error => console.error("퀴즈 제출 오류:", error));
        }
    }, [userAnswers]);

    

    const handleAnswerClick = (selectedOption) => {
        console.log("선택된 답안:", selectedOption);

        setUserAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers, selectedOption];
            console.log("현재까지 저장된 답안:", updatedAnswers);
            return updatedAnswers;
        });

        if (currentQuestionIndex + 1 < quizData.length) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <Container>
            {quizData.length > 0 && currentQuestionIndex < quizData.length ? (
                <>
                    <Question>{quizData[currentQuestionIndex].questionText}</Question>
                    <QuizImage src={quizData[currentQuestionIndex].imageUrl} alt="quiz image" />
                    <OptionsContainer>
                        {quizData[currentQuestionIndex].options.map((option, index) => (
                            <Button key={index} onClick={() => handleAnswerClick(option)}>
                                {option}
                            </Button>
                        ))}
                    </OptionsContainer>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </Container>
    );
};

export default Quiz;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Question = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
`;

const QuizImage = styled.img`
    width: 500px;
    height: 450px;
    object-fit: contain;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const OptionsContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

const Button = styled.button`
    width: 300px;
    height: 50px;
    background-color: #E55982;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;
