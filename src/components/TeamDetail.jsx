import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import TeamDetailCard from './TeamDetailCard';
import Loading from './Loading';
import { FiArrowLeft } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

//FaFacebook


const TeamDetail = () => {
    // destructure params
    const { teamId } = useParams();

    // states
    const [team, setTeam] = useState({
        loading: true,
        info: {},
        error: null
    })




    // use-effect
    useEffect(() => {
            fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(response => response.json())
            .then(thisdt => {
                let infoData = thisdt.teams[0];
                // console.log(infoData)
                setTeam({
                    ...team,
                    info: infoData,
                    loading: false
                })
            })
            .catch(err => {
                setTeam({
                    ...team,
                    loading: false,
                    info: null,
                    error: err.message
                })
            })
        
    }, [teamId])

    return (
        <>
            {
                team.error ? (
                    <Header content={{title: "Error!", image: false}} />
                ) : (<Header content={{title: team.info.strTeam, image: team.info.strTeamBadge}} />)
            }
            
            <div className="team_details">
                {team && team.loading ? (<Loading />) : (
                    team.error || typeof(team.info) !== 'object' ? (
                        <div className="detail_error">
                            <h1>Error 404!</h1>
                            <p>{team.error}</p>
                            <button style={{border: 'none'}} className="btn-explr bg-indigo-x txt-white my-2" onClick={() => window.history.back()}><FiArrowLeft /> go back</button>
                        </div>
                    ) : (
                        <div className="team_detail_wrapper">
                            <TeamDetailCard teaminfo={team.info} />
                            <p className="txt-white team_desc">
                                {team.info.strDescriptionEN}
                            </p>
                            <ul className="flx flx-center social_links">
                                <li><a href={'//' + team.info.strTwitter} target="_blank" rel="noreferrer" className="bg-twt"><FaTwitter /> </a></li>
                                <li><a href={'//' + team.info.strFacebook} target="_blank" rel="noreferrer" className="bg-fb"><FaFacebookF /></a></li>
                                <li><a href={'//' + team.info.strYoutube} target="_blank" rel="noreferrer" className="bg-ytb"><FaYoutube /></a></li>
                            </ul>
                        </div>
                    )
                )}
            </div>
        </>
    );
};

export default TeamDetail;