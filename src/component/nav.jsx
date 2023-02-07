import React, { Component } from "react";
import {Link } from "react-router-dom";
export class Nav extends Component{
   render(){
    return(
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
          <img src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/308180556_607944780978577_6748774497995179453_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4adOMOW-InIAX9SwZoz&_nc_ht=scontent.fktm7-1.fna&oh=00_AfDi3Lc2BrFblVgD7PDWV865GeN2aLNTDXX3EpWu9yVDNA&oe=63E74016" style={{borderRadius:12}} alt="" srcset="" width={50} height={50} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{color:'white'}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology" style={{color:'white'}}>Technology</Link>
              </li>
              <li className="nav-item dropdown">
                <Link  style={{color:'white'}} className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sports
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/cricket">Cricket</Link></li>
                  <li><Link className="dropdown-item" to="/football">Footbal</Link></li>
                  
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bussiness" style={{color:'white'}}>Bussiness</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
   }
}