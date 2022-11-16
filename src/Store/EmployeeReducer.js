import { AddEmployee } from "./Actions";
const initialState = {
  EmployeeData: [] 
};
const EmployeeReducer = (state = initialState, action) => {
  if (action.type == "AddEmployee") {
      
    return { ...state, EmployeeData: [...state.EmployeeData,action.payload] };
  }

  return state;
};

export default EmployeeReducer;
