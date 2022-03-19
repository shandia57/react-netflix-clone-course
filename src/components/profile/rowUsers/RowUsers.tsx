import "./css/index.css";

import { useNavigate } from 'react-router-dom';


// Redux
import { useAppSelector, useAppDispatch } from "./../../../redux/hooks";
import { setUserName } from "../../../redux/reducers/user.reducer";
import translate from "../../../il8n/translate";


function findCurrentUser(email: String, users: any[]) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].account === email) {
            return users[i];
        }
    }
    return [];
}

const RowUsers = () => {

    const users = useAppSelector((state) => state.user.users);
    const email = useAppSelector((state) => state.user.email);
    const user = findCurrentUser(email, users);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const createNewUser = () => {
        navigate('/profile/create')
    }

    function changeCurrentUser(event: any) {
        dispatch(setUserName(event.target.dataset.user))
        navigate('/browse')
    }

    return (

        <div className="conatinerUserProfile">
            {user.accountDetails.map((value: any, index: number) =>
                <div onClick={changeCurrentUser} className="userProfile fakeLink" key={index} >
                    <img data-user={value.username} src={"/../assets/avatar/" + value.image} />
                    <p data-user={value.username}>{value.username}</p>
                </div>
            )
            }
            <div className="userProfile fakeLink" onClick={createNewUser}>
                <img src="/../assets/avatar/addProfil.png" />
                <p>{translate('addNewProfile')}</p>
            </div>
        </div>

    )
}


export default RowUsers;