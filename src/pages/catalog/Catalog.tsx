
// css
import './css/films.css';

// Redux
import { useAppSelector } from "../../redux/hooks";
import Navbar from '../../components/navbar/films/Navbar';
import Footer from '../../components/footer/Footer';
import Movies from './../../services/Movies';
import { json } from 'node:stream/consumers';

const movies = new Movies();
let all: any = [];
async function getData() {
    let data = await movies.getPopularMovies();
    all.push(await data);
}

const Catalog = () => {
    // movies.getPopularMovies();
    getData();
    all.forEach((value: any) => console.log(value))

    return (
        <div>
            <Navbar />
            {/* <Footer /> */}
        </div>
    )
}



export default Catalog;