import React from 'react'
import PortfolioModel from './PortfolioModel';
import {connect} from 'react-redux';

const ModelManger = ({ModelName,Payload,hideDetailItem}) => {
    switch (ModelName) {
        case 'OpenPortfolioModel':
            return <PortfolioModel Payload={Payload} hideDetailItem={hideDetailItem}/>
        case 'ClosePortfolioModel':
            return null;
        default:
            return null;
    }
}

const mapState = state => {
    return {
        ModelName:state.model.ModelName,
        Payload:state.model.ModelPayload
    }
}

const mapDispatch = dispatch => {
    return {
        hideDetailItem:() => dispatch({type:'ClosePortfolioModel'})
    }
}
export default connect(mapState,mapDispatch)(ModelManger);
