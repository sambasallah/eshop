import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Error = () => {
    return (
        <div>
          <Helmet>
			 <title>Not Found | eBaaba No. 1 Online Shopping Website in Gambia</title>
		 </Helmet>
           <div className="error-404">
             <div className="error-text">
               <h2>404 | Not Found</h2>
               <Link to="./" className="continue-shopping">Continue Shopping</Link>
             </div>
           </div>
        </div>
    )
}

export default Error;
