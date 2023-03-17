import React, { useState } from 'react';
import './search-panel.css';
import { Input } from 'antd';
const { Search } = Input;

const SearchPanel = (props) => {
    const [term, setTerm] = useState('');

    const onUpdateSearch = () => {
        const term = document.getElementById('search-input').value;
        setTerm(term);
        props.onUpdateSearch(term);
    }

    return (
        <Search placeholder="Find task" id='search-input' onSearch={onUpdateSearch}/>
    );
};

export default SearchPanel;