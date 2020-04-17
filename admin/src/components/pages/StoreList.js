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
                        <div className="card" style={{ height: '250px'}}>
                            <div className="card-body" style={{ textAlign: 'center' }}>
                                <img src={ value.url[0] } style={{maxWidth: '100%', maxHeight: '100%'}} />
                            </div>
                            <div className="card-footer">
                                <Link  to={"/edit/" + value.slug }>{ value.name }</Link>
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
