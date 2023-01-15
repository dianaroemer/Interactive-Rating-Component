import React, {useEffect, useState} from 'react';
import '../Styles/Rating.scss';

function Rating(props) {

    // useEffect(() => {
    //     if(props.clickedRating === 0){
    //         return;
    //     }
    //     console.log(`I am useEffect in Rating, I have updated~`);
    //     console.log(props.clickedRating);
    // }, [props.clickedRating])


    let valueButtons = [];
    for(let i = 1; i <= 5; i++){
        // console.log(typeof(props.clickedRating))
        let className = (i === parseInt(props.clickedRating) ? 'doop' : 'valueButton');
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
            {/* rating!!!!!!!!!!! */}
            

        </div>

    )
}

export default Rating;