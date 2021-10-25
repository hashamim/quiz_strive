import react from 'react';
import { getQuizTemplates } from '../utils/api_utils';
import { Link } from 'react-router-dom'

class TemplateView extends react.Component{
  constructor(props){
    super(props);
    this.state = {
      templates: [],
    }
  }
  async componentDidMount(){
    let templates = await getQuizTemplates();
    this.setState({templates});
  }

  render(){
    return <div className="template-view">
      <h1>Quizzes</h1>
      <h3>Click a Quiz to take it</h3>
      <ul>
        {this.state.templates.map(template => <li key={template.id}>
                                                <Link to={`/quizzes/${template.id}`}>{template.fields.Name}</Link>
                                              </li>
        )}
      </ul>
      <a href="https://airtable.com/shr8VSMuZVTZmjWAv">Add a new Quiz Template</a>
      <a href="https://airtable.com/shrB5YfiadVivuuKA/tbl3p7Kr9KWOOiAvl">See the Quiz Database</a>
      <a href="https://airtable.com/shrXJfvVK75UcNvfv/tbl9UnLosd3ZTOIbK">See the Response Database</a>
    </div>
  }
}

export default TemplateView