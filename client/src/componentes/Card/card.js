import React from 'react'
import style from './card.module.css'

export default function Card({name,image,temperament,weigth_min,weight_max}){
    return ( 
        <div className={style.container} >
          <div className={style.card}>
            <figure>
              <img className={style.imagenRec} src={image} alt="img not found" />         
            </figure>
            <div>
              <h3 >{name}</h3>
              <h5 >Temperament :{temperament}</h5>
              <h5>Weight min :{weigth_min} kg</h5>
              <h5>Weight max :{weight_max} kg</h5>
            </div>
          </div>
        </div>
      );
}