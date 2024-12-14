import { Question } from "../../components/question/Question";
import { Header } from "../../components/header/Header";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionService from "../../services/QuestionService";
import "./Questions.css";
import "../../App.css"


export const Questions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { difficulty } = location.state || {};

  useEffect(() => {
    getQuestions();
  }, [difficulty])

  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex >= questions.length) {
      navigate("/result");
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      console.log('CA', questions[currentQuestionIndex].correct_answer);
    }
  }, [currentQuestionIndex, questions]);


  const getQuestions = async () => {
    setLoading(true);
    const service = new QuestionService();
    const result = await service.getQuestions(difficulty);
    if (result) {
      setQuestions(result);
    }
    setLoading(false);
  }

  return (
    <Container className="questions-container">
      <div className="sub-container">
        {loading && <h1>Loading...</h1>}
        {!loading &&
          <div>
            <Header />
            {currentQuestionIndex < questions.length &&
              <div>
                <Question value={questions[currentQuestionIndex]} currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} />
              </div>
            }
          </div>}
      </div>
    </Container>
  );
};