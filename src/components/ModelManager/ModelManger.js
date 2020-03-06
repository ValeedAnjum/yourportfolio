import React from 'react'
import PortfolioModel from './PortfolioModel';
import {connect} from 'react-redux';

const ModelManger = ({ModelName,Payload}) => {
    switch (ModelName) {
        case 'OpenPortfolioModel':
            return <PortfolioModel Payload={Payload}/>
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

export default connect(mapState)(ModelManger);
