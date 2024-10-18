import { useEffect, useState } from 'react'
import './app.css'
import Flags from './components/Flags/Flags'
import Title from './components/Title/Title'
import axios from 'axios'
import Local from './components/local'

export default function App() {

    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State for search
    const [region, setRegion] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]); // State for filtered countries
    const [Theme, setTheme] = Local('theme', 'dark')

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => {
                setCountries(res.data);
                setFilteredCountries(res.data); // Initialize filtered countries
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // Function to filter countries based on search term
    const handleSearch = (search) => {
        setSearchTerm(search);
        if (search.trim() === '') {
            setFilteredCountries(countries); // Show all countries if search is empty
        } else {
            const filtered = countries.filter(country =>
                country.name.common.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredCountries(filtered);
        }
    };

    // regions you wanna choose
    const handleRegionChange = (e) => {
        const selectedRegion = e.target.value;
        setRegion(selectedRegion);

        if (selectedRegion === 'FilterByRegion' || selectedRegion === '') {
            setFilteredCountries(countries); // Show all countries if no region is selected
        } else {
            const filtered = countries.filter(country =>
                country.region.toLowerCase() === selectedRegion.toLowerCase()
            );
            setFilteredCountries(filtered);
        }
    };


    const handleTheme = () => {
        setTheme(Theme === 'light' ? 'dark' : 'light')
    }


    return (
        <div>
            <Title handleTheme={handleTheme} Theme={Theme} handleSearch={handleSearch} searchTerm={searchTerm} region={region} handleRegionChange={handleRegionChange} />
            <Flags Theme={Theme} countries={filteredCountries} />
        </div>
    )
}