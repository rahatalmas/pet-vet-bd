
import FilteredHeader from '../../components/headers/filteredheader';
import '../doctor/doctorList.css';
import DoctorCard from '../../components/doctorCard';
const doctorInfoArray = [
  {
    name: "Dr. Uzumaki Naruto",
    image: "../assets/naruto1.jpg",
    status: "online",
    degrees: ["Doctor of Medicine", "Master in Cardiovascular Surgery", "PhD in Chakra Techniques"],
    specialization: "Cardiologist",
    regNumber: "1001",
    consultationFee: "500",
  },
  {
    name: "Dr. Itachi Uchiha",
    image: "../assets/itachi.jpg",
    status: "offline",
    degrees: ["Doctor of Dermatology", "Masters in Skin Care", "PhD in Eye Techniques"],
    specialization: "Dermatologist",
    regNumber: "1002",
    consultationFee: "550",
  },
  {
    name: "Dr. Sakura Haruno",
    image: "../assets/sakura1.jpg",
    status: "online",
    degrees: ["Doctor of Veterinary Medicine", "Masters in Surgery", "PhD in Medical Jutsu"],
    specialization: "Neurologist",
    regNumber: "1003",
    consultationFee: "600",
  },
  {
    name: "Dr. Goku",
    image: "../assets/goku.jpg",
    status: "offline",
    degrees: ["Doctor of Pediatrics", "Masters in Child Care", "PhD in Martial Arts Medicine"],
    specialization: "Pediatrician",
    regNumber: "1004",
    consultationFee: "450",
  },
  {
    name: "Dr. Uchiha Madara",
    image: "../assets/madara.jpg",
    status: "online",
    degrees: ["Doctor of Orthopedics", "Masters in Bone Care", "PhD in Tactical Medicine"],
    specialization: "Orthopedic",
    regNumber: "1005",
    consultationFee: "700",
  },
  {
    name: "Dr. Uchiha Sarada",
    image: "../assets/naruto1.jpg",
    status: "online",
    degrees: ["Doctor of Oncology", "Masters in Cancer Research", "PhD in Advanced Healing Techniques"],
    specialization: "Oncologist",
    regNumber: "1006",
    consultationFee: "650",
  }
];

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
                {
                  doctorInfoArray.map(doctorInfo=>(
                    <DoctorCard doctor={doctorInfo}/>
                  ))
                }
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