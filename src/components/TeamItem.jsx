import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

const TeamItem = ({ team }) => {
    return (
        <div className="card bg-white pd-5-x pd-4-y flx flx-center-y flx-dir-col txt-darkish" key={team.idTeam}>
            <img src={team.strTeamBadge} alt={team.strTeam} />
            <h2 className="my-1">{team.strTeam}</h2>
            <h5 className="font-h">Sports type: { team.strSport === 'Soccer' ? 'Football' : team.strSport }</h5>
            <Link to={`/team/${team.idTeam}`} className="btn-explr bg-indigo-x txt-white my-2">explore <FiArrowRight /></Link>
        </div>
    );
};

export default TeamItem;