import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faChevronRight, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Background from '../bg1.jpg'

class Profile extends Component {
   render(){
      return(
         <React.Fragment>
            <div className="container-fluid h-80 p-0 w-100 overflow-hidden">
               <nav className="navbar navbar-expand-sm bg-black-4 navbar-light position-absolute w-100 py-3">
                  <div className="container-fluid justify-content-center">
                     <div className="row py-0">
                        <ul className="navbar-nav">
                           <li className="nav-item">
                              <Link to="/" className="links text-white link-opacity-6">Home</Link>
                           </li>
                           <li className="nav-item"></li>
                        </ul>
                     </div>
                  </div>
               </nav>
               <div className="row h-100">
                  <div className="col-12-lg h-100 p-0">
                     <div className="d-flex align-items-end h-60" id="profile-head">
                        <div className="row mb-min-5 w-100">
                           <div className="col-4 justify-content-end">
                              <img src={Background} className="img-thumbnail float-end border-0 p-0" id="ppProfile" alt=""/>
                           </div>
                           <div className="col-8 text-start p-4">
                              <div className="row">
                                 <div className="col-4">
                                    <h3 className="text-white">
                                       A. Khaidir Muktamar
                                    </h3>
                                    <p className="text-secondary">
                                       Musyrif
                                    </p>
                                 </div>
                                 <div className="col-8">
                                    <button className="btn btn-lgreen p-3">Sunting Profil</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Profile;