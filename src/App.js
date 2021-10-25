import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { getQuizTemplate, getQuizTemplates, postQuizResponse, postQuizTemplate } from './utils/api_utils';
import TemplateView from './components/TemplateView';
import QuizView from './components/QuizView';

window.getQuizTemplate = getQuizTemplate
window.getQuizTemplates = getQuizTemplates;
window.postQuizTemplate = postQuizTemplate;
window.postQuizResponse = postQuizResponse;

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Switch>
        <Route path={`/quizzes/:quiz_id`} component={QuizView}/>
        <Route path="/">
          <TemplateView />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
