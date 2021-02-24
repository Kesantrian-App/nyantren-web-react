import React, { Component } from "react";
import logo from "./../Nyantren.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faChevronRight, faInfo, faPenSquare, faVrCardboard } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Wavy from "./../Wavy_Bus-30_Single-transparent-bg.png"
import Setoran from "./../undrawSetoran1.svg"
import DaftarSantri from "./../undrawDaftarSantri2.svg"
import Gadget from "./../undrawGadget2.svg"
import Welcome from "./../undrawWelcome.svg"
import LaporanHafalan from "./../undrawLaporanHafalan.svg"
import FpUpload from './../freepik_Upload.jpg'
import FpUpload2 from './../fp_Upload_2.jpg'
import FpUpload3 from './../fp_Upload_3.png'
import $ from 'jquery'

class Home extends Component {
   render(){
      $('#st').scroll(function() {
         if ($(this).scrollTop() < 150) {
            $('#st').addClass('.bg-dark')
         }
      });
      const Scroll1 = () => {
         $(document).scrollTop(480)
      }
      const CollapseSetoran1 = () => {
         $('#collapseSetoran1').slideToggle(300)
         if (!$('#collapseSetoran2').css('display', 'none')) {
            $('#collapseSetoran2').slideUp(300)
         }
      }
      const CollapseSetoran2 = () => {
         $('#collapseSetoran2').slideToggle(300)
         if (!$('#collapseSetoran1').css('display', 'none')) {
            $('#collapseSetoran1').slideUp(300)
         }
      }
      return(
         <React.Fragment>
            <div className="container-fluid pb-5 px-0 w-100 overflow-x-hidden">
               <div className="row pb-4 justify-content-center px-self-10 pt-self-7 bg-lgreen-3">
                  <div className="row justify-content-between">
                     <div className="cols-6 text-start text-light p-4 align-items-center d-flex default">
                        <div className="row h-100 align-items-center d-flex">
                           <h1><span className="">Selamat Datang, Khaidir!</span>
                              <h6 className="py-3" onClick={Scroll1}>Ada 3 Santri yang belum menyetorkan hafalan baru hari ini!</h6>
                           </h1>
                        </div>
                     </div>
                     <div className="cols-5 p-3 align-items-center d-flex justify-content-end">
                        <img src={Welcome} className="img-thumbnail border-0 p-0 bg-transparent" alt=""/>
                     </div>
                  </div>
               </div>
               <div className="row text-center py-self-100 mb-2 m-0 px-self-10">
                  <div className="col-7 justify-content-center align-items-start d-flex">
                     <img src={FpUpload3} className="img-thumbnail border-0 position-sticky p-0 bg-transparent" alt="upload2"/>
                  </div>
                  <div className="col-5 text-start m-0">
                     <h1 className="text-lgrey mb-5">Ada Apa Hari Ini?</h1>
                     <div className="row justify-content-between rowProfile-px overflow-y-auto" id="st">
                        <div className="col-12-lg overflow-y-auto mh-100">
                           <div className="pointer" onClick={CollapseSetoran1}>
                              <h5 className="text-lgrey">Setoran Hari Ini</h5>
                              <p className="text-lgrey">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                           </div>
                           <div className="row pb-3">
                              <div className="col-6" id="collapseSetoran1" style={{display: "none"}}>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2 mb-2">
                                    <p className="m-0">
                                       Rifky Hidayatullah
                                       <small className="text-primary mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Al-Ahqaf : 1 - 35</small>
                                 </div>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2 mb-2">
                                    <p className="m-0">
                                       Arrizal Bintang
                                       <small className="text-primary mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Al-Ahqaf : 1 - 5</small>
                                 </div>
                                 <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                    <p className="m-0">
                                       Naufal Farros
                                       <small className="text-primary mx-1" >
                                          <FontAwesomeIcon icon={faInfoCircle} />
                                       </small>
                                    </p>
                                    <small className="text-muted">Al-Ahqaf : 25 - 39</small>
                                 </div>
                                 <div className="mt-self-4">
                                    <Link to="/history" className="links">Selengkapnya...</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-12-lg text-start">
                           <div className="pointer" onClick={CollapseSetoran2}>
                              <h5 className="text-lgrey">Hutang Setoran</h5>
                              <p className="text-lgrey">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                           </div>
                           <div className="col-6" id="collapseSetoran2" style={{display: "none"}}>
                              <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                 <p className="">
                                    Rifky Hidayatullah
                                    <small className="text-primary mx-1" >
                                       <FontAwesomeIcon icon={faInfoCircle} />
                                    </small>
                                 </p>
                                 <small className="text-muted">Al-Ahqaf : 1 - 35</small>
                              </div>
                              <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                 <p className="">
                                    Arrizal Bintang
                                    <small className="text-primary mx-1" >
                                       <FontAwesomeIcon icon={faInfoCircle} />
                                    </small>
                                 </p>
                                 <small className="text-muted">Al-Ahqaf : 1 - 5</small>
                              </div>
                              <div className="card border-0 list-setoran to-right-4 rounded-0 py-self-2">
                                 <p className="">
                                    Naufal Farros
                                    <small className="text-primary mx-1" >
                                       <FontAwesomeIcon icon={faInfoCircle} />
                                    </small>
                                 </p>
                                 <small className="text-muted">Al-Ahqaf : 25 - 39</small>
                              </div>
                              <div className="mt-self-4">
                                 <Link to="/history" className="links">Selengkapnya...</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row rowProfile-px my-3 py-self-140 px-self-10 bg-lgreen-2 mx-0">
                  
               </div>
               <div className="row rowProfile-px my-3 py-self-140 px-self-10 bg-lgreen-2 mx-0" id="fitur">
                  <div className="col-12 p-0 bg-light">
                     <div className="card border-0">
                        <div className="card-body bg-lgreen-2 text-light">
                           <div className="text-center pb-self-5 pt-self-2">
                              <h2 className="py-2 text-center">Akses Mudah</h2>
                              <p className="">
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at unde debitis adipisci dolorem, a possimus nisi eos porro natus soluta qui corrupti odit. Fugiat dolorum magnam provident culpa quos.
                              </p>
                           </div>
                           <div className="row">
                              <div className="col">
                                 <div className="card border-0 p-2 mmh-100">
                                    <div className="card-body">
                                       <div className="card mt-min-35 p-2 bg-transparent border-0 h-50 mh-50 d-flex justify-content-center">
                                          <img src={DaftarSantri} alt="DaftarSantri" className="mw-100 mh-100" />
                                       </div>
                                       <div className="card border-0 pt-4">
                                          <h5 className="text-dark">Daftar Santri</h5>
                                          <small className="text-muted text-center pt-2">Mengedit atau Melihat Santri Yang Dikontrol Pada Setiap Halaqoh</small>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col">
                                 <div className="card border-0 p-2 mmh-100">
                                    <div className="card-body">
                                       <div className="card mt-min-35 p-2 bg-transparent border-0 h-50 mh-50 d-flex justify-content-center">
                                          <img src={Gadget} alt="Gadget" className="mw-100 mh-100" />
                                       </div>
                                       <div className="card border-0 pt-4">
                                          <h6 className="text-dark">Izin Menggunakan Gadget</h6>
                                          <small className="text-muted text-center pt-2">Izin Bagi Santri Untuk Menggunakan Gadget Diluar Waktu KBM</small>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col">
                                 <div className="card border-0 p-2 mmh-100">
                                    <div className="card-body">
                                       <div className="card mt-min-50 p-2 bg-transparent border-0 h-50 mh-50 d-flex justify-content-center">
                                          <img src={LaporanHafalan} alt="LaporanHafalan" className="mw-100 mh-100" />
                                       </div>
                                       <div className="card border-0 pt-4">
                                          <h6 className="text-dark">Laporan Hafalan Bulanan</h6>
                                          <small className="text-muted text-center pt-2">Daftar Laporan Hafalan Setiap Santri Untuk Setiap Bulan</small>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col">
                                 <div className="card border-0 p-2 mmh-100">
                                    <div className="card-body">
                                       <div className="card mt-min-35 p-2 bg-transparent border-0 h-50 mh-50 d-flex justify-content-center">
                                          <img src={DaftarSantri} alt="DaftarSantri" className="mw-100 mh-100" />
                                       </div>
                                       <div className="card border-0 pt-4">
                                          <h6 className="text-dark">Santri Bermasalah</h6>
                                          <small className="text-muted text-center pt-2">Daftar Laporan Hafalan Setiap Santri Untuk Setiap Bulan</small>
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
            <div className="container-fluid bg-lgreen-gradient-start w-100">
               <div className="row justify-content-center">
                  <div className="col-12-lg py-2">
                     <nav className="navbar navbar-expand-sm justify-content-center">
                        <ul className="navbar-nav justify-content-center row">
                           <li className="col-6 justify-content-end nav-item px-3 pointer text-white">
                              <a href="https://github.com/Kesantrian-App" className="links text-white">
                                 <div className="row p-0 mx-1">
                                    <div className="col-10 p-0 text-end">
                                       <small>Nyantren App</small>
                                    </div>
                                    <div className="col-2 links">
                                       <FontAwesomeIcon icon={faGithub} className="text-15" />
                                    </div>
                                 </div>
                              </a>
                           </li>
                           <li className="col-6 border-start border-white nav-item px-3 pointer text-white">
                              <div className="row">
                                 <div className="col-1 links me-2">
                                    <FontAwesomeIcon icon={faEnvelopeOpen} className="text-15" />
                                 </div>
                                 <div className="col-10">
                                    <small>khaidirmuktamar234@gmail.com</small>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-8 py-2 text-center border-top">
                     <small className="text-white">Copyright &copy; Nyantren 2021</small>
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Home;