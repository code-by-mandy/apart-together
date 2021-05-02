import { useState, useEffect } from 'react';
import firebase from './firebase';
import './App.css';
import Header from './Header';
import Filter from './Filter';
import Form from './Form';
import Story from './Story';
import Footer from './Footer';


function App() {
  const [filtered, setFiltered] = useState(false);
  const [showForm, setShowForm] = useState(false);


  //when there is a change in firebase, push to newState array, which is then set as new Stories state
  const [allStories, setAllStories] = useState([]);

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

  //filter stories per user choice - set filteredStories state with new filtered array
  const [filteredStories, setFilteredStories] = useState([]);

  const getStories = (e, emotion) => {
    e.preventDefault();
    const copyOfAllStories = [...allStories];
    const filteredStories = copyOfAllStories.filter(
      (story) => {     

        /* split emotion string values from allStories array into an emotionsArray array */
        const emotionsArray = story.emotion.split(' ');
        
        /* return array per chosen emotion, if "all" return all stories array*/
        if (emotion === "all") {
          return copyOfAllStories;
        } else {
          return emotionsArray.includes(emotion);
        }        
      });

    setFilteredStories(filteredStories);
  }

  
  return (
    <div className="App">
      <Header />
  
      <div className="ctaBox">
        <Filter getStories = {getStories} checkFiltered = { () => setFiltered(true)}/>

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
            filtered 
            ? filteredStories.map((story) => {
              return(
                <Story story={story} key={story.date}/>
              )
            })
            : allStories.map((story) => {
              return(
                <Story story={story} key={story.date}/>
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
