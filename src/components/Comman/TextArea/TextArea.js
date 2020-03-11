import React from 'react';

const Textinput = (props) => {
    const {input,placeholder,className,rows,meta:{touched,error}} = props;
    return (
        <React.Fragment>
        <textarea {...input} placeholder={(touched && error) ? error:placeholder}
            rows={rows}
            required={placeholder}
            className={className ? className:null}
        />
        </React.Fragment>
    );
};

export default Textinput;