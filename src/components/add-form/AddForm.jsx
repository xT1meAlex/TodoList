import React, { useState } from 'react';
import './add-form.css';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { Input, Button } from 'antd';


const AddForm = ({ onAdd }) => {
  const [state, setState] = useState({
    name: '',
    title: '',
    date: dayjs(new Date())
  });

  const { name, date } = state;
  const onValueChange = () => {
    const { name, value } = document.getElementById('add-input');
    const date  = document.getElementById('date-picker').value;
    setState(({ date: date, [name]: value }));
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    if (name.length < 3) {
      alert('Min task name length will contain more then 3 symbols')
      return
    }
    onAdd(name, date);

    setState({
      name: '',
      date: ''
    });
  }

  return (
      <div className="app-add-form">
        <h3>Add new task</h3>
        <form className="add-form d-flex" onSubmit={onSubmit}>
          <Input placeholder="Your task" id='add-input' name='name' value = {name} onChange={onValueChange} />
          <DatePicker defaultValue={dayjs(new Date)} id='date-picker' onChange={onValueChange} />
          <Button 
            size='default'
            htmlType='submit'
          >
            Add
          </Button>
        </form>
    </div>
  );
};

export default AddForm;

