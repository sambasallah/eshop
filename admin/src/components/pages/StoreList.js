import React from 'react'

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
                                { value.name + " " +value.sale_price + " - " + value.regular_price}
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
