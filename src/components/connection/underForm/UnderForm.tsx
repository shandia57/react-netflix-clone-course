// css
import './css/index.css'

import fb from "../../../assets/images/fbLogo.png";



interface Props {
    fbText: Object;
    firstConnection: Object;
    signUp: Object;
    smallText: Object;
    learnMore: Object;
}


const UnderForm = (props: Props) => {

    return (
        <div className="underForm">
            <div className="containerLogoFb">
                <p><img src={fb} className="fb" /></p>
                <p className="fbText textConnection">{props.fbText}</p>
            </div>

            <div className="firstConnectionContainer textConnection">
                <p>
                    {props.firstConnection}
                    <label className="subscription fakeLink">
                        {props.signUp}
                    </label>
                </p>
                <p>
                    {props.smallText}
                    <label className="learnMore fakeLink">
                        {props.learnMore}
                    </label>
                </p>
            </div>
        </div>
    )
}

export default UnderForm;