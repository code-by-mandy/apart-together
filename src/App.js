import { useState, useEffect } from 'react';
import firebase from './components/firebase';
import ReactModal from 'react-modal';
import Form from './components/Form';
import Filter from './components/Filter';
import Story from './components/Story';
import './App.css';
import filter from './assets/filter_icon.svg'
import share from './assets/share_icon.svg'


function App() {

  //change tab title
  useEffect (() => {
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
    
    //check for any filters

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
  //if filter is used
  const filterSubmission = (emotionString) => {
    setEmotionFilter(emotionString);
    getStories(emotionString);
    setShowFilter(false);
  }

  //if new story is submitted
  const formSubmission = (e) => {
    e.preventDefault();
    getStories(emotionFilter);
    setShowForm(false);
  }

  //form modal
  ReactModal.setAppElement('#root');
  const [showForm, setShowForm] = useState(false);

  //filter modal (mobile)
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <header>
        <h1>Apart Together</h1>
        <p>We're all experiencing the pandemic but sometimes social distancing makes it hard to feel like we're not alone.</p>
        <p>Read about other people's experiences here or share your own!</p>
      </header>
      <main>
        <div className="mainIntro">
          <h2>Stories</h2>
          <div className="ctaWrapper">
            <div className="filter">
              <div className="mobileCTA">
                <button className="iconWrapper" onClick={() => setShowFilter(true)}>
                  <img className="icon" src={filter}/>
                  <p className="iconCaption">Filter</p>
                </button>
                <ReactModal
                isOpen={showFilter}
                contentLabel={"Filter stories"}
                onRequestClose={() => setShowFilter(false)}
                style={{content: {
                  padding: 0,
                }}}
                >
                  <div className="modalBody">
                    <div>
                      <button className="cancel" onClick={() => setShowFilter(false)}>Cancel</button>
                    </div>
                    <Filter submission={filterSubmission} />
                  </div>
                </ReactModal>
              </div>   
              <div className="desktopCTA">
                <Filter submission={filterSubmission} />
              </div>          
            </div>
            <div className="share">
              <div className="mobileCTA">
                <button className="iconWrapper" onClick={() => setShowForm(true)}>
                  <img className="icon" src={share}/>
                  <p className="iconCaption">Post</p>
                </button>
              </div>
              <button className="desktopCTA openForm" onClick={() => setShowForm(true)}>Share your story!</button>
              <ReactModal
              isOpen={showForm}
              contentLabel={"Story submission form"}
              onRequestClose={() => setShowForm(false)}
              >
                <div className="modalBody">
                  <button className="cancel" onClick={() => setShowForm(false)}>Cancel</button>
                  <Form submission={formSubmission}/>
                </div>                
              </ReactModal>
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
