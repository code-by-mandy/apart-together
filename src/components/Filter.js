import {useState} from 'react';

const Filter = ({submission}) => {
    
    /*state to store chosen emotion at filter*/
    const [emotionString, setEmotionString] = useState("");

    const handleSubmit = (e) => {
        submission(e, emotionString);
    }

    return(
        <form name="emotionFilter" onSubmit={handleSubmit}>
            <label htmlFor="emotionFilter">Filter stories by emotion:</label>
            <select 
                id="emotionFilter" 
                onChange={(e) => setEmotionString(e.target.value)}  
                required>
                <option value="all" defaultValue>All</option>
                <option value="anxious">Anxiety</option>
                <option value="frustrated">Frustration</option>
                <option value="sad">Sadness</option>
                <option value="grateful">Gratitude</option>
                <option value="inspired">Inspiration</option>
                <option value="nuanced">Other</option>
            </select>
            <button type="submit">Filter</button>
        </form>
    )
}

export default Filter;