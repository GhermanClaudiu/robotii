import React from 'react';
import './SearchBox.css';


const SearchBox=({searchfield,searchChange})=>{
	return(
		<div className='search-box'>
		  <input 
		  	 className='search-input'
			  type='search' 
			  placeholder='search robots'
			  onChange={searchChange}
		  />
		</div>
		);
}
export default SearchBox;