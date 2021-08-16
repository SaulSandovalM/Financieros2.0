import React, { useState, useEffect } from 'react'
// services
import EmployeeService from '../../services/User'

export default function BoardEmployee (props) {
  const [content, setContent] = useState('')

  useEffect(() => {
    EmployeeService.getEmployeeBoard().then(
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
