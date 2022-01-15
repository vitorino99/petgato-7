import { useState } from 'react';
import { StyledSearchBox } from "./style";

import searchIcon from '../../assets/icons/awesome-search.svg';

const SearchBox = ({ onSubmit, onSearchChange }) => {

    const [errorMsgs, setErrorMsgs] = useState([]);

    return (
        <StyledSearchBox id="searchForm" onSubmit={onSubmit}>
            <input onChange={e => onSearchChange(e.target.value)} type="text" name="searchText" label="Search" />
            <button type="submit">
                <img src={searchIcon} alt="SearchIcon" />
            </button>
            {errorMsgs && (errorMsgs.map((msg, i) =>
                <span key={i} className='message'>{msg}</span>
            ))}
        </StyledSearchBox>
    )
}

export default SearchBox
