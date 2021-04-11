import './App.css';
import { useEffect, useState } from 'react';
import firebase from './firebase';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

function App() {

  const [stories, setStories] = useState([]);

  const [showForm, setShowForm] = useState(false);

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
    <>
      <Header />
      
      <div className="App"> 

        <button onClick={ () => setShowForm(!showForm) }>Tell your Story</button>

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
    </>
  );
}

export default App;
