import React from 'react'
import { Link } from 'react-router-dom'
import './DashboardPage.css'

const DashboardPage = () => {
  return (
    <div>
      <h1>DashboardPage</h1>
      <Link to="/posts" className="btn">
        Goto Posts
      </Link>
    </div>
  )
}

export default DashboardPage