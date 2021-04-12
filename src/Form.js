import {useState } from 'react';
import firebase from './firebase';


function Form() {
    const [userTale, setUserTale] = useState("");
    const [storyEmotion, setStoryEmotion] = useState("");


    const tagEmotion = (e) => {
        setStoryEmotion(e.target.value);
    }

    const storyInput = (e) => {
        setUserTale(e.target.value);
    }

    const oneStory = {
        emotion: storyEmotion,
        post: userTale
    };

    const submitStory = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(oneStory);
    }


    return(
        <form action="submit" >
            <label htmlFor="story">Share your story: (optional) - sign off with your name if you'd like!</label>
            <textarea 
                type="text" 
                id="story"
                placeholder="Please tell your story here"
                onChange={storyInput}
                required
            >
            </textarea>
            <label>Would you like to tag this story with an emotion? If yes, please pick one:</label>
            <select onChange={tagEmotion}>
                <option value="anxious">Anxiety</option>
                <option value="frustrated">Frustration</option>
                <option value="sad">Sadness</option>
                <option value="mad">Madness</option>
                <option value="gratitude">Gratitude</option>
                <option value="inspired">Inspiration</option>
            </select>
            <button type="submit" onSubmit={submitStory}>Submit your story</button>
        </form>
    )
}

export default Form;