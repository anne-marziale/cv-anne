import React from 'react';
import ComputerIcon from '@material-ui/icons/Computer';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LanguageIcon from '@material-ui/icons/Language';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function Interests() {
    return (
        <div className="skills">
            <h2 className="h2">Centre d'interêts</h2>
            <ul>
                <li>Informatique</li>
                <li>Littérature</li>
                <li>Langues Vivantes</li>
                <li>Musique</li>
            </ul>
            <div className="interests">
            <ComputerIcon style={{ fontSize: 40 }}/>
            <MenuBookIcon style={{ fontSize: 40 }} />
            <LanguageIcon style={{ fontSize: 40 }} />
            <MusicNoteIcon style={{ fontSize: 40 }} />
            </div>
        </div>
    )
}

export default Interests;
