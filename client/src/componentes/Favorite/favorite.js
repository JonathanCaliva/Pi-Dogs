import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFavorite } from '../../action'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import style from './favorite.module.css'


export default function Favorite(props){
    console.log("soy props",props)
    const fav= useSelector((state)=> state.favorite)
    console.log("soy fav",fav)

    const dispatch= useDispatch()
  
     
    function handleClick(e){
        Swal.fire({
            title: "Are you sure you want to remove from favorites?",
      
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted", "removed from favorites.", "success");
        dispatch(removeFavorite(e))
        }
    })
}

  

return(
    <div>
        <Link to='/home'>
                  <div>
                    <button className={style.botonReturn} type='button'>
                    RETURN
                    </button>
                  </div>
        </Link>
        <div className={style.contenedor}>    
            <div className={style.contenedor1} >
                    <h4 className={style.text} >FAVORITE DOGS:</h4>
                    {fav.map((fav)=>{
                    return(
                    <ul>
                        <li className={style.text1} >{fav.name}
                        <button  className={style.boton} onClick={()=> handleClick(fav.id)}>REMOVE</button></li>
                    </ul>
                    )})}
            </div>
            <img src='https://www.lapatilla.com/wp-content/uploads/2021/02/razas-perros-1.png?resize=640%2C382?w=731' alt='img' />            
        </div>
    </div>
)
}