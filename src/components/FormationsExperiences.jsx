import React from 'react';
import dataFormations from '../datas/Formation';
import dataExperiences from '../datas/Experience';
import Formation from './Formation';
import Experiences from './Experiences';
import "./FormationsExperience.css";

function FormationsExperiences() {
    return (<>
    <Formation datas={dataFormations}/>
    < Experiences datas={dataExperiences} />
    </>
    )
}

export default FormationsExperiences;
