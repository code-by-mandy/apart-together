import firebase from './firebase';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [stories, setStories] = useState([]);

  useEffect( () => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];
      console.log(response.val());

      const data = response.val();

      for (let story in data) {
        newState.push(data[story]);
      }

      setStories(newState);

    });
  }, [] );

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
            stories.map((story) => {
              console.log(story);
              return(

                <li tabIndex="0">
                  <h3>I am posting this story because I am feeling {story.emotion}</h3>
                  <p>{story.post}</p>
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
