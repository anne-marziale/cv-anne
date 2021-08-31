import React from 'react';
import Skill from './Skill';
import Interests from './Interests';
import "./Skills.css"

function Skills() {
    return <>
        <div className="skills">
            <h2 className="h2">Compétences</h2>
            < Skill title="HTML" rating="3"/>
            < Skill title="CSS" rating="4"/>
            < Skill title="JAVASCRIPT" rating="2"/>
            < Skill title="REACT" rating="4"/>
            < Skill title="NODE" rating="2"/>
        </div>
        <div className="skills">
            <h2 className="h2">Langues</h2>
            < Skill title="Anglais" rating="5"/>
            < Skill title="Italien" rating="1"/>
            < Skill title="Espagnol" rating="2"/>
        </div>
        < Interests />
    </>
}

export default Skills;
