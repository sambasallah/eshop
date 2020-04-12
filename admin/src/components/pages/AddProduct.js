import React, {useEffect, useState} from 'react';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { openUploadWidget } from "../utils/CloudinaryService";
import { CloudinaryContext } from 'cloudinary-react';
import { slug, chunk } from '../utils/UtilityFunctions';
import { Error, Success } from '../alerts/ProductsAlerts';


const AddProduct = () => {

  const [product, setProduct] = useState([{formSubmitted: false}]);
  const [category, setCategory] = useState([]);


  const ImageList = (prop) => {
   
    let images = prop.images;

    const deleteImage = (image) => {
       let allPictures =  [].concat.apply([], images)
       let updatedArray = allPictures.filter( img => img !== image);
       setProduct(Object.assign({}, product, { images : updatedArray }));        
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

  // Handle saving and updating form
  const saveForm = async (event) => {
    event.preventDefault();
    let slugName = slug(product.productName);
    setProduct(Object.assign(product, { slug: slugName }));

    if(product.id === undefined) {
        let url = 'http://localhost:8000/api/v1/product';
        let response = await fetch(url, {method : 'POST', headers : {'Content-Type': 'application/json'}, body : JSON.stringify(product) });
        let data = await response.json();
        if(data) {
            setProduct(Object.assign({}, product, { id: data.ID, created: 'Product Created'}));
        }else {
            setProduct(Object.assign({}, product, { id: data.ID, notCreated: 'Product Not Created', formSubmitted: true }));
        }
    } else {
        let url = 'http://localhost:8000/api/v1/product/' + product.id;
        let response = await fetch(url, {method : 'PUT', headers : {'Content-Type': 'application/json'}, body : JSON.stringify(product) });
        let data = await response.json();
        if(data) {
            setProduct(Object.assign({}, product, { updated: 'Product Updated', imageAdded: false }));
            console.log(product)
            console.log(data);
        } else {
            setProduct(Object.assign({}, product, { notUpdated: 'Product Not Updated', formSubmitted: true, imageAdded: false }));
        }
    }

  }

  const getCategories = async () => {
    let response = await fetch('http://localhost:8000/api/v1/product/categories');
    let data = await response.json();
    let arr = [];

    data.map((value, index) => {
        arr[index] = value;
    }); 

    setCategory(Object.assign([],category, arr));
}

  useEffect(() => {
    getCategories();
  },[]);

  const handleChange = (event) => {
    setProduct(Object.assign({}, product, { [event.target.id] : event.target.value }))
  }
  
  const handleDescription = (event, editor) => {
        const data = editor.getData();
        setProduct(Object.assign({}, product, { description : data }));
  }

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "ebaaba",
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
          setProduct(Object.assign({}, product, { images: updatedImages, imageAdded: true }));

        } else if(photos.event === 'queues-end') {
          let files = photos.info.files;
          let data = [];
          for(let i = 0; i < files.length; i++) {
            data[i] = photos.info.files[i].uploadInfo.secure_url;
          }
         setProduct(Object.assign({},product, { images: data }));
         console.log(product);
        }
      } else {
        console.log(error);
      }
    });
  }



    return (
        <div>
            <Helmet>
                <title>Add Product | eBaaba Gambia</title>
            </Helmet>

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
                            <h2>Product Information</h2>
                            <form onSubmit={ saveForm }>
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
                                        <input type="number" name="quantity" className="form-control" id="quantity" placeholder="Qty" onChange={ handleChange } />
                                    </div>  

                                    <div className="col-md-7">
                                    <div className="form-group">
                                        <label>Images</label>
                                        <div className="row">
                                            <ImageList images={ product.images ? chunk(4, product.images) : [[]] } />
                                        </div>
                                        <a onClick={ () => beginUpload() } style={{ margin: '10px 0px', cursor: 'pointer'}}>Click to add images <i className="fa fa-plus"></i></a>
                                    </div>
                                    
                                    </div>
                                </div>

                                <input type="submit" value="Publish" className="btn btn-success" />
                            </form>
                            { product.created || product.updated ? ( <Success /> ) : (<></>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
