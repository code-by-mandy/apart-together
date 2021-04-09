import './App.css';
import Form from './Form';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <h1>COVID Confidential</h1>
      <h2>We all have our pandemic stories.  Feel free to share and/or read about others that have been posted</h2>
      <p>* all submitted stories are public</p>
      <div>
        <Posts />
      <select>
        <option>Anxiety</option>
        <option>Frustration</option>
        <option>Sadness</option>
        <option>Madness</option>
      </select>
      <button>Tell your Story</button>
      <Form />
      </div>
      
      <footer>
        <li>Created by Mandy Poon and Mark Harrop at <a href="https://junocollege.com">Juno College</a></li>
        </footer>
    </div>
  );
}

export default App;
