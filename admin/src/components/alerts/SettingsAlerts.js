
import React from 'react';

export const Error = () => {
    return(
        <>
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
     <strong>Error!</strong> occurred.
     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
         <span aria-hidden="true">&times;</span>
     </button>
     </div> 
   </> 
    );
}

export const Success = () => {  
    return (
    <>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong> Settings Updated.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>    
    </>
)
}