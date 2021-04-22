import "./App.css";
import { Button, Dropdown } from "semantic-ui-react";
import { useEffect, useState } from "react";
import logo from "./netflix.png";

function App() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  useEffect(() => {
    getAllGenres();
  }, []);

  const getAllGenres = () => {
    fetch(
      "https://raw.githubusercontent.com/f/netflix-genres/main/genres.tr.json"
    )
      .then((response) => response.json())
      .then((data) => setOptions(data));
  };

  const onChange = (e, data) => {
    setSelectedOption(data.value);
  };

  return (
    <div className="container">
      <div className="item-container">
        <img className="logo-img" alt="logo-netflix" src={logo} />
      </div>

      <div className="item-container">
        <h2 className="header-text">Genre Search</h2>
      </div>
      <br />
      <div className="item-container">
        <div className="dropdown-wrapper">
          <Dropdown
            placeholder="Select or search Genre..."
            search
            fluid
            selection
            options={options.map((option) => ({
              key: option.url,
              value: option.url,
              text: option.name,
            }))}
            onChange={onChange}
          />
        </div>
      </div>
      <br />
      <div className="item-container">
        <Button onClick={() => window.open(String(selectedOption))}>
          Search on Netflix
        </Button>
      </div>
    </div>
  );
}

export default App;
