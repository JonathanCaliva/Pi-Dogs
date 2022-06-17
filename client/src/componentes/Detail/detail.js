import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import { getDetail } from '../../action'
import style from "./detail.module.css"

export default function Detail(props){
    console.log(props)
    const dispatch=useDispatch();
    const { id } = useParams();

    useEffect(()=>{
        dispatch(getDetail(id));
    },[dispatch,id]);

    const myDog= useSelector((state)=> state.detail)

    return(
         <div>
                <div >
                        <Link to="/home">
                        <div >
                            <button className={style.botonReturn}>
                            RETURN
                            </button>
                        </div>
                        </Link>
                </div>
                <div className={style.contenedor1}>
                  <img className={style.huella} src='https://img.freepik.com/vector-gratis/huella-vector-pata-perro_71328-325.jpg?w=2000' alt='huella1' />
                  <img className={style.huella} src='https://img.freepik.com/vector-gratis/huella-vector-pata-perro_71328-325.jpg?w=2000' alt='huella2' />
                  <h1 className={style.titulo23}>DETAIL THE DOG</h1>
                  <img className={style.huella} src='https://img.freepik.com/vector-gratis/huella-vector-pata-perro_71328-325.jpg?w=2000' alt='huella3' />
                  <img className={style.huella} src='https://img.freepik.com/vector-gratis/huella-vector-pata-perro_71328-325.jpg?w=2000' alt='huella4' />
                </div>
                <div className={style.contenedor}>
                
                    <div>
                        <h1 className={style.titulo} >{myDog.name}</h1>
                    </div>
                    <div>
                        <img className={style.imagen} src={myDog.image} alt="dog" />
                    </div>
                    <div className={style.seccion}>
                    <h3 >HEIGHT:</h3>
                        <p className={style.seccion1}>{myDog.height_min} - {myDog.height_max} cm</p>
                    </div> 
                    <div className={style.seccion}>
                        <h3 >WEIGHT:</h3>
                        <p className={style.seccion1}>{myDog.weight_min} - {myDog.weight_max} kg</p>
                    </div>
                    <div className={style.seccion}>
                        <h3 >LIFE SPAN:</h3>
                        <p className={style.seccion1}>{myDog.life_span_min} - {myDog.life_span_max}</p>
                    </div>
                    <div className={style.seccion}>
                        <h3 >TEMPERAMENT:</h3>
                        <p className={style.seccion1}>{myDog.temperament}</p>
                    </div>

                </div>
            
            
    </div>
);
    

}