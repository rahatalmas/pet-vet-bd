import { Link, NavLink } from 'react-router';
import FilteredHeader from '../../components/headers/filteredheader';
import '../doctor/doctorList.css';

const DoctorList = () =>{
    return(
        <>
          <div className="doctor-list-page">
              <FilteredHeader 
                name="Doctors"
                filterName="All"
                filterName2="Sort"
                icon1="fa fa-list"
                icon2="fa fa-sort"
                icon3="fa fa-sort"
              />    
              <div className="doctor-list-cols">
                <div className='d-l-cols d-l-container'>
                    <NavLink className="d-l-c-link">
                      <div className='d-l-card'>
                          <div className='d-l-c-img'>
                            <img  src="../assets/sakuraghibli.jpg"/>
                          </div>
                          <div className='d-l-c-info'>
                              <div className='d-l-c-name-n-status'>
                                  <h2>
                                    Haruno Sakura
                                  </h2>
                                  <h3 style={{color:'green'}}>online</h3>
                              </div>
                              <div className='d-l-c-degrees'>
                                <p><div className='dots'></div>Dr. of Vet Med</p>
                                <p><div className='dots'></div>Masters in Sergury</p>
                                <p><div className='dots'></div>Phd in Punch</p>
                              </div>
                              <p><span className='s-normal'>Specialist:</span> Every Medical Jutsu</p>
                              <p><span className='s-normal'>Vet Reg Number:</span> 1001</p>
                              <p className='s-fee-p'>&#2547; Per Consultation:<span className='s-fees'> 500 BDT</span></p>
                              <div className='d-l-c-btn-row'>
                                <button className='d-l-c-btn'>
                                <i class="fas fa-envelope"></i>
                                  Appoinment
                                </button>
                                <div>
                                <i class="fas fa-arrow-right"></i>
                                </div>
                              </div>
                          </div>
                      </div>
                    </NavLink>
                </div>
                <div className='d-l-cols'>
                  Appoinment Process
                </div>
              </div>

          </div>
        </>
    );
}

export default  DoctorList;