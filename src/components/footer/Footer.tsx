// CSS
import './css/index.css';
import './css/index-mobile.css';
import './css/index-tab.css';

// il8n
import translate from '../../il8n/translate';
import SelectLanguage from '../../custom/material-component/selectLanguage/SelectLanguage';


const Footer = () => {

    return (
        <footer>
            <div className="footerContainer">
                <p>
                    {translate("questions")}
                    {translate("call")}
                    <label className="fake">
                        {translate("NETFLIXPhoneNumber")}
                    </label>
                </p>
                <ul className="ulFooter">
                    <li className="fakeLink">{translate("faq")}</li>
                    <li className="fakeLink">{translate("helpCenter")}</li>
                    <li className="fakeLink">{translate("terms")}</li>
                    <li className="fakeLink">{translate("privacy")}</li>
                    <li className="fakeLink">{translate("cookiePreferences")}</li>
                    <li className="fakeLink">{translate("corporateInfo")}</li>
                </ul>

                <div className="containerLanguage">
                    <SelectLanguage />
                </div>
            </div>
        </footer>
    )

}

export default Footer