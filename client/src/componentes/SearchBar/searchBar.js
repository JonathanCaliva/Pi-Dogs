import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameDog } from "../../action";
import style from './searchBar.module.css'

export default function SearchBar (){

    const dispatch = useDispatch()
    const [name,setName]=useState("")

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNameDog(name));
    }

    return(
        <div>
            <label className={style.titulo}>BUSQUEDA POR RAZA:</label>
            <input 
            className={style.boxy23}
            onChange={e=> handleInputChange(e)}
                type="text"
                placeholder="Buscar..."
            />
            <button className={style.battonix} type='submit' onClick={e=>handleSubmit(e)} >Buscar</button>

        </div>
    )
} 