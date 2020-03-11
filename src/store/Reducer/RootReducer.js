import {combineReducers} from 'redux';
import {PortfolioReducer} from './PortfolioReducer';
import { ModelReducer } from './ModelReducer';
import {reducer as formReducer} from 'redux-form';
export const Reducer =  combineReducers({
    portfolio:PortfolioReducer,
    model:ModelReducer,
    form:formReducer
})

