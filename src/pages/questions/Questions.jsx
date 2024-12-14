import { Question } from "../../components/question/Question";
import { Header } from "../../components/header/Header";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionService from "../../services/QuestionService";


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
    <Container maxWidth="sm">
      {loading && <h1>Loading...</h1>}
      {!loading &&
        <div>
          <Header />
          {currentQuestionIndex < questions.length &&
            <div>
              <p>{questions[currentQuestionIndex].correct_answer}</p>
              <Question value={questions[currentQuestionIndex]} currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} />
            </div>
          }
        </div>}
    </Container>
  );
};