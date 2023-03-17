import "./app-filter.css";
import React, { useState } from 'react';
import { Radio } from 'antd';

const AppFilter = (props) => {
  const [value, setValue] = useState('large'); // defa

  return (
    <Radio.Group value={value} onChange={(e) =>{
      props.onFilterSelect(e.target.value)
      setValue(e.target.value)
    }}>
      <Radio.Button value="all">All</Radio.Button>
      <Radio.Button value="favourite">Favourite</Radio.Button>
    </Radio.Group>
  )
};

export default AppFilter;