import React, {useState} from 'react';
import '../Styles/Rating.scss';

function Rating(props) {

    return(
        <div className='ratingModal'>
            <div className='ratingContent'>
                How did we do?

                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!

                1 2 3 4 5

                <button 
                    value={1}
                    onClick={(e) => {
                        props.handleSetClickedRating(e, e.target.value);
                    }}>
                        1
                </button>

                <button 
                    onClick={(e) => {
                        // e.preventDefault();
                        // console.log("you clicked button");
                        console.log('you clicked button');
                        props.toggleSetThanked(e);
                    }} 
                    onMouseEnter={(e) => {
                        e.preventDefault();
                        console.log(`You're hovering the submit button`);
                    }}
                    onMouseLeave={(e) => {
                        e.preventDefault();
                        console.log(`You're leaving the submit button`);
                    }}>
                    Submit
                </button>

            </div>
            {/* rating!!!!!!!!!!! */}
            

        </div>

    )
}

export default Rating;