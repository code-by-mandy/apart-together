import {useState, useEffect } from 'react';
import firebase from './firebase';


function Form({closeForm}) {
    //states that store user input per form
    const [userTale, setUserTale] = useState("");
    const [storyEmotion, setStoryEmotion] = useState("");

    //state that stores boolean value of whether form has been submitted or not - for closeForm prop method
    const [submitted, setSubmitted] = useState(false);

    // create individual story object with emotion and post keys, their values set by storyEmotion and userTale state values from event listeners
    const oneStory = {
        emotion: storyEmotion,
        post: userTale,
        date: firebase.database.ServerValue.TIMESTAMP
    };
    
    //submitStory function - pushes oneStory object to firebase, clears form, sets 'submitted' state to true to trigger useEffect
    const submitStory = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(oneStory);
        setUserTale("");
        setStoryEmotion("");
        setSubmitted(true);
    }

    //if form has been submitted, closeForm() -- unmount component
    useEffect( () => {
        if (submitted) {
          closeForm();
        }
      })


    return(
        <form action="submit" onSubmit={submitStory}>
            {/* {input for user story} set userTale state value with onChange}*/}
            <label htmlFor="story" name="story">Share your story - sign off with your name if you'd like!</label>
            <textarea 
                type="text" 
                id="story"
                name="story"
                placeholder="Please tell your story here"
                onChange={ (e) => setUserTale(e.target.value)}
                required></textarea>
            {/* {input for select emotion, set storyEmotion state value with onChange} */}
            <label htmlFor="emotion" name="emotion">Choose an emotion that goes with your story:</label>
            <select 
                id="emotion" 
                name="emotion" 
                onChange={(e) => setStoryEmotion(e.target.value)}  
                value={storyEmotion} 
                required>
                <option value="" disabled>Pick one:</option>
                <option value="anxious">Anxiety</option>
                <option value="frustrated">Frustration</option>
                <option value="sad">Sadness</option>
                <option value="mad">Madness</option>
                <option value="grateful">Gratitude</option>
                <option value="inspired">Inspiration</option>
                <option value="...not sure">Not sure</option>
            </select>
            <button type="submit">Submit your story</button>
        </form>
    )
}

export default Form;