import './css/index.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// Redux
import { useAppDispatch, useAppSelector } from "./../../../redux/hooks";
import { setAppLanguage } from "./../../../redux/reducers/language.reducer";

const SelectLanguage = () => {

    const dispacth = useAppDispatch();
    const currentLanguage = useAppSelector((state) => state.language.appLanguage)

    const handleLanguageChange = (e: any) => {
        dispacth(setAppLanguage(e.target.value))
    }
    return (
        <div className="select-menu">
            <FontAwesomeIcon className="iconGlobe" icon={faGlobe} />
            <select
                value={currentLanguage}
                onChange={handleLanguageChange}
            >
                <option value="fr-FR">Français</option>
                <option value="en-US">English</option>
            </select>
        </div>
    )
}

export default SelectLanguage;