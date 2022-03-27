import { ADD_PERSON } from "../constant";

const initState = [];
export default function personReducer(preState=initState, action){
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      preState.push(data);
      return preState;
      // return [data, ...preState];
    default:
      return preState;
  }
}