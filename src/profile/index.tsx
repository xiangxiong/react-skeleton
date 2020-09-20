import React from 'react';

const Profile = ({
  data
}) => {
  return data && data.map((item: any, i) => {
    return <div className="container">
      <div className="container-img">
        <img src={item.picture}></img>
      </div>
      <div>
        <div className="name">{item.name}</div>
        <div className="userName">{item.username}</div>
        <div className="email">{item.email}</div>
      </div>
    </div>
  })
}

export default Profile;