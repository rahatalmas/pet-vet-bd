import { NavLink } from 'react-router';
import '../headers/filteredHeader.css';

const FilteredHeader = ({name,filterName,filterName2,icon1,icon2,icon3})=>{
    return(
        <>
            <div className='menu-wrapper'>
                <h1 className='menu-name'>
                    <i className={icon1}></i>
                    {name}
                </h1>
                <section className='menu-filter-con'>
                    <h1 className='menu-filter'>
                    <i className={icon2}></i>
                        {filterName}
                    </h1>
                    <h1 className='menu-filter'>
                    <i className={icon2}></i>
                        {filterName2}
                    </h1>
                </section>
            </div>
        </>
    );
}

export default FilteredHeader;