import React, {useState} from 'react';
// import '../Styles/InteractiveRatingComponentStyle.scss';
import {ReactComponent as ThankYouLogo} from '../images/illustration-thank-you.svg'

function Thanked(props) {

    return(
        <div>
            <ThankYouLogo/>

You selected Add rating here out of 5

Thank you!

We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!
        </div>

    )
}

export default Thanked;