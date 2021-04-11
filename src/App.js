
import './App.css';
import { useEffect, useState } from 'react';
import firebase from './firebase';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import Form from './Form';
import './App.css';
import { useState, useEffect } from 'react';


function App() {


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
