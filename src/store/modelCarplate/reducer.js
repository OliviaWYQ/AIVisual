// /*
//  *
//  * model car plate reducer
//  *
//  */
//
// import { MODEL_CARPLATE_REQUEST } from './constants';
//
// // The initial state
// const initState = {
//   list: [],
// };
//
// const getCarplateData = (state, action) => {
//   console.log('carplate state', action.obj);
//   return { ...state, list: action.obj };
// };
//
// const CarplateReducer = (state = initState, action) => {
//   switch (action.type) {
//     case MODEL_CARPLATE_REQUEST: return getCarplateData(state, action);
//     default: return state;
//   }
// };
//
// export default CarplateReducer;
