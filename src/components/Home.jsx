import { useState ,useEffect } from 'react';
import Header from './Header';
import Team from './Team';

const Homepage = () => {
    // states
    const [state, setState] = useState({
        teams: [],
        loaded: false
    });


    // useEffects
    useEffect(() => {
        async function fetchTeams() {
            await fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(response => response.json())
            .then(data => {
                // let readyData = data.teams.slice(10)
                setState({
                    ...state,
                    teams: data.teams,
                    loaded: true
                })
            })
        }
        fetchTeams();
    }, [])

    return (
        <div className="wrapper">
            <Header content={ {title: "Teams Jar"} } />
            <Team data={state} />
        </div>
    );
};

export default Homepage;