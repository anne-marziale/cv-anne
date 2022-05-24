import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function User() {
  return (
    <div className="user">
      <img src="./images/photo1.jpeg" className="user__avatar" alt="Anne Marziale" />
      <h1 className="user__name">Anne Marziale</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 121 rue Villebois Mareuil 94190 Villeneuve Saint-Georges
        </p>
        <p className="user__info">
          <EventIcon /> Date de Naissance : 29 septembre 1998
        </p>
        <p className="user__info">
          <LinkedInIcon /> <a href="https://www.linkedin.com/feed/?trk=FR-SEM_google-adwords_brand-ghp">Linkedin : Anne Marziale </a>
        </p>
        <p className="user__info">
          <GitHubIcon /> <a href="https://github.com/anne-marziale">Github : anne-marziale </a>
        </p>
      </div>
    </div>
  )
}

export default User
