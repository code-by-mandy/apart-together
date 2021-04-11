import firebase from './firebase';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [stories, setStories] = useState([]);

  // useEffect( () => {

  return (
    <div className="App">
    <Header />
      <div>
        <button onClick={ () => setShowForm( !showForm) }>Tell your Story</button>

        {
        showForm 
          ? <Form />
          : null
        }
        <ul>
          {
            stories.map((story, index) => {
              console.log(story, index);
              return(

                <li index={index}>
                  <h3>I am posting this story because I am feeling ____</h3>
                  <p>Paragraph from the post goes here.  I am trying to figure out how to grab the text from Firebase to populate it!</p>
                </li>
              )
            })
          }
        </ul>
      </div>
      <Footer />
      </div>
  );
}

export default App;
