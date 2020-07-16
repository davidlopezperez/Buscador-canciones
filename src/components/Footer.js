import React from 'react';



const Footer = () => {
    return ( 
        <div className="bg-info">
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-12 col-sm-12">
                <footer>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a href="https://github.com/davidlopezperez/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/david-lopez-bb756919b/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.instagram.com/davidelpp/?hl=es-la" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </li>

                    </ul>
                    <p className="parrafo">David López</p>
                </footer>
            </div>
            </div>
        </div> 
        
        );
}
 
export default Footer;