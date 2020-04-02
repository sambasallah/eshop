
import React from 'react';

export const Error = () => {
    return(
        <>
    <div class="alert alert-danger alert-dismissible fade show" style={{ marginTop: '9px'}} role="alert">
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
    <div class="alert alert-success alert-dismissible fade show" style={{ marginTop: '9px'}} role="alert">
    <strong>Success!</strong> Product Saved.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>    
    </>
)
}
