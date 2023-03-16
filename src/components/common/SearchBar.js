import { useNavigate } from "react-router-dom";

export default function SearchBar({ searchInput, setSearchInput, setSearchTitle }) {

    const navigate = useNavigate();

    function searchChange(event) {
        const searchText = event.target.value;
        setSearchInput(searchText);
        // console.log(searchInput);
    }

    function handleSearch(event) {
        event.preventDefault();
        let inputField = document.getElementById('searchtext');
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

    // WORK-IN-PROGRESS
    // Attempting to get value from dropdown menu below, for MAX RESULTS
    
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
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    id="searchtext"
                    placeholder="Search"
                    onChange={searchChange}
                />
                <button type="submit">Search</button>

                <label htmlFor="max-results">Max Results:</label>
                <select name="results" id="maxresults">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>

                </select>
            </form>


        </div>
    )
}