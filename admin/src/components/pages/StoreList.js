import React from 'react'
import { Link } from 'react-router-dom';

const StoreList = (props) => {
    return (
        <>
        <div className="row">
        { props.allProducts.products.map(
            (value, index) => {
                return (
                    <div className='col-md-3'>
                        <div className="card">
                            <div className="card-body">
                                <img src={ value.url[0] } style={{width: '100%'}} />
                            </div>
                            <div className="card-footer">
                                <Link to={"/edit/" + value.slug }>{ value.name + " " +value.sale_price + " - " + value.regular_price}</Link>
                            </div>
                        </div>
                    </div>
                )                 
           })}
            </div>
        </>

                           
                
        
    );
}

export default StoreList
