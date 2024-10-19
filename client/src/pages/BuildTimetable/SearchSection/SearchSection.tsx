/*
import "./SearchSection.style.scss";
import { useState } from 'react'; //new

interface SearchSectionProps {
  onSearch: () => void;
  addCustomName: () => void; // New prop for the reset functionality
  //const [customName, setCustomName] = useState('');
  //const [customNamesList, setCustomNamesList] = useState<string[]>([]);

}

function SearchSection({ onSearch, addCustomName }: SearchSectionProps) {
  return (
    <div className="SearchSection">
      <button onClick={onSearch}>Search</button><br></br>
      <label for="customname">Custom name:</label>
      <input type="text" id="customname" name="customname"></input>
      <button onClick={addCustomName}>Add</button> //{ New Add Custom Name button }
    </div>
  );
}

export default SearchSection;
*/

import "./SearchSection.style.scss";
import { useState } from 'react';

interface SearchSectionProps {
  onSearch: () => void;
}

export function SearchSection({ onSearch }: SearchSectionProps) {
  const [customName, setCustomName] = useState('');
  const [customNamesList, setCustomNamesList] = useState<string[]>([]);

  const addCustomName = () => {
    if (customName) {
      setCustomNamesList((prev) => [...prev, customName]);
      setCustomName(''); // Clear input after adding
    }
  };

  return (
    <div className="SearchSection">
      <button onClick={onSearch}>Search</button><br />
      <label htmlFor="customname">Custom name:</label>
      <input
        type="text"
        id="customname"
        name="customname"
        value={customName}
        onChange={(e) => setCustomName(e.target.value)}
      />
      <button onClick={addCustomName}>Add</button> {/* Add Custom Name button */}
      
      <div className="customNamesDisplay">
        <h3></h3>
        {customNamesList.map((name, index) => (
          <h4 key={index}>{name}</h4> // Display each name as a header
        ))}
      </div>
    </div>
  );
}

export default SearchSection;



/*

// / "admin@email.com"
// "password"
function Login() {
  const [message, setMessage] = useState<string | null>(null);
  const { login } = useAccountContext();
  
  const [profile, setProfile] = useState({
    username: '',
    password: '',
  });

  const attemptLogin = async () => {
    try {
      const message = await login(profile.username, profile.password);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };
*/
