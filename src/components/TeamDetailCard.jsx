import React from 'react';
import malePhoto from '../images/male.png';
import femalePhoto from '../images/female.png';
import { FiMapPin, FiFlag } from "react-icons/fi";
import { CgGenderMale } from "react-icons/cg";
import { RiFootballLine } from "react-icons/ri";

const TeamDetailCard = ({ teaminfo }) => {

    // mini jsx
    const teamImg = (
        teaminfo.strGender === 'Male' ? 
        (
            <img src={malePhoto} alt="male-team" />
        ) : (
            <img src={femalePhoto} alt="female-team" />
        )
    )

    return (
        <div className="team_detail_card txt-white pd-3-x pd-4-y bg-blue-x bdr-x">
            <div className="detail_left flx flx-dir-col">
                <h3 className="txt-white">{teaminfo.strTeam}</h3>
                <p><FiMapPin /> Founded: {teaminfo.intFormedYear}</p>
                <p><FiFlag /> Country: {teaminfo.strCountry}</p>
                <p><RiFootballLine /> Sports type: {teaminfo.strSport === 'Soccer' ? 'Football' : teaminfo.strSport}</p>
                <p><CgGenderMale /> Gender: {teaminfo.strGender}</p>
            </div>
            <div className="detail_right">
                {teamImg}
            </div>
        </div>
    );
};

export default TeamDetailCard;