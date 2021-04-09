import { useState } from 'react';

function Form() {
    return(
        <form>
            <input type="text">

            </input>
            <select>
                <option value="anxiety">Anxiety</option>
                <option value="frustration">Frustration</option>
                <option value="sadness">Sadness</option>
                <option value="madness">Madness</option>
                <option value="gratitude">Gratitude</option>
                <option value="inspiration">Inspiration</option>
            </select>
            <button>Submit your story</button>
        </form>
    )
}

export default Form;