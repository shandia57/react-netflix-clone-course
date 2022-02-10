import React, { Component } from 'react';
import './home.css';
import logo from '../../assets/images/logo.png';

class Home extends Component {


    render() {
        return (
            <div className="background">
                <nav>
                    <div>
                        <img className="logo" src={logo} />
                    </div>

                    <div>
                        <select>
                            <option value="">Français</option>
                            <option value="">English</option>
                        </select>
                        <button>S'identifier</button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Home;