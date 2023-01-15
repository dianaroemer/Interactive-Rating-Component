import React from 'react';
import '../Styles/Rating.scss';

function Rating(props) {

    let valueButtons = [];
    for(let i = 1; i <= 5; i++){
        let className = (i === parseInt(props.clickedRating) ? 'valueButtonSelected' : 'valueButton');
        let valueButton = <button className={className}
                                value={i}
                                key={i}
                                onClick={(e) => {
                                    props.handleSetClickedRating(e, e.target.value)
                                }}>{i}</button>
        valueButtons.push(valueButton);
    }


    return(
        <div className='ratingModal'>
            <div className='ratingContent'>
                How did we do?

                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!

                {valueButtons}

                <button 
                    onClick={(e) => {
                        // e.preventDefault();
                        // console.log("you clicked button");
                        console.log('you clicked button');
                        props.toggleSetThanked(e);
                    }}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Rating;