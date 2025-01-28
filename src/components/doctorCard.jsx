// import { Link, NavLink } from 'react-router';
// import './doctorCard.css';

// const DoctorCard = ()=>{
//     return(
//         <>
//             <NavLink className="d-l-c-link">
//                 <div className='d-l-card'>
//                     <div className='d-l-c-img'>
//                     <img  src="../assets/sakuraghibli.jpg"/>
//                     </div>
//                     <div className='d-l-c-info'>
//                         <div className='d-l-c-name-n-status'>
//                             <h2>
//                             Haruno Sakura
//                             </h2>
//                             <h3 style={{color:'green'}}>online</h3>
//                         </div>
//                         <div className='d-l-c-degrees'>
//                         <p><div className='dots'></div>Dr. of Vet Med</p>
//                         <p><div className='dots'></div>Masters in Sergury</p>
//                         <p><div className='dots'></div>Phd in Punch</p>
//                         </div>
//                         <p><span className='s-normal'>Specialist:</span> Every Medical Jutsu</p>
//                         <p><span className='s-normal'>Vet Reg Number:</span> 1001</p>
//                         <p className='s-fee-p'>&#2547; Per Consultation:<span className='s-fees'> 500 BDT</span></p>
//                         <div className='d-l-c-btn-row'>
//                         <button className='d-l-c-btn'>
//                         <i class="fas fa-envelope"></i>
//                             Appoinment
//                         </button>
//                         <div>
//                         <i class="fas fa-arrow-right"></i>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             </NavLink>
//         </>
//     );
// }

// export default DoctorCard;


import { NavLink } from 'react-router';
import './doctorCard.css';

const DoctorCard = ({ doctor }) => {
    return (
        <>
            <NavLink className="d-l-c-link">
                <div className='d-l-card'>
                    <div className='d-l-c-img'>
                        <img src={doctor.image || "../assets/sakuraghibli.jpg"} alt={doctor.name} />
                    </div>
                    <div className='d-l-c-info'>
                        <div className='d-l-c-name-n-status'>
                            <h2>{doctor.name}</h2>
                            <h3 style={{ color: doctor.status === 'online' ? 'green' : 'gray' }}>
                                {doctor.status}
                            </h3>
                        </div>
                        <div className='d-l-c-degrees'>
                            {doctor.degrees.map((degree, index) => (
                                <p key={index}><div className='dots'></div>{degree}</p>
                            ))}
                        </div>
                        <p><span className='s-normal'>Specialist:</span> {doctor.specialization}</p>
                        <p><span className='s-normal'>Vet Reg Number:</span> {doctor.regNumber}</p>
                        <p className='s-fee-p'>&#2547; Per Consultation: 
                            <span className='s-fees'> {doctor.consultationFee} BDT</span>
                        </p>
                        <div className='d-l-c-btn-row'>
                            <button className='d-l-c-btn'>
                                <i className="fas fa-envelope"></i> Appointment
                            </button>
                            <div>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    );
}

export default DoctorCard;
