import React, { useState } from 'react'
import AuthService from '../../services/Auth'

export default function Profile (props) {
  const [currentUser] = useState(AuthService.getCurrentUser())

  return (
    <div>
      Perfil
      <div>
        {currentUser.username}
      </div>
      <div>
        {currentUser.accessToken.substring(0, 20)} ...{' '}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </div>
      <div>
        id: {currentUser.id}
      </div>
      <div>
        Email: {currentUser.email}
      </div>
      <div>
        Roles:
        {
          currentUser.roles &&
            currentUser.roles.map((role, index) => <p key={index}>{role}</p>)
        }
      </div>
    </div>
  )
}
