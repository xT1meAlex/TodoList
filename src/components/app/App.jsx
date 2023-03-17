import React, { useState } from 'react';
import SearchPanel from '../search-panel/SearchPanel.jsx';
import AppFilter from '../app-filter/AppFilter.jsx';
import List from '../list/List.jsx';
import AddForm from '../add-form/AddForm.jsx';

import './app.css';

!localStorage.getItem('SAVED_TASKS') && localStorage.setItem('SAVED_TASKS', JSON.stringify([])) 

function App() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('SAVED_TASKS')));
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
  
    const deleteItem = (id) => {
      setData(data.filter(item => item.id !== id));
      localStorage.setItem('SAVED_TASKS', JSON.stringify(data.filter(item => item.id !== id)))
    };
  
    const addItem = (name, date) => {
      const newItem = {
        name, 
        date,
        rise: false,
        id: Math.round(Math.random() * 1000000)
      };
      setData([...data, newItem]);
      localStorage.setItem('SAVED_TASKS', JSON.stringify([...data, newItem]))
    }; 
    
    const onToggleProp = (id, prop) => {
      setData(data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      }));
      localStorage.setItem('SAVED_TASKS', JSON.stringify(data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })))
    };
  
    const searchEmp = (items, term) => {
      if (term.length === 0) {
        return items;
      }
      return items.filter(item => item.name.indexOf(term) > -1);
    };
  
    const onUpdateSearch = (term) => {
      setTerm(term);
    };
  
    const filterPost = (items, filter) => {
      switch (filter) {
        case 'favourite':
          return items.filter(item => item.rise);
        default:
          return items;
      }
  
    };

    const onFilterSelect = (filter) => {
      setFilter(filter);
    };
  
    const visibleData = filterPost(searchEmp(data, term), filter);
  
    return (
      <div className="app">
        <div className='functionality-container'>
          <div className="search-panel">
            <h3>Filter</h3>
            <div className="search-container">
              <div id='search-wrap'>
                <SearchPanel onUpdateSearch={onUpdateSearch}/>
              </div>
              <AppFilter filter={filter} onFilterSelect={onFilterSelect}/>
            </div>
           
          </div>
          <AddForm onAdd={addItem}/>
        </div>
        <List 
          data={visibleData}
          onDelete={deleteItem}
          onToggleProp={onToggleProp}/>
      </div>
    );
  }
  
  export default App;