import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import { getDetail, addFavorite } from '../../action'
import Swal from "sweetalert2"
import style from "./detail.module.css"

export default function Detail(props){
    console.log(props)
    const dispatch=useDispatch();
    const { id } = useParams();

    useEffect(()=>{
        dispatch(getDetail(id));
    },[dispatch,id]);

    const myDog= useSelector((state)=> state.detail)
    const myFav=useSelector((state)=> state.favorite)

    function handleClick(e){
        e.preventDefault();
        dispatch(addFavorite(myDog))
        console.log("se agregi a fav")
        Swal.fire({
            position: "center",
            icon: "success",
            title: "IT WAS ADDED TO FAVORITES SUCCESSFULLY!",
            showConfirmButton: false,
            timer: 1500,
          });
    }

    console.log("se agg",myFav)

    return(
        <div>
                <div>
                {myDog.image ? 
                    <div className={style.contenedorCentral}>
                        <div className={style.botones} >                  
                            <div >
                                        <Link to="/home">
                                        <div >
                                            <button className={style.botonReturn}>
                                            RETURN
                                            </button>
                                        </div>
                                        </Link>
                            </div>
                            <div>
                            
                                    <div>
                                        <button className={style.botonFav} onClick={(e)=> {handleClick(e)}} >ADD TO FAVORITES</button>
                                    </div>
                            
                            </div>
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
                        :(
                        <div>
                            <h5 className={style.textLoader}>Loading...</h5>
                            <img className={style.imgLoader}  src='https://c.tenor.com/A17aJ1ZniiUAAAAC/dog-walking.gif' alt='loader'/> 
                            </div>
                         )} 
                    </div>
                    </div>
);
    

}