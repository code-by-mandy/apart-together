import './App.css';
import Form from './Form';
import { useState, useEffect } from 'react';

function App() {

  const [stories, setStories] = useState([]);

  // useEffect( () => {

  // }, [];



  const handleClick = () => {
    console.log(`I've been clicked`);
    
    const [form, setForm] = useState([]);



  }


  return (
    <div className="App">
      <h1>COVID Confidential</h1>
      <h2>We all have our pandemic stories.  Feel free to share and/or read about others that have been posted</h2>
      <p>* all submitted stories are public</p>
      <div>
        <button onClick={handleClick}>Tell your Story</button>
        <ul>
          {
            stories.map((story) => {
              return(
                <li>
                  <h3>I am posting this story becuase I am feeling {emotion}</h3>
                  <p>{story}</p>
                </li>
              )
          })
          }
          </ul>
        <Form />
      </div>
      
      <footer>
        <li>Created by Mandy Poon and Mark Harrop at <a href="https://junocollege.com">Juno College</a></li>
        </footer>
    </div>
  );
}

export default App;
