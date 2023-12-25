import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/search-books?query=${searchTerm}`
      );
      setSearchResults(response.data.items); // Assuming 'items' contains the search results
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <>
      <div>
        <h1>Book Search</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a book"
        />
        <button onClick={handleSearch}>Search</button>

        {/* Display search results here */}
        <div>
          {searchResults.map((book, index) => (
            <div key={index}>
              <h3>{book.volumeInfo.title}</h3>
              {/* Other book details */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
