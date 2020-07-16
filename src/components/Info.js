import React from 'react';

const Info = ({bio}) => {
    
    const {strArtistThumb, strGenre, strBiographyES, strLastFMChart, strFacebook, strTwitter} = bio;
    if(Object.keys(bio).length === 0) return null;
    
    return ( 

    <div className="container">
        <div className="row">
            <div className="col-md-6 col-12 col-lg-12">
                <div className="card border-light mt-2">
                    <div className="card-header bg-primary text-light font-weight-bold">
                        Informacion artista

                    </div>
                    <div className="card-body">
                        <img src={strArtistThumb} alt="Logo artista"/>
                        <p className="card-text">Genero: {strGenre}</p>
                        <h2 className="card-text">Biógrafia: </h2>
                        <p className="card-text">{strBiographyES}</p>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 card-body">
                                <a href={`https://${strFacebook}`}target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                 </a>
                            </div>
                        
                        
                            <div className="col-12 col-md-4 card-body">
                                <a href={`https://${strTwitter}`}target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                 </a>
                            </div>
                        
                        
                            <div className="col-12 col-md-4 card-body">
                                <a href={`https://${strLastFMChart}`}target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-lastfm"></i>
                                 </a>
                            
                             </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Info;