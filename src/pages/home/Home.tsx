// CSS
import './css/home.css';
import './css/home-mobile.css';
import './css/home-tab.css';


import Navbar from '../../components/navbar/Navbar';
import Titles from '../../components/home/titles/Titles';
import GetStarted from '../../components/home/searchbar/GetStarted';



const Home = () => {

    return (

        <div id="App" className="background">
            <div className="overlay">

                <Navbar />

                <div className="mainContainer">
                    <Titles />
                    <GetStarted />
                </div>
            </div>

        </div >
    )
}

export default Home;