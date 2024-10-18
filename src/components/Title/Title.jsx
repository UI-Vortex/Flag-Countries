import './title.css'
import dark from '../../assets/Dark mode.svg'
import Navbar from '../Navbar/Navbar'
import light from '../../assets/light.png'

export default function Title({ handleSearch, searchTerm, region, handleRegionChange, handleTheme, Theme }) {
    return (
        <div>
            <header className="header">
                <div className="header-main" data-theme={Theme}>
                    <div className="halo">
                        <h1 className="header-title">Where in the world?</h1>
                    </div>
                    <div className="header-image" onClick={handleTheme}>
                        <img src={dark} alt="Error" />
                        <h3 className="header-dark-mode"> Dark Mode</h3>
                    </div>
                </div>
                <Navbar handleSearch={handleSearch} searchTerm={searchTerm} region={region}
                    handleRegionChange={handleRegionChange} Theme={Theme} />
            </header>
        </div>
    )
}