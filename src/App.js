import firebase from './firebase';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [stories, setStories] = useState([]);
  
  //when there is a change in firebase, push to newState array, which is then set as new Stories state
  useEffect( () => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];
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
        <button onClick={ () => setShowForm(!showForm) }>Tell Your Story
        </button>
        {/*on click render Form component */}
        {
        showForm 
          ? <Form closeForm={() => setShowForm(false)}/>
          : null
        }
        
        {/*map stories array from firebase and return each story as a list item on page*/}
        <ul>
          {
            stories.map((story) => {
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
