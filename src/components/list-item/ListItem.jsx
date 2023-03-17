import React from 'react';
import './list-item.css';
import { DatePicker, Input } from 'antd';
import dayjs from 'dayjs';


const ListItem = (props) => {
    const {name, date, onDelete, onToggleProp, rise, data, number} = props; 
    let classNames = "list-group-item d-flex justify-content-between";

    if (rise) {
        classNames += ' like';
    }

    const handleChangeName = (e) => {
        data[number].name = e.target.value
        localStorage.setItem('SAVED_TASKS', JSON.stringify(data))
    }

    return (
            <li className={classNames} data-toggle='rise' onClick={onToggleProp}>
                <Input placeholder="Borderless" bordered={false} className='text-item' defaultValue={name} onChange={(e) => handleChangeName(e)}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <DatePicker defaultValue={dayjs(date)} disabled />
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>

            </li>
    );
}

export default ListItem