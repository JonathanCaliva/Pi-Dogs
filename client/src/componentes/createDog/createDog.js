import React from 'react';
import { useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {postDog , getTemperament} from '../../action'
import { useDispatch, useSelector } from 'react-redux';
import style from './createDog.module.css'


function controlForm(input) {
    const reg = new RegExp("^[0-9]+$");
    let errors = {};
    if (!input.name) errors.name = "ENTER DOG NAME";
    if (
      input.height_min < 0 ||
      input.height_min > 100 ||
      !reg.test(input.height_min) // !reg.test es una expresión que comprueba si la entrada es un número.
    )
      errors.height_min = "ENTER A HEIGHT MIN BETWEEN 0-100";
    if (
      input.height_max < 0 ||
      input.height_max > 100 ||
      !reg.test(input.height_max)
    )
      errors.height_max = "ENTER A HEIGHT MAX BETWEEN 0-100";
    if (
        input.weight_min < 0 ||
        input.weight_min > 100 ||
        !reg.test(input.weight_min)
      )
        errors.weight_min = "ENTER A WEIGHT MIN BETWEEN 0-100";
    if (
            input.weight_max < 0 ||
            input.weight_max > 100 ||
            !reg.test(input.weight_max)
        )
        errors.weight_max = "ENTER A WEIGHT MAX BETWEEN 0-100";
        if (
            input.life_span_min < 0 ||
            input.life_span_min > 100 ||
            !reg.test(input.life_span_min)
        )
        errors.life_span_min = "ENTER A LIFE SPAN MIN BETWEEN 0-100";
        if (
            input.life_span_max < 0 ||
            input.life_span_max > 100 ||
            !reg.test(input.life_span_max)
        )
        errors.life_span_max = "ENTER A LIFE SPAN MAX BETWEEN 0-100";
    if (!input.image) 
        errors.image = "ENTER AN IMAGE ";
   
    return errors;
  }

export default function DogCreate(){
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const listTemperament =useSelector((state)=> state.temperament)

    const[botonActivo, setBotonActivo] = useState(false)

    const [errors, setErrors] = useState({}); 
    const [input,setInput]= useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max:"",
    life_span_min:"",
    life_span_max:"",
    createDb:true,
    image:"" || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_ve2rhcDRIDr6VZfWJAquDsj3nYZNdgyMA&usqp=CAU",
    temperament: [],
    })

    
    useEffect(()=>{
      dispatch(getTemperament())
      },[dispatch])

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(
            controlForm({
              ...input,
              [e.target.name]: e.target.value,
            })
          );
        setBotonActivo(true)
    }

    function handleSelect(e){
        setInput({
            ...input,
            temperament: [...input.temperament,e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postDog(input));
        if(errors.hasOwnProperty("name") ||
        errors.hasOwnProperty("height_min") ||
        errors.hasOwnProperty("height_max") ||
        errors.hasOwnProperty("weight_min") ||
        errors.hasOwnProperty("weight_max") ||
        errors.hasOwnProperty("life_span_min") ||
        errors.hasOwnProperty("life_span_max") ||
        errors.hasOwnProperty("image")){
            alert("Complete correctamente todos los campos")
            setInput({
                name: "",
                height_min: "",
                height_max: "",
                weight_min: "",
                weight_max:"",
                life_span_min:"",
                life_span_max:"",
                createDb:true,
                image:"" || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_ve2rhcDRIDr6VZfWJAquDsj3nYZNdgyMA&usqp=CAU",
                temperament: [],
            })
        }else{
        alert("CONGRATULATIONS, THE DOG WAS CREATED SECCESSFULLY !");
        setInput({
            name: "",
            height_min: "",
            height_max: "",
            weight_min: "",
            weight_max:"",
            life_span_min:"",
            life_span_max:"",
            createDb:true,
            image:"" || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_ve2rhcDRIDr6VZfWJAquDsj3nYZNdgyMA&usqp=CAU",
            temperament: [],
        });
        console.log("input", input);
        navigate("/home");
    }
    }
    function handleDelete(e) {
        setInput({
          ...input,
          temperament: input.temperament.filter((temper) => temper !== e),
        });
      }
    
return(
    <div>
            <div>
            {listTemperament.length>0? 
            <div>
              <div className={style.contenedor1}> 
                  <img className={style.huella} src='https://img.freepik.com/vector-gratis/huella-vector-pata-perro_71328-325.jpg?w=2000' alt='huella1' />
                  <img className={style.huella} src='https://img.freepik.com/vector-gratis/huella-vector-pata-perro_71328-325.jpg?w=2000' alt='huella2' />
                  <h1 className={style.titulo23}>CREATE YOUR DOG</h1>
                  <img className={style.huella} src='https://img.freepik.com/vector-gratis/huella-vector-pata-perro_71328-325.jpg?w=2000' alt='huella3' />
                  <img className={style.huella} src='https://img.freepik.com/vector-gratis/huella-vector-pata-perro_71328-325.jpg?w=2000' alt='huella4' />
                  <Link to='/home'>
                  <div>
                    <button className={style.botonReturn} type='button'>
                    RETURN
                    </button>
                  </div>
                  </Link>
              </div>
                <div className={style.flexConteiner}>
                <form 
                className={style.contenedorForm}
                onSubmit={e=>{
                handleSubmit(e);
                }}
                >              
              <div className={style.flex}>
                <div>
                    <label className={style.text} >NAME:</label>
                <div>
                <input
                  className={style.input}
                  type='text'
                  value={input.name}
                  name='name'
                  onChange={(e)=> {handleChange(e)}}
                />
                    {errors.name && <label className={style.error} >*{errors.name}*</label>}
              </div>
              <div >
                <div> 
                    <label className={style.text}>HEIGHT MIN:</label>
                </div>
                <input
                    className={style.input}
                      type='text'
                      value={input.height_min}
                      name='height_min'
                      onChange={(e)=>{ handleChange(e)}}
                />
                      {errors.height_min && <label className={style.error}>*{errors.height_min}</label>}
                </div>
                  <div>
                    <div>
                      <label className={style.text}>HEIGHT MAX:</label>
                    </div>
                        <input
                        className={style.input}
                        type='text'
                        value={input.height_max}
                        name='height_max'
                        onChange={(e)=> {handleChange(e)}}
                        />
                         {errors.height_max && <label className={style.error}>*{errors.height_max}*</label>}
                  </div>
                  <div>
                      <div> 
                        <label className={style.text}>WEIGHT MIN</label>
                      </div>
                      <input
                          className={style.input}
                            type='text'
                            value={input.weight_min}
                            name='weight_min'
                            onChange={(e)=> {handleChange(e)}}
                      />
                        {errors.weight_min && <label className={style.error}>*{errors.weight_min}*</label>}
                    </div>
                    <div>
                      <div> 
                        <label className={style.text}>WEIGHT MAX:</label>
                      </div>
                        <input
                          className={style.input}
                            type='text'
                            value={input.weight_max}
                            name='weight_max'
                            onChange={(e)=> handleChange(e)}
                        />                    
                          {errors.weight_max && <label className={style.error}>*{errors.weight_max}*</label>}
                      </div>
                      <div >
                      <div> 
                        <label className={style.text}>LIFE SPAN MIN:</label>
                      </div>
                        <input
                          className={style.input}
                            type='text'
                            value={input.life_span_min}
                            name='life_span_min'
                            onChange={(e)=> handleChange(e)}
                        />                    
                          {errors.life_span_min && <label className={style.error}>*{errors.life_span_min}*</label>}
                      </div>
                      <div >
                      <div> 
                        <label className={style.text}>LIFE SPAN MAX:</label>
                      </div>
                        <input
                          className={style.input}
                            type='text'
                            value={input.life_span_max}
                            name='life_span_max'
                            onChange={(e)=> handleChange(e)}
                        />                    
                          {errors.life_span_max && <label className={style.error}>*{errors.life_span_max}*</label>}
                      </div>
                    <div >
                      <div>
                        <label className={style.text}>IMAGE:</label>
                      </div>
                      <input
                        className={style.input}
                        type="text"
                        name="image"
                        value={input.image}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />                     
                      {errors.image && <label className={style.error}>*{errors.image}*</label>}
                    </div>
                    <div>
                      <div>
                        <label className={style.text}>CREADO FOR YOU</label>
                      </div>
                      <input
                      className={style.inputTrue}
                      type="text"
                      name="created"
                      value={input.createDb}
                      onChange={(e)=>{
                        handleChange(e)
                      }}
                      />
                    </div>
                    <div>
                    <label className={style.text} >TEMPERAMENT / TEMPERAMENTS</label>
                      <select onChange={(e) => handleSelect(e)}>
                          {listTemperament.map(temper=>(
                          <option value={temper.name}>
                              {temper.name}
                          </option>
                          ))}
                      </select>
                      <h5 className={style.temper}>SELECTED TEMPERAMENT: {input.temperament.map(el=>el + " ,")}</h5>                   
                       <button  type="submit" disabled={!botonActivo}>
                        CREATE THE DOG
                      </button> 
                      
                    </div>                      
                </div>
                </div>
                <div >
                    {input.temperament.map((e) => (
                <div className={style.delete}>
                  <button className={style.botonD} onClick={() => handleDelete(e)}>
                    X
                  </button>  
                  <div className={style.contenedorText}>
                    <label className={style.textD} >{e}</label>
                  </div>              
              </div>
            ))}
            </div>
            </form>
            <div className={style.imgContenedor}>
              <img className={style.img} src='https://www.rescuedogs101.com/wp-content/uploads/2019/12/Best-Dog-Training-Books_Rescue-Dogs-101_post_.jpg' alt='dog' ></img>
            </div>
            </div>
            </div> :(
                <div>
                     <img className={style.imgLoader}  src='https://c.tenor.com/A17aJ1ZniiUAAAAC/dog-walking.gif' alt='loader'/> 
                </div> )}
            </div>
            </div>
        )
}