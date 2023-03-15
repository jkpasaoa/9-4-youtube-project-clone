import { useNavigate } from "react-router-dom";

export default function SearchBar({ searchInput, setSearchInput, setSearchTitle }) {

    const navigate = useNavigate();

    function searchChange(event) {
        const searchText = event.target.value;
        setSearchInput(searchText);
        console.log(searchInput);
    }

    function handleSearch(event) {
        event.preventDefault();
        let inputField = document.getElementById('searchtext');
        inputField.value = '';
        setSearchTitle(searchInput);
        console.log(searchInput);
        navigate("/videos");
    }

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
            </form>

        </div>
    )
}