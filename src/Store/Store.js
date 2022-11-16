import {createStore} from 'redux'
import EmployeeReducer from './EmployeeReducer';


const initialestate = {}
const Store = createStore(EmployeeReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());


export default Store;