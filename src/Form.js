import { useEffect, useState } from 'react';
import firebase from './firebase';


function Form() {

    const [userInput, setUserInput] = useState('');
    const [emotion, setEmotion] = useState('');

    const handleChange = (input) => {
        console.log(input.target.value)
        setUserInput(input.target.value);
    }

    const handleEmotion = (emotion) => {
        console.log(emotion.target.value);
        // setEmotion(emotion.target.name);
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(`I've been clicked`);
        // const dbRef = firebase.database().ref();


        // dbRef.child('post');
        // dbRef.child('emotion');
        // setEmotion('');
        // setUserInput('');

        // useEffect( () => {
        //     const dbRef = firebase.database().ref();
    
        //     dbRef.on('value', (response) => {
    
        //         console.log(response);
        //         const newState = [];

        //         const data = response.val();

        //         for (let key in data) {
        //             newState.push({
        //                 key: key,
        //                 name: data[key],
        //                 emotion: {emotion},
        //                 input: {userInput}
        //             })
        //         }
        //     })
        // }, [] );

    }

    return(
        <form>
            <label htmlFor="newPost">Share your story: (optional) - sign off with your name if you'd like!</label>
            <input
                type="text"
                key="key"
                id={emotion}
                onChange={handleChange}
                value={userInput}
                required
            />
            <p>Would you like to tag this story with an emotion? If yes, please pick one:</p>
            <select onChange={handleEmotion}>
                <option id="anxiety">Anxiety</option>
                <option id="frustration">Frustration</option>
                <option id="sadness">Sadness</option>
                <option id="madness">Madness</option>
                <option id="gratitude">Gratitude</option>
                <option id="inspiration">Inspiration</option>
            </select>
            <button type="submit" onSubmit={handleSubmit}>Submit your story</button>
        </form>
    )
}

export default Form;