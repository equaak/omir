import { observer } from 'mobx-react-lite';
import userStore from '../../store/userStore/UserStore';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './Profile.css';

const Profile = observer(() => {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        initProfile();
    })

    const initProfile = () => {
        if(userStore.token === ""){
            navigate('/auth');
        }
        else{
            setFirstname(userStore.user.firstName);
            setLastname(userStore.user.lastName);
            setEmail(userStore.user.email);
        }
    }

    const handleContacts = async () => {
        if(firstname !== '' || lastname !== ''){
            const responce = await axios.post('http://localhost:5000/customers/update/contacts', {iin: userStore.user.iin, name: firstname, surname: lastname, number: userStore.user.phoneNumber});
    
            userStore.setUser(responce.data);
        }
    }

    const handleEmailEdit = async () => {
        if(email !== ''){
            const responce = await axios.post('http://localhost:5000/customers/update/email', {iin: userStore.user.iin, email: email});
    
            userStore.setUser(responce.data);
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
    }

    return(
        <main>
            <div className="wrapper">
                <div className="profile-container">
                    <div className="profile">
                        <p className="profile-title">My profile</p>
                        <div className="profile-part">
                            <p className="profile-part-title">First name</p>
                            <input name="firstName" value={firstname} onChange={handleFirstname} />
                        </div>
                        <div className="profile-part">
                            <p className="profile-part-title">Last name</p>
                            <input name="lastName" value={lastname} onChange={handleLastname} />
                        </div>
                        <button onClick={handleContacts} className="profile-button">Save</button>
                        <div className="divider"></div>
                        <p className="profile-title">Email</p>
                        <div className="profile-part">
                            <p className="profile-part-title">E-mail</p>
                            <input name="email" value={email} onChange={handleEmail} />
                        </div>
                        <button onClick={handleEmailEdit} className="profile-button">Save</button>
                    </div>
                </div>
            </div>
        </main>
    )
})

export default Profile;