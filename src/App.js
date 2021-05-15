import { useState, useEffect } from 'react';
import firebase from './components/firebase';
import Form from './components/Form';
import Filter from './components/Filter';
import Story from './components/Story';


function App() {

  //change tab title
  useEffect (() => {
    document.title="Apart Together";
    getStories("all");
  }, [])  

  //state for storing stories from firebase and whether a new story has been submitted
  const [allStories, setAllStories] = useState([]);
  const [emotionFilter, setEmotionFilter] = useState("all");
  
  // pull stories from firebase
  const getStories = (emotionString) => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (res) => {
      const rawStories = [];
      const data = res.val();
      for (let story in data) {
        rawStories.push(data[story]);
      }

    rawStories.reverse();

    let filteredStories = [];
    let filterString = new RegExp(emotionString);

    if (emotionString !== "all") {
      filteredStories = rawStories.filter(
        filteredStory => filterString.test(filteredStory.emotion)
      );
    } else {
      filteredStories = rawStories;
    } 

    setAllStories(filteredStories);
  });
}
  //if new story submitted, set newStory state to true to trigger getMovies function
  const filterSubmission = (e, emotionString) => {
    e.preventDefault();
    setEmotionFilter(emotionString);
    getStories(emotionString);
  }

  const formSubmission = (e) => {
    e.preventDefault();
    getStories(emotionFilter)
  }

  return (
    <div>
      <header>
        <h1>Apart Together</h1>
        <p>We're all experiencing the pandemic but sometimes social distancing makes it hard to feel like we're not alone. Read about other people's experiences here or share your own!</p>
      </header>
      <main>
        <div className="mainIntro">
          <h2>Stories</h2>
          <div className="ctaWrapper">
            <div className="filter icon">
                <Filter submission={filterSubmission} />
            </div>
            <div className="share icon">
                <Form submission={formSubmission}/>
            </div>
          </div>        
        </div>
        <div className="mainBody">
          <ul>
            {
              allStories.map(story => {
                return <Story story={story} key={story.date}/>
              })
            }
            
          </ul>
        </div>
      </main>
      <footer>
        <p>By Mandy Poon and Mark Harrop at Juno College</p>
      </footer>
    </div>
  );
}

export default App
