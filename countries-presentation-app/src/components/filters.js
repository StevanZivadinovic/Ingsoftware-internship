import './../style/components/_filters.scss';

export const Filters = () => {
  return (
    <div className='mainFilters'>
        <div className="mainContent">
            <div className="searchInput">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="search" name="search" id="searchInput" placeholder='Search for a country...' />
            </div>

            <div className="selectSearch">

                <p>Filter by Region <span><i className="fa-solid fa-chevron-down"></i></span></p>
                <ul className='filterByRegion'>
                    <li>Africa</li>
                    <li>America</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
