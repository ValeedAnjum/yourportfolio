import {combineReducers} from 'redux';
import {PortfolioReducer} from './PortfolioReducer';
import { ModelReducer } from './ModelReducer';
export const Reducer =  combineReducers({
    portfolio:PortfolioReducer,
    model:ModelReducer
})

