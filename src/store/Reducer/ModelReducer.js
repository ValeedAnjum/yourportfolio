const intState = {
    ModelName:null,
    ModelPayload:null
}

export const ModelReducer = (state = intState,action) => {
    switch(action.type){
        case 'OpenPortfolioModel':
            return {...state,ModelName:'OpenPortfolioModel',ModelPayload:action.payload}
        default:
            return {...state,ModelName:null}
    }
}