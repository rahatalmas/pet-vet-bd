import { NavLink } from 'react-router';
import '../headers/linkedHeader.css';

const LinkedHeader = ({name,linkName,icon1,icon2})=>{
    return(
        <>
            <div className='menu-wrapper'>
                <h1 className='menu-name'>
                    <i className={icon1}></i>
                    {name}
                </h1>
                <NavLink to="list">
                <h1 className='menu-btn'>
                    {linkName}
                   <i className={icon2}></i>
                </h1>
                </NavLink>

            </div>
        </>
    );
}

export default LinkedHeader;