import "./css/index.css";

// components
import Navbar from "../../components/navbar/films/Navbar";

// redux
import { useAppSelector } from "../../redux/hooks";
import SingleContent from "../../components/singleContent/SingleContent";
import translate from "./../../il8n/translate";
import Footer from "../../components/footer/Footer";

const findUserWatchList = (users: any[], email: string, username: string) => {


    for (let i = 0; i < users.length; i++) {
        if (users[i].account === email) {
            for (let j = 0; j < users[i].accountDetails.length; j++) {
                if (users[i].accountDetails[j].username === username) {
                    return users[i].accountDetails[j].watchList;
                }
            }
        }
    }
    return false;
}


const WatchList = () => {

    const users = useAppSelector((state) => state.user.users);
    const email = useAppSelector((state) => state.user.email);
    const username = useAppSelector((state) => state.user.username);
    const watchList = findUserWatchList(users, email, username)
    return (

        <div className="fullwidth">
            <Navbar />
            <div className="containerPosters">
                <h1>{translate("myList")}</h1>
                <div className="rowPosters">
                    {watchList.map((details: any, index: number) =>
                        <SingleContent key={index} type={details.type} id={details.id} />
                    )}
                </div>

            </div>

        </div>

    )
}

export default WatchList;