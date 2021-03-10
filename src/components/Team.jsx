import React from 'react';
import Loading from './Loading';
import TeamItem from './TeamItem';

const Team = ({ data }) => {
    return (
        <div className="teams grd grd-col-3 gap-2 pd-2">
                {
                    data.loaded ? (
                        data.teams.map(tm => (
                            <TeamItem team={tm} key={tm.idTeam} />
                        ))
                    ) : (<Loading />)
                }
        </div>
    );
};

export default Team;