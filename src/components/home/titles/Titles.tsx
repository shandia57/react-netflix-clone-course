
// css
import './css/titles.css';
import './css/titles-tab.css';
import './css/titles-mob.css';


// il8n
import translate from '../../../il8n/translate';

const Titles = () => {


    return (
        <div className="containerTitles">
            <h1>{translate("homeH1")}</h1>
            <h2>{translate("homeH2")}</h2>
            <h3>{translate("homeH3")}</h3>
        </div>
    );
}

export default Titles;