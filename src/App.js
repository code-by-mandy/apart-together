import Form from './Form';
import './App.css';
import { useState, useEffect } from 'react';

function App() {


  // useEffect( () => {

  // }, [];

  const [showForm, setForm] = useState(false);
  const [stories, setStories] = useState([]);

  return (
    <div className="App">
      <h1>COVID Confidential</h1>
      <h2>We all have our pandemic stories.  Feel free to share and/or read about others that have been posted</h2>
      <p>* all submitted stories are public</p>
      <div>
        <button onClick={ () => setForm( !showForm) }>Tell your Story</button>

        {
        showForm 
          ? <Form />
          : null
      }
      <ul>
          {
            stories.map((story) => {
              return(
                <li>
                  <h3>I am posting this story becuase I am feeling ---</h3>
                  <p>---</p>
                </li>
              )
          })
          }
          </ul>
      </div>
      
      <footer>
        <li>Created by Mandy Poon and Mark Harrop at <a href="https://junocollege.com">Juno College</a></li>
        </footer>
    </div>
  );
}

export default App;
