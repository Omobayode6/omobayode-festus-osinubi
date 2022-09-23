import './App.css';
import SearchBar from './Components/SearchBar';
import SearchData from "./Data.json"
function App() {
  return (
    <div className="App">
      <h1 className='heading'>Search for States in Nigeria</h1>
      <SearchBar placeholder="Enter a name" data={SearchData}/>
    </div>
  );
}

export default App;
