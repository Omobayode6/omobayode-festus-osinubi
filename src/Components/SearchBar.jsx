import React, {useState} from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

function SearchBar({ placeholder, data }){
  const [filteredData, setFilteredData ] = useState([]);
  const [inputText, setInputText ] = useState("");

  const handleFilter = (event) =>{
    const searchWord = event.target.value;
    setInputText(searchWord)
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    // set the filteredword to empty after cleaning the search bar
    if(searchWord ===""){
      setFilteredData([])
    }else
    setFilteredData(newFilter)
  }
  
  const handleClear = () => {
    setFilteredData([]);
    setInputText("")
  }

  return (
    <div className='search'>
      <div className='searchInputs '>
        <input type="text" placeholder={placeholder} value= {inputText} onChange={handleFilter}/>
        <div className='searchIcon'>
          {inputText.length === 0 ? <SearchIcon /> : 
            <ClearIcon id="clearBtn" onClick={handleClear}/>
          }
        </div>
      </div>
      {filteredData.length !==0 && (
        <div className='dataResult'>
        {filteredData.slice(0, 10).map((value, key) =>{
          return (
            <a className='dataItem' href={value.link} target="_blank" rel="noopener noreferrer">
              <p>{value.title}</p></a>
          );
        })}
      </div>
      )}
      
    </div>
  )
}

export default SearchBar