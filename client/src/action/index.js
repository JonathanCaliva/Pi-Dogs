import axios from 'axios'

export function getDogs(){
    return async function(dispatch){
        let json = await axios.get("https://dogs-backend-pi.herokuapp.com/dogs");
        return dispatch({
            type: 'GET_DOGS',
            payload : json.data,
        })
    }
}

export function getNameDog(name){
    return async function(dispatch){
        try {
            var json = await axios.get("https://dogs-backend-pi.herokuapp.com/dogs?name=" + name);
            return dispatch({
                type:"GET_NAME_DOG",
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterDogByTemperament(payload){ //payload sera cada input de select : 'all',etc
    return{
        type:'FILTER_BY_TEMPERAMENT',
        payload
    }
}

export function orderByname(payload){
    return{
        type:'ORDER_BY_NAME',
        payload
    }
}

export function orderByWeight(payload) {
    return {
      type: "ORDER_BY_WEIGHT",
      payload,
    };
}

export function filterByCreated(payload){
    return{
        type:"FILTER_CREATED",
        payload
    };
}

export function postDog(payload){
    return async function (dispatch) {
        let json = await axios.post("https://dogs-backend-pi.herokuapp.com/dogPost", payload);
        return dispatch( {
            type: "POST_DOG",
            payload: json
      });
}
}
export function getTemperament(){
    return async function(dispatch){
        let json= await axios.get("https://dogs-backend-pi.herokuapp.com/temper")
        return dispatch({
            type: "GET_TEMPERAMENT",
            payload: json.data
        })
    }
}

// export function getDetail(id){
//     return async function(dispatch){
//         try {
//             var json = await axios.get("http://localhost:3001/dogs/"+ id)
//             return dispatch({
//                 type: 'GET_DETAILS',
//                 payload : json.data
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

export const getDetail = (id) =>{
    return (dispatch) => {
                return fetch("https://dogs-backend-pi.herokuapp.com/dogs/"+ id)
                .then((response) => response.json())
                .then((data) => {
                console.log(data)  
                  dispatch({
                    type: 'GET_DETAILS',
                    payload : data
                  })
                })
              } 
    }

export const addFavorite = (info)=> {
    return { 
      type: "ADD_FAVORITE",
       payload : info
    };
}
export const removeFavorite = (id)=>{
    return{
      type: "REMOVE_FAVORITE",
      payload: id
    }
  }
