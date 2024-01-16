import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

function Profile() {
  const { user } = useSelector((state) => state.users);
  return (
    <div className="card p-2">
      <h1 className="text-lg primary-text"></h1>
      <hr />
        <div className="d-flex justify-content-between">
            <div>
          <p className="text-sm">Name</p>
          <hr/>
          <p className="text-sm">{user.name}</p>
            </div>
            <div>
          <p className="text-sm">Email</p>
          <hr/>
          <p className="text-sm">{user.email}</p>
            </div>
            <div>
          <p className="text-sm">Created At</p>
          <hr/>
          <p className="text-sm">{moment(user.createdAt).format("DD-MM-YYYY")}
          </p>
            </div>
      </div>
    </div>
  )
}

export default Profile
