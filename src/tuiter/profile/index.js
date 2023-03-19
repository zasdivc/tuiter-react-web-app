import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMapMarkerAlt, faCalendarAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

function ProfileComponent() {
    const profile = useSelector(state => state.profile);
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <FontAwesomeIcon icon={faArrowLeft} className="me-5"/>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <i style={{ fontSize: '24px' }}>{profile.firstName} {profile.lastName}</i>
                    <div style={{ color: 'grey' }}>6,114 Tweets</div>
                </div>
            </div>


            <div style={{ position: 'relative' }}>
                <img src="../images/astro.png" width="500" height="300" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '0', left: '0' }}>
                    <img src="../images/nasa.png" width="100" height="100" style={{ borderRadius: '50%', padding: '10px', backgroundColor: 'white' }} />
                </div>
            </div>

            <Link to="/tuiter/edit-profile">
                <div style={{ position: 'absolute', right: 0 }}>

                    <button className="btn" style={{ border: '1px solid black' }}>Edit Profile</button>
                </div>
            </Link>


            <div>
                <i style={{ fontSize: '24px' }}>{profile.firstName} {profile.lastName}</i>
                <div style={{ color: 'grey' }}>{profile.handle}</div>
            </div>

            <br/>

            <div>
                {profile.bio}
            </div>
            <br/>

            <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }}/> {profile.location}
                <FontAwesomeIcon icon={faCommentAlt} style={{ margin: '0 5px' }}/> {profile.dateOfBirth}
                <FontAwesomeIcon icon={faCalendarAlt} style={{ marginLeft: '5px' }}/> {profile.dateJoined}
            </div>
            <br/>

            <div>
                <i style={{ marginRight: '10px' }}>{profile.followingCount} Following</i>
                <i>{profile.followersCount} Followers</i>
            </div>
        </div>
    )
}

export default ProfileComponent;