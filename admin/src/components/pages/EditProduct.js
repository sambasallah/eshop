import React, { useState, useEffect } from 'react';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { openUploadWidget } from "../utils/CloudinaryService";
import { slug, chunk } from '../utils/UtilityFunctions';
import { Error, Success } from '../alerts/ProductsAlerts';
import { useLocation } from 'react-router-dom';

const EditProduct = () => {

    const [edit, setEdit] = useState([{}]);
    const [category, setCategory] = useState([]);

    let location = useLocation();
    let path = location.pathname.substr(1);
    let pathArray = path.split('/');

    
    const ImageList = (prop) => {
   
        let images = prop.images;
    
        const deleteImage = (image) => {
           let allPictures =  [].concat.apply([], images)
           let updatedArray = allPictures.filter( img => img !== image);
           setEdit(Object.assign({}, edit, { images : updatedArray }));        
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
    let slugName = slug(edit.productName);
    setEdit(Object.assign(edit, { slug: slugName }));

    if(edit.id === undefined) {
        let url = 'http://localhost:8000/api/v1/product';
        let response = await fetch(url, {method : 'POST', headers : {'Content-Type': 'application/json'}, body : JSON.stringify(edit) });
        let data = await response.json();
        if(data) {
            setEdit(Object.assign({}, edit, { id: data.ID, created: 'Product Created'}));
        }else {
            setEdit(Object.assign({}, edit, { id: data.ID, notCreated: 'Product Not Created', formSubmitted: true }));
        }
    } else {
        let url = 'http://localhost:8000/api/v1/product/' + edit.id;
        let response = await fetch(url, {method : 'PUT', headers : {'Content-Type': 'application/json'}, body : JSON.stringify(edit) });
        let data = await response.json();
        if(data) {
            setEdit(Object.assign({}, edit, { updated: 'Product Updated', imageAdded: false }));
            console.log(edit)
            console.log(data);
        } else {
            setEdit(Object.assign({}, edit, { notUpdated: 'Product Not Updated', formSubmitted: true, imageAdded: false }));
        }
    }

  }

  const getProductData = async (slug) => {
    if(slug.length > 0) {
      let url = 'http://localhost:8000/api/v1/product/'+ slug;
        let data = await fetch(url)
         .then((response) => {
             return response.json();
         })
         .catch((error) => {
             if(error) {
                 setEdit(null);
             }
         })
         
        if(data) {
          let arr = {};
          data.map((value, index) => {
            arr.productName = value.name;
            arr.regularPrice = value.regular_price;
            arr.salePrice = value.sale_price;
            arr.categoryID = value.category_id;
            arr.quantity = value.quantity;
            arr.url = JSON.parse(value.url);
            arr.description = value.description;
          });
          setEdit(Object.assign({}, edit, arr));
        }
        }  else { 
            console.log('Slug not set');
        } 
    } 

    const setEditing = () => {
        getProductData(pathArray[1]);
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
    
    
  const handleChange = (event) => {
    setEdit(Object.assign({}, edit, { [event.target.id] : event.target.value }))
  }
  
  const handleDescription = (event, editor) => {
        let data = editor.getData();
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
        if(photos.event === 'queues-end' && edit.images){
          let files = photos.info.files;
          let data = [];
          for(let i = 0; i < files.length; i++) {
            data[i] = photos.info.files[i].uploadInfo.secure_url;
          }
          for(let i = 0; i < data.length; i++) {
            edit.images.push(data[i]);
          }
          let updatedImages = edit.images;
          setEdit(Object.assign({}, edit, { images: updatedImages, imageAdded: true }));

        } else if(photos.event === 'queues-end') {
          let files = photos.info.files;
          let data = [];
          for(let i = 0; i < files.length; i++) {
            data[i] = photos.info.files[i].uploadInfo.secure_url;
          }
         setEdit(Object.assign({},edit, { images: data }));
         console.log(edit);
        }
      } else {
        console.log(error);
      }
    });
  }

    useEffect(() => {
        setEditing();
        getCategories();
    },[]);

    return (
        <div>
        <Helmet title={ edit.productName } />
        <div className="breadcrumb">
            <div className="breadcrumb-inner">
                <h2>Edit - { edit.productName } </h2>
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
                                <input type="text" placeholder="Product Name" onChange={ handleChange } value={ edit.productName } id="productName" className="form-control" required/>
                            </div>
                            <div className="form-group">
                               <div className="row">
                                   <div className="col-md-6">
                                       <label>Regular Price (D)</label>
                                       <input type="text" placeholder="Regular Price" onChange={ handleChange } value={edit.regularPrice} id="regularPrice"  className="form-control" required/>
                                   </div>
                                   <div className="col-md-6">
                                        <label>Sale Price (D)</label>
                                        <input type="text" placeholder="Sale Price" onChange={ handleChange } value={edit.salePrice} id="salePrice"  className="form-control" required/>
                                   </div>
                               </div>
                            </div>
                            <div className="form-group">
                                <label>Product Description</label>
                                {/* <textarea placeholder="Product Description" className="form-control" rows="5"></textarea> */}
                                <CKEditor editor={ ClassicEditor } 
                                onChange={ handleDescription } data={edit.description} />    
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                <div className="form-group">
                                    <select className="form-control"  id="categoryID" value={ edit.categoryID } onChange={ handleChange }>
                                    { category.map((value, index) =>
                                    <option value={value.id}> {value.category_name} </option>) }
                                    </select>
                                 </div>         
                                </div>
                               
                                <div className="col-md-2">
                                    <input type="number" name="quantity" className="form-control" id="quantity" placeholder="Qty" value={edit.quantity} onChange={ handleChange } />
                                </div>  

                                <div className="col-md-7">
                                <div className="form-group">
                                    <label>Images</label>
                                    <div className="row">
                                        <ImageList images={ edit.url ? chunk(4, edit.url) : [[]] } />
                                    </div>
                                    <a onClick={ () => beginUpload() } style={{ margin: '10px 0px', cursor: 'pointer'}}>Click to add images <i className="fa fa-plus"></i></a>
                                </div>
                                </div>
                            </div>

                            <input type="submit" value="Publish" className="btn btn-success" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EditProduct
