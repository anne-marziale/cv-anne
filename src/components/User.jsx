import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" className="user__avatar" alt="John Doe" />
      <h1 className="user__name">Anne Marziale</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 121 rue Villebois Mareuil
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33662960130">0662960130</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:annemarziale@hotmail.com">annemarziale@hotmail.com</a>
        </p>
        <p className="user__info">
          <EventIcon /> Date de Naissance : 29 septembre 1998
        </p>
        <p className="user__info">
          <LocationOnIcon /> Lieu de Naissance: Vitry Sur Seine
        </p>
      </div>
    </div>
  )
}

export default User
