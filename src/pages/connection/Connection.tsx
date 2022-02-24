import './connection.css';
import LoginContainer from '../../components/connection/LoginContainer';
const Connection = () => {
    return (
        <div className="background">
            <div className="overlay">
                <LoginContainer />
            </div>
        </div>
    )
}



export default Connection;