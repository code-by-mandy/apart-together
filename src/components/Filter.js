const Filter = ({submission}) => {
    return(
        <div>
        <form name="emotionFilter">
            <label htmlFor="emotionFilter" name="emotionFilter">Filter stories by emotion:</label>
            <select 
                size="8"
                id="emotionFilter" 
                name="emotionFilter"
                onChange={(e) => submission(e.target.value)}  
                required>
                <option value="all" defaultValue>All</option>
                <option value="anxious">Anxiety</option>
                <option value="frustrated">Frustration</option>
                <option value="grateful">Gratitude</option>
                <option value="inspired">Inspiration</option>
                <option value="nostalgic">Nostalgic</option>
                <option value="sad">Sadness</option>                
                <option value="nuanced">Other</option>
            </select>
        </form>
        </div>
    )
}

export default Filter;