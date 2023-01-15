import React, {useState} from 'react';
import '../Styles/InteractiveRatingComponentStyle.scss';

import Rating from './Rating';
import Thanked from './Thanked';

function InteractiveRatingComponent(props) {

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
                <Rating toggleSetThanked={toggleSetThanked}/> :
                <Thanked/>}
            
        </div>
    );

}

export default InteractiveRatingComponent;