import React, { useState, useEffect } from 'react'
// services
import UserService from '../../services/User'

export default function BoardUser (props) {
  const [content, setContent] = useState('')

  useEffect(() => {
    UserService.getUserBoard().then(
      response => {
        setContent(response.data)
      }, error => {
        setContent(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      }
    )
  }, [])

  return (
    <div>
      {content}
    </div>
  )
}
