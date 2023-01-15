import React, {useState} from 'react';
import '../Styles/InteractiveRatingComponentStyle.scss';

import Rating from './Rating';
import Thanked from './Thanked';

function InteractiveRatingComponent(props) {

    const [clickedRating, setClickedRating] = useState(0);
    function handleSetClickedRating(e, newValue) {
        e.preventDefault();
        // console.log(`You cliked a new rating`)
        // console.log(`You are setting the new rating to: `)
        // console.log(newValue);
        setClickedRating(newValue);        
    }

    const [isThanked, setThanked] = useState(false);
    function toggleSetThanked(e) {
        e.preventDefault();
        console.log(`you're inside toggleSetThanked`)
        if(!isThanked){
            setThanked(true);
        } else {
            console.log(`You've already submitted a response! Reload the webpage to try again!`);
        }
    }

    return(
        <div className='interactiveRatingModal'>

            {!isThanked ? 
                <Rating toggleSetThanked={toggleSetThanked}
                    handleSetClickedRating={handleSetClickedRating}
                    clickedRating={clickedRating}/> :
                <Thanked/>}
                {clickedRating}
            
        </div>
    );

}

export default InteractiveRatingComponent;