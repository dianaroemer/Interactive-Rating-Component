import React, {useState} from 'react';
// import '../Styles/InteractiveRatingComponentStyle.scss';

function Rating(props) {

    return(
        <div>
            {/* rating!!!!!!!!!!! */}
            How did we do?

            Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!

            1 2 3 4 5

            <button onClick={(e) => {
                // e.preventDefault();
                // console.log("you clicked button");
                console.log('you clicked button');
                props.toggleSetThanked(e);
            }}>
                Submit
            </button>


        </div>

    )
}

export default Rating;