import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function UserInfo(props) {
    const history = useHistory();
    const [nameAsteroid, setNameAsteroid] = useState('');
    const [ip, setIp] = useState('');
    const [hazardous, setHazardous] = useState('');
    useEffect(() => {
        const { name, nasa_jpl_url, is_potentially_hazardous_asteroid } = history.location.state;
        setNameAsteroid(name ? name : '');
        setIp(nasa_jpl_url ? nasa_jpl_url : '');
        setHazardous(is_potentially_hazardous_asteroid === false ? 'false' : 'true');
    }, []);
    return (
        <div className='userInfoContainer'>
            <span>Listing details of the asteroid</span>
            <ul>
                <li>
                    name : {nameAsteroid}
                </li>
                <li>
                    nasa_jpl_url: {ip}
                </li>
                <li>
                    is_potentially_hazardous_asteroid:  {hazardous}
                </li>
            </ul>
        </div>
    );
}