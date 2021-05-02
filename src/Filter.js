import {useState} from 'react';

const Filter = ({getStories}) => {
    
    /*state to store chosen emotion at filter*/
    const [emotionFilter, setEmotionFilter] = useState("");

    /*show all stories by default*/

    /*can't select first option*/

    return(
        <form name="emotionFilter" onSubmit={ (e) => getStories (e, emotionFilter)}>
            <label htmlFor="emotionFilter">Filter stories by emotion:</label>
            <select 
                id="emotionFilter" 
                onChange={(e) => setEmotionFilter(e.target.value)}  
                required>
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