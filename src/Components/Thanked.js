import React from 'react';
import '../Styles/Thanked.scss';
import {ReactComponent as ThankYouLogo} from '../images/illustration-thank-you.svg'

function Thanked(props) {

    return(
        <div className='thankModal'>
            <div className='thankContent'>

                
                <ThankYouLogo className='thankLogo'/>

                <p className='thankScoreBadge'>
                    You selected {props.clickedRating} out of 5
                </p>

                <p className='thankHeader'>
                    Thank you!
                </p>
                
                <p className='thankParagraph'>
                    We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
                </p>
                
            </div>
            
        </div>

    )
}

export default Thanked;