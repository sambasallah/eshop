import React, {useEffect, useState} from 'react';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { openUploadWidget } from "../utils/CloudinaryService";
import { CloudinaryContext } from 'cloudinary-react';
import { slug } from '../utils/UtilityFunctions';

const ProductImages = (prop) => {
    let images = prop.images;
    let count = 0;
    return(
        <>
         { images.map((value, index) => {
             return (
                 <div className="row">
                     { value.map((value, index) => {
                         return (
                            <div className="col-md-3">
                                <img src={ value } width='100%' />
                            </div>
                         )
                     })}
                 </div>
               
             )
         })}
        </>
    )        
}



const AddProduct = () => {

  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  const saveForm = async (event) => {
    event.preventDefault();
    let slugName = slug(product.productName);
    setProduct(Object.assign(product, { slug: slugName }));
    let url = 'http://localhost:8000/api/v1/product';
    let response = await fetch(url, {method : 'POST', headers : {'Content-Type': 'application/json'}, body : JSON.stringify(product) });
    let data = await response.json();
    console.log(data);
    console.log(product);
    
  }

  const getCategories = async () => {
      let response = await fetch('http://localhost:8000/api/v1/categories');
      let data = await response.json();
      let arr = [];
      for(let i = 0; i < data.length; i++) {
         arr[i] = data[i];
      }
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
      uploadPreset: "profile"
    };
  
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if(photos.event === 'queues-end'){
          let files = photos.info.files;
          let data = [];
          for(let i = 0; i < files.length; i++) {
            data[i] = photos.info.files[i].uploadInfo.secure_url;
          }
          setProduct(Object.assign({},product, { images : data }))
        }
      } else {
        console.log(error);
      }
    });
  }

  const chunk = (size, xs) => 
    xs.reduce(
      (segments, _, index) =>
        index % size === 0 
          ? [...segments, xs.slice(index, index + size)] 
          : segments, 
      []
    );



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
                                            <ProductImages images={ product.images ? chunk(4, product.images) : [[]] } />
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <input type="submit" value="Publish" className="btn btn-success" />
                            </form>
                            <button className="btn btn-warning" onClick={ () => beginUpload() } style={{ margin: '10px 0px'}}>Upload Images <i className="fa fa-upload"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
