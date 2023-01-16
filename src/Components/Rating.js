import React from 'react';
import '../Styles/Rating.scss';
import {ReactComponent as StarLogo} from '../images/icon-star.svg'

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

                <div className='starLogoContainer'>
                    <StarLogo className='starLogo'/>    
                </div>

                
                <p className='modalHeader'>
                    How did we do?
                </p>
                
                <p className='modalParagraph'>
                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                </p>

                <div className='ratingButtonsContainer'>
                    {valueButtons}
                </div>

                <button 
                    className='submitButton'
                    onClick={(e) => {
                        // e.preventDefault();
                        // console.log("you clicked button");
                        console.log('you clicked button');
                        props.toggleSetThanked(e);
                    }}>
                    SUBMIT
                </button>
            </div>
        </div>
    )
}

export default Rating;