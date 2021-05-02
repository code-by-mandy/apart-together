import './App.css';
import firebase from './firebase';
import Header from './Header';
import Filter from './Filter';
import Form from './Form';
import Story from './Story';
import Footer from './Footer';
import { useState, useEffect } from 'react';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [allStories, setAllStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);

  //when there is a change in firebase, push to newState array, which is then set as new Stories state
  useEffect( () => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();
      for (let story in data) {
        newState.push(data[story]);
      }
      newState.reverse();
      setAllStories(newState);
    });
  }, [] );

  const getStories = (e, emotion) => {
    e.preventDefault();
    const copyOfAllStories = [...allStories];
    const filteredStories = copyOfAllStories.filter(
      (story) => {        
        const emotionsArray = story.emotion.split(' ');        
        return emotionsArray.includes(emotion);;
      });

    setFilteredStories(filteredStories);
  }

  //all stories option
  

  return (
    <div className="App">
      <Header />
  
      <div className="ctaBox">
        <Filter getStories = {getStories}/>

         {/*on click render Form component */}
        <button onClick={ () => setShowForm(!showForm) }>Tell Your Story</button>
      </div>
      <div>
  
        {
        showForm 
          ? <Form closeForm={() => setShowForm(false)}/>
          : null
        }
        
        {/*map stories array from firebase and return each story as a list item on page*/}
        <ul>
          {
            filteredStories.map((story) => {
              return(
                <Story story={story}/>
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
