import React, { useState, useEffect } from 'react'
// services
import UserService from '../../services/User'

export default function Home (props) {
  const [content, setContent] = useState('')

  useEffect(() => {
    UserService.getPublicContent().then(
      response => {
        setContent(response.data)
      }, error => {
        setContent(error.response && error.response.data) || error.message || error.toString()
      }
    )
  }, [])

  return (
    <div>
      {content}
    </div>
  )
}
