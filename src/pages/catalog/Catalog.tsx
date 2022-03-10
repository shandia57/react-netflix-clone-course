
// css
import './css/films.css';

// Redux
import { useAppSelector } from "../../redux/hooks";
import Navbar from '../../components/navbar/films/Navbar';
import Footer from '../../components/footer/Footer';



const Catalog = () => {
    const currentUserEamail = useAppSelector((state) => state.user.email)

    console.log("films", currentUserEamail)
    return (
        <div>
            <Navbar />
            {/* <Footer /> */}
        </div>
    )
}



export default Catalog;