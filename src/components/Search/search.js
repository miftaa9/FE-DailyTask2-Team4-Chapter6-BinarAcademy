import React, { useState } from 'react';

import './search.css'

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Logika pencarian
    console.log('Pencarian:', searchText);
    // Implementasikan logika pencarian yang sesuai dengan kebutuhan Anda
  };

  return (
    <div className='search-container'>
      <input
        className='search-input'
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Cari Produk Disini"
      />
      <button className='search-button' onClick={handleSearch}>Cari</button>
    </div>
  );
};

export default SearchComponent;