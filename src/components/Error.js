import React from 'react';

const Error = ({mensaje}) => {
return (    

    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <p className="alert alert-danger text-center p-2 mt-2">{mensaje}</p> 
            </div>
        </div>
    </div>
);
}
 
export default Error;