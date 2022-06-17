import React from 'react';
import style from './paginado.module.css'

export default function paginado({dogsPerPage,allDogs,paginado}){
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className={style.pagination}>
                {pageNumbers &&
                pageNumbers.map(number =>(
                    <li key={number} >
                    <button onClick={()=> paginado(number)}> {number} </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}