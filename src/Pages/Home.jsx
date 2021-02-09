import React, { Component } from "react";
import logo from "./../Nyantren.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faChevronRight, faInfo, faPenSquare, faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Wavy from "./../Wavy_Bus-30_Single-transparent-bg.png"
import Setoran from "./../undrawSetoran1.svg"
import Gadget from "./../undrawGadget.svg"

class Home extends Component {
   render(){
      return(
         <React.Fragment>
            <div className="container-fluid pb-5">
               <nav aria-label="breadcrumb" className="bc">
                  <ol className="breadcrumb">
                     <li className="mx-1 breadcrumb-item" aria-current="page">Home</li>
                     <li className="mx-1">
                        <FontAwesomeIcon icon={faChevronRight} />
                     </li>
                     <li className="mx-1 breadcrumb-item" aria-current="page">
                        <Link to="/" className="links">Home</Link>
                     </li>
                     <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                  </ol>
               </nav>
               <div className="row text-center rowProfile-px py-4 mb-2">
                  <div className="col-9 m-0 h-80">
                     <div className="row rowProfile-px pb-4">
                        <div className="card p-4 bg-lgreen-gradient-start border-0 rounded shadow">
                           <div className="card-body p-0">
                              <div className="row">
                                 <div className="cols-8 text-start text-light p-4 align-items-center d-flex">
                                    <div className="row h-100">
                                       <h4>Selamat Datang, Khaidir!</h4>
                                       <p className="py-0">Ada 3 Santri yang belum menyetorkan hafalan baru hari ini!</p>
                                    </div>
                                 </div>
                                 <div className="cols-4 p-3 align-items-center d-flex">
                                    <img id="egretIcon" src="http://egret-react.ui-lib.com/assets/images/illustrations/designer.svg" alt=""/>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row justify-content-between rowProfile-px my-3" id="st">
                        <div className="col-8 p-0 justify-content-start">
                           <div className="card border-end border-0 p-0 shadow-sm p-3">
                              <div className="card-header bg-white border-0 text-start">
                                 <h5 className="">Setoran Terakhir</h5>
                              </div>
                              <div className="card-body text-start px-4">
                                 <div className="card p-0 border-start border-info border-4 rounded-0">
                                    <div className="card border-0 list-fitur rounded-0 py-self-2">
                                       <p className="">
                                          Rifky Hidayatullah
                                          <small className="text-primary mx-1" >
                                             <FontAwesomeIcon icon={faInfoCircle} />
                                          </small>
                                       </p>
                                       <small className="text-muted">Al-Ahqaf : 1 - 35</small>
                                    </div>
                                    <div className="card border-0 list-fitur rounded-0 py-self-2">
                                       <p className="">
                                          Arrizal Bintang
                                          <small className="text-primary mx-1" >
                                             <FontAwesomeIcon icon={faInfoCircle} />
                                          </small>
                                       </p>
                                       <small className="text-muted">Al-Ahqaf : 1 - 5</small>
                                    </div>
                                    <div className="card border-0 list-fitur rounded-0 py-self-2">
                                       <p className="">
                                          Naufal Farros
                                          <small className="text-primary mx-1" >
                                             <FontAwesomeIcon icon={faInfoCircle} />
                                          </small>
                                       </p>
                                       <small className="text-muted">Al-Ahqaf : 25 - 39</small>
                                    </div>
                                 </div>
                                 <div className="mt-self-4">
                                    <Link to="/history" className="links">Selengkapnya...</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-4 px-2">
                           <div className="card border-0 shadow-sm p-2 h-100">
                              
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-3">
                     <div className="card">
                        <div className="card-body p-3">
                           <div className="card bg-light justify-content-center p-5" style={{verticalAlign: "middle"}}>
                              <h6 className="text-secondary my-3">
                                 Anda Login Sebagai :
                              </h6>
                              <h5 className="text-success">
                                 Musyrif
                              </h5>
                              <button className="btn btn-lgreen d-flex align-self-center justify-content-center mt-3">
                                 <Link to="/profile" className="links text-btn-white">
                                    Lihat Profil
                                 </Link>
                              </button>
                           </div>
                           <div className="text-start my-3">
                              <div className="card bg-transparent border-0 p-0">
                                 <a href="#st" className="links link-secondary list-fitur pe-2">
                                    <div className="row">
                                       <div className="col-3 d-flex align-items-center justify-content-center">
                                          <FontAwesomeIcon icon={faVrCardboard} />
                                       </div>
                                       <div className="col-9">
                                          <h6 className="text-dark">Setoran Terakhir</h6>
                                          <small className="text-muted">Mengontrol Hafalan dan Kehidupan Santri</small>
                                       </div>
                                    </div>
                                 </a>
                                 <a href="#fitur" className="links link-secondary list-fitur pe-2">
                                    <div className="row">
                                       <div className="col-3 d-flex align-items-center justify-content-center">
                                          <FontAwesomeIcon icon={faVrCardboard} />
                                       </div>
                                       <div className="col-9">
                                          <h6 className="text-dark">Fitur</h6>
                                          <small className="text-muted">Mengontrol Hafalan dan Kehidupan Santri</small>
                                       </div>
                                    </div>
                                 </a>
                                 <a href="#fitur" className="links link-secondary list-fitur pe-2">
                                    <div className="row">
                                       <div className="col-3 d-flex align-items-center justify-content-center">
                                          <FontAwesomeIcon icon={faVrCardboard} />
                                       </div>
                                       <div className="col-9">
                                          <h6 className="text-dark">Fitur</h6>
                                          <small className="text-muted">Mengontrol Hafalan dan Kehidupan Santri</small>
                                       </div>
                                    </div>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row rowProfile-px my-3 bg-light" id="fitur">
                  <div className="col-12 p-0 justify-content-end bg-light">
                     <div className="card border-0">
                        <div className="card-body bg-light">
                           <div className="text-center py-5">
                              <h3 className="py-2 text-center text-dark">Fitur Kontrol</h3>
                              <p className="text-muted">
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at unde debitis adipisci dolorem, a possimus nisi eos porro natus soluta qui corrupti odit. Fugiat dolorum magnam provident culpa quos.
                              </p>
                           </div>
                           <div className="row">
                              <div className="col">
                                 <div className="card border-0 p-2">
                                    <div className="card-body">
                                       <img src={Setoran} alt="Setoran" className="w-50" />
                                       <div className="container pt-5">
                                          <h5 className="text-dark">Pinjam Handphone &</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col">
                                 <div className="card border-0 p-2">
                                    <div className="card-body">
                                       <img src={Setoran} alt="Setoran" className="w-50" />
                                       <div className="container pt-5">
                                          <h5 className="text-dark">Pinjam Handphone &</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col">
                                 <div className="card border-0 p-2">
                                    <div className="card-body">
                                       <img src={Setoran} alt="Setoran" className="w-50" />
                                       <div className="container pt-5">
                                          <h5 className="text-dark">Pinjam Handphone &</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col">
                                 <div className="card border-0 p-2">
                                    <div className="card-body">
                                       <img src={Setoran} alt="Setoran" className="w-50" />
                                       <div className="container pt-5">
                                          <h5 className="text-dark">Pinjam Handphone &</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col">
                                 <div className="card border-0 p-2">
                                    <div className="card-body">
                                       <img src={Setoran} alt="Setoran" className="w-50" />
                                       <div className="container pt-5">
                                          <h5 className="text-dark">Pinjam Handphone &</h5>
                                       </div>
                                    </div>
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

export default Home;