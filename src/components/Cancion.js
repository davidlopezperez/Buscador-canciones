import React, {Fragment} from 'react';

const Cancion = ({letra}) => {
    
    return ( 
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-sm-6 col-lg-12 justify-content-center">
                        <h2>Letra canción</h2>
                        <p className="letra">{letra}</p>

                    </div>

                </div>
            </div>
        </Fragment>

     );
}
 
export default Cancion;