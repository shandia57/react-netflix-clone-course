import './connection.css';
import LoginContainer from '../../components/connection/LoginContainer';
import Logo from '../../components/layout/logo/Logo';
import Footer from '../../components/footer/Footer';

const Connection = () => {
    return (
        <div className="background">
            <div className="overlay overlayBlack " >
                <div className="containerNav">
                    <div className="home-nav">
                        <Logo />
                    </div>
                </div>
                <LoginContainer />
                <Footer />
            </div >
        </ div >


    )
}



export default Connection;