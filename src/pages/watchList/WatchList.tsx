import "./css/index.css";


// redux
import { useAppSelector } from "../../redux/hooks";
import SingleContent from "../../components/singleContent/SingleContent";
import translate from "./../../il8n/translate";
import Footer from "../../components/footer/Footer";
import Banner from "../banner/Banner";

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

        <div >
            <Banner />
            <div className="containerPosters">
                <h1>{translate("myList")}</h1>
                <div className="rowPosters">
                    {watchList.map((details: any, index: number) =>
                        <SingleContent key={index} type={details.type} id={details.id} />
                    )}
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default WatchList;