import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameDog } from "../../action";
import style from './searchBar.module.css'

export default function SearchBar(props){

    const dispatch = useDispatch()
    const [name,setName]=useState("")

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNameDog(name));
        props.setCurrentPage(1)
    }

    return(
            <div>
                <label className={style.titulo}>SEARCH BY DOG BREED:</label>
                <input 
                className={style.boxy23}
                onChange={e=> handleInputChange(e)}
                    type="text"
                    placeholder="Enter race..."
                />
                <button className={style.battonix} type='submit' onClick={e=>handleSubmit(e)} >Search</button>

            </div>    
    )
} 