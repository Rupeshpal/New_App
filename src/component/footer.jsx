import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Footer extends Component {
    render() {
        return (
            <>
 <div className=" footer" id="hanging-icons">
                <a className="navbar-brand mx-3 pt-3 mt-3" href="#">
                    <img  src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/308180556_607944780978577_6748774497995179453_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4adOMOW-InIAX9SwZoz&_nc_ht=scontent.fktm7-1.fna&oh=00_AfDi3Lc2BrFblVgD7PDWV865GeN2aLNTDXX3EpWu9yVDNA&oe=63E74016" alt="" srcset="" style={{height:150,width:250, borderRadius:20}} />
                </a>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            {/* <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2" /></svg> */}
                        </div>
                        <div>

                            <p style={{ fontWeight: "bold", fontSize: 20 }}>Contact</p>
                            <li>Email:-Support@shivitsolution.com</li>
                            <li>Phone:- +977-9811844091</li>
                            <li>Address:-Link,Road,Ghantaghar-8</li>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            {/* <svg className="bi" width="1em" height="1em"><use xlinkHref="#cpu-fill" /></svg> */}
                        </div>
                        <div>
                            <p style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Legal pages</p>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Cookies</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            {/* <svg className="bi" width="1em" height="1em"><use xlinkHref="#tools" /></svg> */}
                        </div>
                        <div>
                            <p style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Quik Link</p>
                            <ul style={{ textAlign: "left" }}>
                                <li><Link className="dropdown-item" to="/cricket ">Entertainment</Link></li>
                                <li><Link className="dropdown-item" to="/cricket">Technology</Link></li>
                                <li><Link className="dropdown-item" to="/bussiness">Bussiness</Link></li>
                                <li><Link className="nav-link" to="/politice" style={{color:'white'}}>politics</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="copyright">
                        <p>© 2023 Samajsamadhan</p>
                    </div>
            </>
           
        )
    }
}