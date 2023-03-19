import React, { useState } from "react";
import { useSelector } from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faCalendarAlt, faCommentAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {update} from "./profile-reducer";
import {useDispatch} from "react-redux";



function EditProfile() {
    const profile = useSelector(state => state.profile);
    const [name, setName] = useState(`${profile.firstName} ${profile.lastName}`);
    const [bio, setBio] = useState(`${profile.bio}`);
    const [location, setLocation] = useState(`${profile.location}`);
    const [website, setWebsite] = useState(`${profile.website}`);
    const [dateOfBirth, setDateOfBirth] = useState(`${profile.dateOfBirth}`);
    const dispatch = useDispatch();

    let newProfile = {};

    const updateProfile = () =>
    {
        const [firstName, lastName] = name.split(' ');
        newProfile = {...profile,
            firstName : firstName,
            lastName : lastName,
            bio : bio,
            location : location,
            website : website,
            dateOfBirth : dateOfBirth,
        }
        dispatch(update(newProfile));
    }

    return (
        <div>
            <div>
                <Link to="/tuiter/profile">
                    <FontAwesomeIcon icon={faTimes} className="me-5" style={{ marginRight: '5px' }}/>
                </Link>
                <i>Edit Profile</i>
                <Link to="/tuiter/profile">
                    <button className="btn" style={{ border: '1px solid black', position: 'absolute', right: 0} } onClick={() => updateProfile()}>Save</button>
                </Link>
            </div>

            <div style={{ position: 'relative' }}>
                <img src="../images/astro.png" width="500" height="300" style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '0', left: '0' }}>
                    <img src="../images/nasa.png" width="100" height="100" style={{ borderRadius: '50%', padding: '10px', backgroundColor: 'white' }} />
                </div>
            </div>

            <div>
                <label htmlFor="name">Name</label>
                <div>
                    <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
            </div>

            <div>
                <label htmlFor="bio">Bio</label>
                <div>
                    <textarea id="bio" name="bio" value={bio} onChange={e => setBio(e.target.value)} style={{ height: '150px', width: '500px' }}/>
                </div>
            </div>

            <div>
                <label htmlFor="location">Bio</label>
                <div>
                    <textarea id="location" name="location" value={location} onChange={e => setLocation(e.target.value)}/>
                </div>
            </div>

            <div>
                <label htmlFor="website">Website</label>
                <div>
                    <textarea id="website" name="website" value={website} onChange={e => setWebsite(e.target.value)}/>
                </div>
            </div>

            <div>
                <label htmlFor="dateOfBirth">Bio</label>
                <div>
                    <textarea id="dateOfBirth" name="dateOfBirth" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/>
                </div>
            </div>

        </div>
    )
}

export default EditProfile;