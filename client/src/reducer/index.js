const initialState = {
    dogs:[],
    allDogs:[],
    temperament:[],
    detail:[]
}

export default function rootReducer(state=initialState,action){
    switch(action.type){
        case 'GET_DOGS':
            let allDogi = action.payload 
            let allD= allDogi.filter((e)=> e.weight_min !== e.weight_max || e.weight_min !== "NaN")
            return{
                ...state,
                allDogs:allD,
                dogs: allD
            }
        case "GET_NAME_DOG":
            return{
                ...state,
                dogs:action.payload
            }
        case 'FILTER_BY_TEMPERAMENT':
            const allDog=state.allDogs
            const filtered = action.payload === 'all'? allDog : allDog.filter(el=> el.temperament?.includes(action.payload))
            return{
                ...state,
                dogs:filtered
            }
        case 'ORDER_BY_NAME':
            let orderByname = action.payload === 'asc' ? state.dogs.sort((a,b)=> (a.name > b.name ? 1 : -1 )) 
            :  action.payload === 'allDog'? state.dogs.sort((a,b)=> (a.name > b.name ? 1 : -1 )) : state.dogs.sort((a,b)=>(a.name < b.name? 1 : -1));
            return{
                ...state,
                dogs : orderByname
            }
        case "ORDER_BY_WEIGHT":
                let orderWeight =
            action.payload === "memayor"
              ? state.dogs.sort(function (a, b) {
                  if (a.weight_max > b.weight_max) {
                    return 1;
                  }
                  if (b.weight_max > a.weight_max) {
                    return -1;
                  }
                  return 0;
                })
              : state.dogs.sort(function (a, b) {
                  if (a.weight_max > b.weight_max) {
                    return -1;
                  }
                  if (b.weight_max > a.weight_max) {
                    return 1;
                  }
                  return 0;
                });

                let order= orderWeight.filter((e)=> e.weight_min !== e.weight_max && e.weight_max.length === 3)
                return {
                    ...state,
                    dogs: order,
            }
        case "POST_DOG":
            return{
                ...state,
            }
        case "GET_TEMPERAMENT":
            return{
                ...state,
                temperament:action.payload
            }
        case "GET_DETAILS":
            return{
                ...state,
                detail: action.payload
            }
        case "FILTER_CREATED":
            let all= state.allDogs
            let filter = action.payload === 'api'? all.filter(e=> e.createDb === false) : all.filter(e=> e.createDb === true)
            return{
                ...state,
                dogs:filter
            }
            default:
            return state
    }
}