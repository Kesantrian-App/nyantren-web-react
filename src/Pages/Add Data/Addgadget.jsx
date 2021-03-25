import React, { Component } from "react";
import logo from "./../../Nyantren.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import swal from 'sweetalert';
import { Animated } from "react-animated-css";
import $ from 'jquery'
import { faBan, faChevronRight, faInfo, faPenSquare, faVrCardboard, faPlus, faPlusSquare, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
// import Wavy from "./../../Wavy_Bus-30_Single-transparent-bg.png"
// import Setoran from "./../../undrawSetoran1.svg"
// import DaftarSantri from "./../../undrawDaftarSantri2.svg"
// import Gadget from "./../../undrawGadget2.svg"
import LoanGadget from "./../../Undraw/undrawLoan.svg"
// import Welcome from "./../../undrawWelcome.svg"
// import LaporanHafalan from "./../../undrawLaporanHafalan.svg"
// import List from './../../fp_List.jpg'
// import Loan from './../../fp_Loan.jpg'

class Addgadget extends Component {
  render(){
    return(
      <React.Fragment>
          <div className="row h-100 w-80">
            <div className="col-12-lg p-5 h-100 w-100">
              <div className="card h-100 w-100 m-0 justify-content-center">
                {/* <button className="btn position-absolute right-0 top-0" onClick={this.props.Close_Gadget}>
                  <FontAwesomeIcon icon={faBan} />
                </button> */}
                <div className="card-body h-100 p-4">
                  <div className="container-fluid h-100">
                    <div className="row w-100 my-4 text-center">
                      <h2 className="text-light-1 fw-bold">Izin Memegang Laptop</h2>
                      <small></small>
                    </div>
                    <div className="row h-100 w-100 m-0">
                      <div className="col-6 h-70 d-flex align-items-center">
                        <div className="row">
                          <img src={LoanGadget} className="img-thumbnail w-80 border-0" alt="Gadget"/>
                          <small>Ket : klik bagian luar untuk menutup tab</small>
                        </div>
                      </div>
                      <div className="col-6 py-0 h-80">
                        <div className="card text-start h-90">
                          <div className="card-body px-4 overflow-y-auto">
                            <div className="my-3">
                              <label htmlFor="name" className="text-10">Nama Santri</label>
                              <input type="text" className="form-control" name="name" id="name"/>
                              <div className="my-1">
                                <input type="checkbox" name="bermasalah" id="bermasalah"/><label htmlFor="bermasalah" className="mx-2 text-10">Bermasalah</label>
                              </div>
                            </div>
                            <div className="my-3">
                              <label htmlFor="kelas" className="text-10">Kelas</label>
                              <input type="text" className="form-control" name="kelas" id="kelas"/>
                            </div>
                            <div className="my-3">
                              <label htmlFor="waktu" className="text-10">Waktu</label>
                              <div className="input-group">
                                <input type="time" className="form-control" name="waktu" id="waktu"/>
                                <input type="time" className="form-control" name="waktu" id="waktu"/>
                              </div>
                            </div>
                            <div className="my-3">
                              <label htmlFor="kelas" className="text-10">Durasi</label>
                              <input type="text" className="form-control default" readOnly />
                            </div>
                            <div className="my-3">
                              <label htmlFor="desc" className="text-10">Alasan</label>
                              <textarea name="desc" className="form-control" id="desc" cols="30" rows="8"></textarea>
                            </div>
                          </div>
                          <div className="card-footer justify-content-end d-flex p-0 border-0">
                            <button className="btn btn-secondary-2 w-100 rounded-bottom">Tambah</button>
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

export default Addgadget;