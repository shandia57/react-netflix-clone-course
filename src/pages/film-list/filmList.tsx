
// css
import './css/films.css';

// Redux
import { useAppSelector } from "./../../redux/hooks";
import SelectLanguage from '../../custom/material-component/selectLanguage/SelectLanguage';



const FilmList = () => {
    const currentUserEamail = useAppSelector((state) => state.user.email)

    console.log("films", currentUserEamail)
    return (
        <div className="fullWidth">
            <h1>{currentUserEamail}</h1>
            <h1>Coucou</h1>
            <SelectLanguage />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla incidunt soluta, delectus vel doloribus omnis dignissimos provident mollitia quidem exercitationem praesentium magnam officia officiis repellendus sit sint consectetur! Esse, nihil!</p>
        </div>
    )
}



export default FilmList;