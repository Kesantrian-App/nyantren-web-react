import React from "react";
import { Link } from "react-router-dom";
import Background from '../bg1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCross, faTimes } from '@fortawesome/free-solid-svg-icons'
import NyantrenLogo from './../nyantrenLogo.svg'
import $ from 'jquery'
// import Style from './../js/style'

const Navbar = ({children}) => {
   $(window).scroll(function() {
       if ($(document).scrollTop() > 940 || $(document).scrollTop() < 300) {
           $('#main-navbar').addClass('bg-lgreen-3');
           $('#main-navbar').removeClass('bg-white');
           $('.nyantrenBrand-2').addClass('text-light');
           $('.nyantrenBrand-2').removeClass('text-lgreen');
           $('.icon').addClass('text-light');
           $('.icon').removeClass('text-lgreen-2');
           console.log("OK");
         // } else if ($(document).scrollTop() > 50) {
         //    $('#main-navbar').addClass('.bg-lgreen-3');
         //    $('#main-navbar').removeClass('bg-white');
         //    $('.nyantrenBrand-2').addClass('text-light');
         //    $('.nyantrenBrand-2').removeClass('text-lgreen');
         } else {
            $('#main-navbar').removeClass('bg-lgreen-3');
            $('#main-navbar').addClass('bg-white');
            $('.nyantrenBrand-2').removeClass('text-light');
            $('.nyantrenBrand-2').addClass('text-lgreen');
            $('.icon').removeClass('text-light');
            $('.icon').addClass('text-lgreen-2');
         }
         if ($(document).scrollTop() > 20) {
            $('#main-navbar').addClass('shadow-sm');
         } else {
            $('#main-navbar').removeClass('shadow-sm');
         }
      });
   const OpenNav = () => {
      var nav = document.getElementById("mySideNav")
      var navbar = document.getElementById("navbar")
      nav.style.height = "100%"
      // nav.style.display = "block"
      if (x.matches) {
         nav.style.width = "100%"
      } else {
         nav.style.width = "16.6666666%";
      }
      nav.style.transition = "0.4s"
      navbar.className = "h-100 p-0"
      // navbar.style.marginLeft = "16.6666666%"
      navbar.style.transition = "0.4s"
      navbar.style.width = "83.3333333333333%"
      document.getElementById("fstbtn").style.display = "none"
      document.getElementById("scbtn").style.display = "block"
   }
   const CloseNav = () => {
      var nav = document.getElementById("mySideNav")
      var navbar = document.getElementById("navbar")
      if (x.matches) {
         nav.style.height = "0"
         nav.style.width = "100%"
      } else {
         nav.style.width = "0"
      }
      nav.style.transition = "0.4s"
      navbar.className = "h-100 p-0"
      navbar.style.width = "100%"
      // nav.style.display = "none";
      document.getElementById("fstbtn").style.display = "block"
      document.getElementById("scbtn").style.display = "none"
      
   }
   var x = window.matchMedia("(max-width: 720px)")

   // const CollapseBtn = () => {
   //    if (x.matches) {
   //       var pp = document.getElementById = "pp"
   //       pp.onclick = function() {OpenNav()}
   //    } else {
   //       return(
   //       )
   //    }
   // }

   const [auth, setAuth] = React.useState(false);
   React.useMemo(() => {
     if (localStorage.getItem("token")) {
       setAuth(true);
     }
   }, []);
   const ProfileOnHover = () => {
      $(this).addClass('.bg-lgreen-gradient-start');
      // $(this).fadeIn(500, function () {
      //    $(this).addClass('.bg-lgreen-gradient-start');
      // });
   }
   const ProfileOutHover = () => {
      $('#profile').removeClass('.bg-lgreen-gradient-start');
   }
   const ProfileAuthCondition = () => {
      if (auth === true) {
         return(
            <ul className="navbar-nav" style={{fontSize: "12px"}}>
               <li className="nav-item">
                  <Link className="nav-link" to="/login">
                     Login
                  </Link>
               </li>
            </ul>
         )
      } else {
         return(
            <li className="nav-item bg-lgreen-gradient-start rounded-pill" id="profile" onMouseEnter={ProfileOnHover} onMouseLeave={ProfileOutHover}>
               <Link className="nav-link" to="/Profile">
                  <span className="">
                     <img src={Background} className="rounded-circle border-0 p-0" id="pp" alt=""/>
                  </span>
                  <span className="mx-s-1 text-light">
                     A. Khaidir Muktamar
                  </span>
               </Link>
            </li>
         )
      }
   }
   // const CloseNav = () => {
   //    document.getElementById("mySideNav").style.width = "0";
   // }
   return (
      <React.Fragment>
         <div className="container-fluid h-100 w-100">
            <div className="row h-100 p-0 d-flex justify-content-end">
               <div className="col-2 p-0">
                  <div className="sidenav text-start overflow-y-auto" id="mySideNav">
                     {/* <img alt="Nyantren"/> */}
                     <div className="p-4 nav-head">
                        <div className="navbar navbar-expand-sm p-0" style={{display: "inline"}}>
                           <ul className="navbar nav justify-content-start">
                              <li className="nav-item px-self-4 h-100">
                                 <span id="close" className="text-light fw-light" onClick={CloseNav}>
                                    <FontAwesomeIcon icon={faTimes} />
                                 </span>
                              </li>
                              <li className="navbar-brand">
                                 <h5 className="m-0">
                                    Nyantren
                                 </h5>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="nav-body p-0 h-80 w-100 overflow-x-hidden">
                        <div className="row justify-content-center p-4 m-0">
                           <img src={Background} className="rounded-circle border-0 p-0" style={{width: "60px", height: "60px"}} alt=""/>
                           <span className="fw-light text-center mt-3">Khaidir Muktamar</span>
                           {/* <span className="fw-light text-center mt-2" style={{fontSize: "10px", fontWeight: "lighter"}}>Nisn : 0027274810</span> */}
                        </div>
                        <div className="row text-start p-0 mx-0 mt-3 sidelist">
                           <a href="javascript:void(0)" className="listile">Dashboard</a>
                           <a href="javascript:void(0)" className="listile">About</a>
                           <a href="javascript:void(0)" className="listile">Creatifity</a>
                           <a href="javascript:void(0)" className="listile">Account</a>
                        </div>
                        <div className="row justify-content-center d-flex align-items-end h-40">
                           <small className="text-muted text-center">copyright &copy; 2021, Nyantren</small>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="h-100 p-0 float-right overflow-auto" id="navbar">
                  <nav className="navbar navbar-expand-sm navbar-light bg-lgreen-3 py-self-3 px-self-10 w-100" id="main-navbar" style={{zIndex: "1", position: "fixed"}}>
                     <div className="container-fluid justify-content-between mt-min-13">
                        {/* <button className="border-0 btn-outline-0 mt-2 bg-transparent collapse-button" id="fstbtn" onClick={OpenNav}><span className="navbar-toggler-icon"></span></button>
                        <button className="border-0 btn-outline-0 mt-2 bg-transparent collapse-button" id="scbtn" onClick={CloseNav}><span className="navbar-toggler-icon"></span></button> */}
                        {/* <img src={nyantrenLogo} className="nyantrenBrand border-0" alt=""/> */}
                        <h3 className="nyantrenBrand-2 text-light">
                           Nyantren
                        </h3>
                        <div className="float-end row" id="pic2">
                           <ul className="navbar-nav d-flex align-items-center justify-content-end" style={{fontSize: "12px"}}>
                              <li className="nav-item p-2 mx-1">
                                 <button className="of-0 position-relative" data-bs-toggle="collapse" href="#notification" role="button" aria-expanded="false" aria-controls="notification">
                                    <FontAwesomeIcon icon={faBell} className="text-20 text-light icon" />
                                    <span className="position-absolute top-0 translate-middle badge rounded-circle bg-danger">2</span>
                                 </button>
                              </li>
                              {ProfileAuthCondition()}
                           </ul>
                        </div>
                     </div>
                  </nav>
                  <div className="collapse position-fixed justify-content-end mt-self-5 w-90" style={{zIndex: "2"}} id="notification">
                     <div class="col-3 float-end card border-0 shadow">
                        <div className="card-header border-0 p-3 bg-transparent justify-content-center">
                           <div className="border-bottom">
                              <h6 className="text-start">Notifikasi</h6>
                           </div>
                        </div>
                        <div className="card-body">
                           <small>
                              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                           </small>
                        </div>
                     </div>
                  </div>
                  <div className="py-3 h-100 position-absolute">{children}</div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Navbar;