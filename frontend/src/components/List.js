import React from 'react';
import axios from 'axios'
import {BsTrash} from 'react-icons/bs';
import {BiEditAlt} from 'react-icons/bi'
import { baseURL } from '../utils/constant';
import './List.css'

export const List = ({id, task, setUpdateUI ,updateMode }) => { 

    const removeTask =()=>{
        axios.delete(`${baseURL}/delete/${id}`).then((res) => {
            console.log(res);
            setUpdateUI((prevState) => !prevState);
        })
    }



    
  return (
    <li className='container'>
        <div className='task_holder'>
         {task}
        </div>
        
        <div className='icon_holder'>
            <BiEditAlt className='icon' onClick={()=> updateMode(id, task)} />
            <BsTrash className='icon' onClick={removeTask}/>
        </div>
    </li>
  )
}
