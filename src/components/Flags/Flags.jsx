import './flags.css'

export default function Flags({ countries, Theme }) {


    return (
        <div data-theme={Theme}>
            <div className="flags-and-countries">
                {
                    countries && countries.length ? countries.map((country) => (
                        <div className="display_countries" key={country}>
                            <img width={264} height={160} src={country.flags.png} alt={country.name.common} />
                            <h3 className="display_name">{country.name.common}</h3>
                            <p className="population">: {country.population}</p>
                            <p className="region">: {country.region}</p>
                            <p className="capital">{country.capital}</p>
                        </div>
                    )) : <h1 style={{}}>Loading...</h1>
                }
            </div>
        </div>
    )
}