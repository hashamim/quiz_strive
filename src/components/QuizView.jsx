import react from 'react';
import { getQuizTemplate, postQuizResponse, postQuizTemplate } from '../utils/api_utils';
import { Link } from 'react-router-dom';

class QuizView extends react.Component{
  constructor(props){
    super(props);
    this.state = {
      quiz: {fields: {}},
      question: 1,
      responses: {},
      submitted: false,
      response: ""
    }
  }
  async componentDidMount(){
    let quiz = await getQuizTemplate(this.props.match.params.quiz_id);
    this.setState({quiz});
  }
  async handleButton(){
    if(this.state.question < 5){
        this.setState({
          response: "",
          responses: {
            ["response_"+this.state.question]: this.state.response,
            ...this.state.responses,
          },
          question: this.state.question+1
        })
    } else {
      let responses = {response_5: this.state.response, Quiz_Templates: [this.state.quiz.id], ...this.state.responses};
      postQuizResponse(responses);
      this.props.history.push("/");
    }

  }
  render(){
    debugger
    return <div>
      <div className="quiz-view-header"><Link to="/">Return to Quiz List</Link></div>
      <h1>{this.state.quiz.fields.Name}</h1>
      <div className="question-card">
        <h4><span>{this.state.question + " of 5: "}</span>{this.state.quiz.fields["question_"+this.state.question]}</h4>
        <input onChange={(e)=>this.setState({response: e.target.value})} value={this.state.response} />
        <button className="submit-button" onClick={()=>this.handleButton()}>{this.state.question < 5 ? "Next" : "Submit"}</button>
      </div>
    </div>
  }
}

export default QuizView