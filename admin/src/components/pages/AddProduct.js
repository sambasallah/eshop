import React, {useEffect, useState} from 'react';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { openUploadWidget } from "../utils/CloudinaryService";
import { slug, chunk } from '../utils/UtilityFunctions';
import { toast } from 'react-toastify';
import Navbar from '../inc/Navbar';
import { connect } from 'react-redux';

toast.configure();

const AddProduct = (props) => {

    const [product, setProduct] = useState({});
    const [category, setCategory] = useState([]);

    const ImageList = (props) => {
   
    let images = props.images;

    const deleteImage = (image) => {
       let allPictures =  [].concat.apply([], images)
       let updatedArray = allPictures.filter( img => img !== image);
       setProduct({...product, images : updatedArray });        
    }

    return(
        <>
         { images.map((value, mainIndex) => {
             return (
                 <div className="row">
                     { value.map((value, index) => {
                         return (
                            <div className="col-md-3">
                                <img src={ value } width='100%' />
                                <button style={{color: 'red', marginTop: '3px', borderRadius: 'none'}} onClick={ () => deleteImage(value) }><i className="fa fa-trash"></i></button>
                            </div>
                         )
                     })}
                 </div>
               
             )
         })}
        </>
    )        
}

  const saveProduct = async (event) => {
    event.preventDefault();
    if(product.id === undefined) {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/product?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/product?token=' + props.token;
        }
        let response = await fetch(url, {method : 'POST',
         headers : {'Content-Type': 'application/json'}, body : JSON.stringify(product) });
        let data = await response.json();
        if(data.Created === true) {
            setProduct({...product, id: data.ID});
            saved();
        }else {
            error();
        }
    } else {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/product/' + product.id + '?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/product/' + product.id + '?token=' + props.token;
        }
        let response = await fetch(url, {method : 'PUT',
        headers : {'Content-Type': 'application/json'}, body : JSON.stringify(product) });
        let data = await response.json();
        if(data.Updated === true) {
            updated();
        } else {
            error();
        }
    }

  }

  const saved = () =>  toast.success("Product Created!", {
      position: toast.POSITION.TOP_LEFT
  });

  const updated = () =>  toast.success("Product Updated!", {
    position: toast.POSITION.TOP_LEFT
  });
 
  const error = () => toast.error("An Error Occurred!", {
    position: toast.POSITION.TOP_LEFT
  });


  const getCategories = async () => {
    let url = '';
    if(process.env.NODE_ENV === 'development') {
        url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/product/categories?token=' + props.token
    } else {
        url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/product/categories?token=' + props.token
    }  
    let response = await fetch(url);
    let data = await response.json();
    let arr = [];

    data.map((value, index) => {
        arr[index] = value;
    }); 

    setCategory(Object.assign([],category, arr));
    }

  const handleChange = (event) => {
    setProduct({...product, [event.target.id] : event.target.value });
    if(event.target.id === 'productName') {
        let slugName = slug(event.target.value);
        setProduct({...product, productName: event.target.value, slug: slugName});
    }
  }
  
  const handleDescription = (event, editor) => {
        const data = editor.getData();
        setProduct({...product, description: data });
  }

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: process.env.REACT_APP_CLOUD_NAME,
      tags: [tag],
      uploadPreset: "products"
    };
  
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if(photos.event === 'queues-end' && product.images){
          let files = photos.info.files;
          let data = [];
          for(let i = 0; i < files.length; i++) {
            data[i] = photos.info.files[i].uploadInfo.secure_url;
          }
          for(let i = 0; i < data.length; i++) {
            product.images.push(data[i]);
          }
          let updatedImages = product.images;
          setProduct({...product, images: updatedImages, imageAdded: true });

        } else if(photos.event === 'queues-end') {
          let files = photos.info.files;
          let data = [];
          for(let i = 0; i < files.length; i++) {
            data[i] = photos.info.files[i].uploadInfo.secure_url;
          }
         setProduct({...product,  images: data });
        }
      } else {
        console.log(error);
      }
    });
  }

   
  useEffect(() => { 
    getCategories();
  },[]);


//   if(!props.token) return <Redirect to='/login'></Redirect>

  return (  
              <div>
                <Navbar />
                <Helmet title="Add Product | eBaaba Gambia" />
                <div className="breadcrumb">
                    <div className="breadcrumb-inner">
                        <h2>Add Product</h2>
                    </div>
                </div>
        
                <div className="add-product">
                    <div className="add-product-inner">
                        <div className="row">
                            <div className="col-md-4 left">
                                <div className="menu">
                                    <SideNav />
                                </div>
                            </div>
                            <div className="col-md-8 right">
                                <h2>Product Information - <a href="/add-product" className="new">New</a></h2>
                                <form onSubmit={ saveProduct }>
                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input type="text" placeholder="Product Name" onChange={ handleChange } id="productName" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                       <div className="row">
                                           <div className="col-md-6">
                                               <label>Regular Price (D)</label>
                                               <input type="text" placeholder="Regular Price" onChange={ handleChange } id="regularPrice"  className="form-control" required/>
                                           </div>
                                           <div className="col-md-6">
                                                <label>Sale Price (D)</label>
                                                <input type="text" placeholder="Sale Price" onChange={ handleChange } id="salePrice"  className="form-control" required/>
                                           </div>
                                       </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Product Description</label>
                                        {/* <textarea placeholder="Product Description" className="form-control" rows="5"></textarea> */}
                                        <CKEditor editor={ ClassicEditor } 
                                        onChange={ handleDescription } />    
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-3">
                                        <div className="form-group">
                                            <select className="form-control"  id="categoryID" onChange={ handleChange }>
                                                <option value="0">Category</option>
                                                { category.map(
                                                    (value, index) => 
                                                    { return <option value={value.id}> {value.category_name} </option> }) }
                                            </select>
                                         </div>         
                                        </div>
        
                                        <div className="col-md-2">
                                            <input type="number" name="quantity" min='1' className="form-control" id="quantity" placeholder="Qty" onChange={ handleChange } />
                                        </div>  
        
                                        <div className="col-md-5">
                                        <div className="form-group">
                                            <label>Images</label>
                                            <div className="row">
                                                <ImageList images={ product.images ? chunk(4, product.images) : [[]] } />
                                            </div>
                                            <a onClick={ () => beginUpload() } style={{ margin: '10px 0px', cursor: 'pointer'}}>Click to add images <i className="fa fa-plus"></i></a>
                                        </div>
                                        </div>
                                        <div className="col-md-2">
                                            <label>Trending</label> <br /> 
                                            <select id="trending" onChange={handleChange}>
                                                <option>Choose</option>
                                                <option for="Yes">Yes</option>
                                                <option for="No">No</option>
                                            </select>
                                            <label>Recommended</label>
                                            <select id="recommended" onChange={handleChange}>
                                                <option>Choose</option>
                                                <option for="Yes">Yes</option>
                                                <option for="No">No</option>
                                            </select> 
                                                </div>
                                    </div>
                                    <input type="submit" value="Publish" className="btn btn-success" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

}

const mapStateToProps = (state) => (
    {
        token: state.auth.token
    }
);

export default connect(mapStateToProps)(AddProduct);
