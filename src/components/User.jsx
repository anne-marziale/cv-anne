import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import "./User.css"

function User() {
    return (
        <div className="user">
            <img src='./images/avatar.jpg' alt="" className="user__avatar"/>
            <h1 className="user__name">Anne Marziale</h1>
            <p className="user__profession">Développeur Web</p>
            <div className="user__infos">
                <p className="user__info">
                    <HomeIcon />121 rue villebois mareuil</p>
                <p className="user__info">
                    <PhoneIcon />
                    <a href="06 62 96 01 30">06 62 96 01 30</a>
                    </p>
                <p className="user__info">
                    <MailIcon />
                    <a href="annemarziale@hotmail.com">annemarziale@hotmail.com</a>
                    </p>
                <p className="user__info">
                    <EventIcon />
                    Date de naissance : 29/09/1998</p>
                <p className="user__info">
                    <LocationOnIcon />
                    Lieu de naissance : Vitry Sur Seine</p>
            </div>
            
        </div>
    )
}

export default User;
