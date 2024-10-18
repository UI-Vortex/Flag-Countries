import './navbar.css'

export default function Navbar({ Theme,handleSearch, searchTerm, region, handleRegionChange }) {
    return (
        <div data-theme={Theme}>
            <nav className="navbar">
                <div className="put-input">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input value={searchTerm} onChange={(e) => handleSearch(e.target.value)}
                        type="text" className='nav-input' placeholder='Search for a country…' />
                </div>
                <select className='nav-select' value={region} onChange={handleRegionChange}>
                    <option className='options' value="FilterByRegion">Filter by Region</option>
                    <hr />
                    <option className='options' value="Africa">Africa</option>
                    <option className='options' value="America">America</option>
                    <option className='options' value="Asia">Asia</option>
                    <option className='options' value="Europe">Europe</option>
                    <option className='options' value="Oceania">Oceania</option>
                </select>
            </nav>
        </div>
    )
}