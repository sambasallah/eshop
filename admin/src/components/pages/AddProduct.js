import React, {useEffect, useState} from 'react';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import {useDropzone} from 'react-dropzone';


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

const AddProduct = () => {

    const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const removeImage = (img) => {
      const newState = files.filter(image => img !== image.name );
      setFiles(newState);
  } 

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
     <a onClick={() =>  removeImage(file.name) }><i className="fa fa-trash"></i></a>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

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
                            <form>
                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                   <div className="row">
                                       <div className="col-md-6">
                                           <label>Regular Price</label>
                                           <input type="text" className="form-control"></input>
                                       </div>
                                       <div className="col-md-6">
                                            <label>Discount Price</label>
                                            <input type="text" className="form-control"></input>
                                       </div>
                                   </div>
                                </div>
                                <div className="form-group">
                                    <label>Product Description</label>
                                    <textarea className="form-control" rows="5"></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Images</label>
                                    <section className="container">
                                        <div {...getRootProps({className: 'dropzone'})}>
                                            <input {...getInputProps()} />
                                            <p>Drag 'n' drop some files here, or click to select files</p>
                                        </div>
                                        <aside style={thumbsContainer}>
                                            {thumbs}
                                        </aside>
                                    </section>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
