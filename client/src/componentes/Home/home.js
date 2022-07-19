import React from 'react';
import { useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getDogs, filterDogByTemperament, orderByname, orderByWeight, filterByCreated } from '../../action';
import { Link } from 'react-router-dom';
import Card from '../Card/card';
import Paginado from '../Paginado/paginado';
import SearchBar from '../SearchBar/searchBar';

import style from './home.module.css'

export default function Home(){

const dispatch = useDispatch()
const alldogs = useSelector((state) => state.dogs)
const[orden, setOrden] = useState("")
const[order, setOrder] = useState("")
const[hola,setHola] = useState("")
const[temper,setTemper]= useState("")
const[currentPage,setCurrentPage]= useState(1) //inicia en 1 xq empezare en la pagina 1
const[dogsPerpage,setDogsPerPage] = useState(8) //inicia en 8 xq tendre 8 perros por pagina
const indexOfLastDogs = currentPage * dogsPerpage //indice del ultimo perro, cantidad de paginas * perros por paginas, en un principio seran 8
const indexOfFirstDogs = indexOfLastDogs - dogsPerpage // indice del 1er perro, dara 0
const currentDogs = alldogs.slice(indexOfFirstDogs,indexOfLastDogs)
const myFav=useSelector((state)=> state.favorite)

console.log("en favo",myFav)

const paginado = (pageNumber)=>{
    setCurrentPage(pageNumber)
}

useEffect(()=>{
    dispatch(getDogs())
},[dispatch])

function handleFilterByTemperament(e){
    e.preventDefault();
    dispatch(filterDogByTemperament(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`) 
}

function handleSort(e){
    e.preventDefault();
    dispatch(orderByname(e.target.value));
    setCurrentPage(1); //se setea para empezar en la 1er pagina
    setOrden(`Ordenado ${e.target.value}`) //es un estado local vacio, lo utilizo para que cuando seteo la pagina, me modifique el estado local y se renderice//
}

function handleWeight(e){
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
}

function handleClick(e){
    e.preventDefault();
    dispatch(getDogs())
}

function handleFilterCreated(e){
    e.preventDefault();
    dispatch(filterByCreated(e.target.value));
    setCurrentPage(1);
    setHola(`Ordenado ${e.target.value}`)
}

return(
    <div>
     { alldogs.length > 0 ?
        <div>
            <nav className={style.nav}>
        
            <img className={style.logo}  src='https://tse1.mm.bing.net/th?id=OIP.SaPpm9lwnMk51SiWJ8tTqwHaF7&pid=Api&P=0&w=206&h=164' alt='logo'></img>
                <div>
                    <Link to='/favorite'>
                        <button className={style.botonF} > FAVORITE </button>
                    </Link>
                </div>
                <div >
                    <Link type='button' to='/post'>
                        <button  className={style.boton} >CREATE YOUR DOG</button>
                    </Link>
                </div>
                <div className={style.search}>
                    <SearchBar
                    setCurrentPage={setCurrentPage}
                    />
                </div>
            </nav>
                <div className={style.flex}>
                    <div className={style.sidebar}>
                        <ul className={style.ul}>                      
                            <li className={style.li}>
                                <label className={style.titulo}>FILTER BY TEMPERAMENT:</label>
                                    <select className={style.caja} onChange={(e)=> handleFilterByTemperament(e) }  >
                                        <option value= 'all'>ALL TEMPERAMENTS</option>
                                        <option value= 'Active' >ACTIVE</option>
                                        <option value= 'Aloof' >ALOOF</option>
                                        <option value= 'Bossy' >BOSSY</option>
                                        <option value= 'Clever'>CLEVER</option>
                                        <option value= 'Excitable' >EXCITABLE</option>
                                        <option value= 'Familial' >FAMILIAL</option>
                                        <option value= 'Gentle' >GENTLE</option>
                                        <option value= 'Happy' >HAPPY</option>
                                        <option value= 'Keen' >KEEN</option>
                                        <option value= 'Lovable' >LOVABLE</option>
                                        <option value= 'Merry' >MERRY</option>
                                        <option value= 'Patient' >PATIENT</option>
                                        <option value= 'Proud' >PROUD</option>
                                        <option value= 'Quick' >QUICK</option>
                                        <option value= 'Quiet' >QUIET</option>
                                        <option value= 'Reliable' >RELIABLE</option>
                                        <option value= 'Responsible' >RESPONSIBLE</option>
                                        <option value= 'Responsive' >RESPONSIVE</option>
                                        <option value= 'Rugged' >RUGGED</option>
                                        <option value= 'Sensitive' >SENSITIVE</option>
                                        <option value= 'Strong' >STRONG</option>
                                    </select>
                            </li>
                            <li className={style.li}>
                                <label className={style.titulo}>ORDER ALPHABETICALLY:</label>
                                    <select className={style.caja} onChange={(e)=> handleSort(e)} >                                    
                                        <option value='asc' >A-Z</option>
                                        <option value='desc'>Z-A</option>
                                    </select>
                            </li>
                            <li className={style.li}>
                                <label className={style.titulo}>ORDER BY WEIGHT:</label>
                                    <select className={style.caja} onChange={(e)=> handleWeight(e)} >                                    
                                        <option value='mamenor' >HIGHER TO LOWER</option>
                                        <option value='memayor' >LOWER TO HIGHER</option>
                                    </select>
                            </li>
                            <li className={style.li}>
                                <label className={style.titulo}>ORDER BY CREATION</label>
                                    <select className={style.caja} onChange={(e)=> handleFilterCreated(e)} >                                 
                                        <option value='api' >API</option>
                                        <option value='bd' >DATA BASE</option>
                                    </select>
                            </li>
                            <li>
                                <div className={style.padel1}>
                                    <button className={style.boton1}
                                        type='button'
                                        onClick={e=> {handleClick(e)}} >
                                        RELOAD DOGS
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>        
                    <div className={style.cartoneta} >
                        { currentDogs?.map((e)=>{ 
                            console.log(currentDogs)
                                return(
                                    <div>
                                        <Link className={style.card1}
                                        to={'/detail/' + e.id}>
                                            <Card 
                                            name={e.name} 
                                            image={e.image}
                                            temperament={e.temperament}
                                            weigth_min={e.weight_min}
                                            weight_max={e.weight_max}
                                            />
                                        </Link> 
                                </div>);
                                })
                            }
                    </div>
                </div>               
                <Paginado
                        dogsPerPage={dogsPerpage}
                        allDogs={alldogs.length}
                        paginado={paginado}
                    />
        </div>
        :(
        <div >
            <h5 className={style.textLoader}>Loading...</h5>
            <img className={style.imgLoader} src='https://c.tenor.com/A17aJ1ZniiUAAAAC/dog-walking.gif' alt='loader'/> 
        </div> )}
    </div>       
)

}