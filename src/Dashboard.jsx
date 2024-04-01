import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const [BioData, setBioData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const gtData = await axios.get("https://localhost:44307/api/DapperMethods/get-data");
            setBioData(gtData.data);
          } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error if needed
          }
        };
    
        fetchData();
      }, []);

    console.log(BioData)

  return (
    <div >
        <header className="bg-dark text-white text-center p-2">
          <h2>Chatter</h2>
        </header>

        <nav style={{marginLeft:'10px'}} className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/home">
                Dashboard
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/redux-demo">
                            Redux
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/crud-sample">
                            Crud Module
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/data-grid">
                           Grid
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/html-elements">
                           Controls
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/redux-store">
                           Redux Store
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

          <div className="container mt-4">
              <div className="row">
                  
              </div>
          </div>

          <footer className="bg-dark text-white text-center p-2 mt-4 fixed-bottom">
              <p style={{color:'white'}}>&copy; 2024 Chatter. All rights reserved.</p>
          </footer>
    </div>
  )
}

export default Dashboard