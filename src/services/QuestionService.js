import axios from "axios";
class QuestionService {
  constructor() {
    this.baseUrl = 'https://opentdb.com/api.php?amount=';
  }
  async getQuestions(amount) {
    try {
      const response = await axios.get(this.baseUrl + amount);
      console.log(this.baseUrl + amount)
      return response.data.results;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};

export default QuestionService;