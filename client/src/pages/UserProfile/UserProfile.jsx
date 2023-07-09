import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UsersProfile.css'
import { followUser, unfollowUser } from "../../actions/users";
 
const UserProfile = () => {

    const { id } = useParams()    
    const users = useSelector(( state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    const dispatch = useDispatch();
    const [Switch, setSwitch] = useState(false)

    const followingUser = async (userid) => {
        dispatch(followUser(userid));
      };
    
      const unfollowingUser = async (userid) => {
        dispatch(unfollowUser(userid));
      };

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-2">
        <section>
            <div className="user-details-container">
                <div className="user-details">
                    <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">
                        {currentProfile?.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <div className="user-name">
                        <h1>{currentProfile?.name}</h1>
                        <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                        {currentUser?.result._id !== id &&
                            (currentProfile?.followers?.includes(
                                currentUser?.result._id
                        ) ? (
                            <button className="follow-button" onClick={() => unfollowingUser(id)}>Unfollow</button>
                        ) : (
                            <button className="follow-button" onClick={() => followingUser(id)}>Follow</button>
                        ))}
                    </div>
                </div>
                {
                    currentUser?.result._id === id && (
                        <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                            <FontAwesomeIcon icon={faPen} /> Edit Profile
                        </button>
                    )
                }
            </div>
            <>
                {
                    Switch ? (
                        <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} /> 
                    ) : (
                        <ProfileBio currentProfile={currentProfile}/>
                    )
                }
            </>
        </section>
      </div>
    </div>
  )
}

export default UserProfile