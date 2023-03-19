
import { useNavigate } from "react-router-dom";
import './SearchBar.css'

export default function SearchBar({ searchInput, setSearchInput, setSearchTitle, setMaxResults }) {

    const navigate = useNavigate();

    function searchChange(event) {
        const searchText = event.target.value;
        setSearchInput(searchText);
        // console.log(searchInput);
    }

    function handleSearch(event) {
        event.preventDefault();
        let inputField = document.getElementById('searchText');
        inputField.value = "";
        setSearchTitle(searchInput);
        setSearchInput("");
        console.log(searchInput);
        if (!searchInput) {
            navigate('*');
        } else {
            navigate("/videos");
        }
    }

    function handleMaxResults(event) {
        console.log(event.target.value);
        setMaxResults(event.target.value);
    }
    // WORK-IN-PROGRESS
    // Attempting to get value from dropdown menu below, for MAX RESULTS
    // Pivoted and instead applied onChange function to the dropdown

    // window.onload = function () {

    //     let dropDownValue = document.getElementById('maxresults');
    //     dropDownValue.onChange = (event) => {
    //         let selectedIndex = dropDownValue.selectedIndex;
    //         let selectedOption = dropDownValue.options[selectedIndex];
    //         console.log(selectedIndex, selectedOption.value);
    //     }
    // }

    return (
        <div className="searchBar">
            <div className="searchBox">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        id="searchText"
                        placeholder="Search"
                        onChange={searchChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

            <div className="resultsChoice">
                <label htmlFor="max-results">Max Results:</label>
                <select name="results" id="maxresults" onChange={handleMaxResults}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>

            </div>

        </div>
    )
}
