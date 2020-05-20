import React, { useState, useEffect } from 'react';
import { Helmet }  from 'react-helmet';
import SideNav from '../inc/SideNav';
import { toast } from 'react-toastify';
import Navbar from '../inc/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Categories = (props) => {

    const [categoryName, setCategoryName] = useState({categoryName: ''});
    const [category, setCategory] = useState({categories: []});

    const addCategory = async (event) => {
        event.preventDefault(); 
        setCategory({...category,categories:[...category.categories, categoryName.categoryName] });
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/categories/create-category?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/categories/create-category?token=' + props.token;
        }  
        let response = await fetch(url, {method: 'POST', headers: {'Content-Type' : 'application/json'},
         body: JSON.stringify({categoryName: categoryName.categoryName})});
         let data = await response.json();

         if(data.CategoryCreated === true) {
             setCategoryName({...categoryName, categoryName: ''});
             added();
         } else {
            errorAdding();
         }
    }

    const getCategories = async () => {
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/categories/product-categories?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/categories/product-categories?token=' + props.token;
        }  
        
        let response = await fetch(url);
        let data = await response.json();

        if(data) {
            let categoryData = [];
            data.map((value) => {
                categoryData.push(value.category_name);
            }); 
            setCategory({...category, categories: categoryData})
        }

    }

    const deleteCategory = async (event) => {
        let categoryToDelete = category.categories.filter((category) => (category === event.target.getAttribute('value')));
        let updatedList = category.categories.filter((category) => (category !== event.target.getAttribute('value')));
        setCategory({...category, categories: updatedList});
        let url = '';
        if(process.env.NODE_ENV === 'development') {
            url = process.env.REACT_APP_DEVELOPMENT_API_URL + '/api/v1/categories/delete-category?token=' + props.token;
        } else {
            url = process.env.REACT_APP_PRODUCTION_API_URL + '/api/v1/categories/delete-category?token=' + props.token;
        }  
      
        let response = await fetch(url, {method: 'DELETE',
         headers:{'Content-Type': 'application/json'}, 
         body: JSON.stringify({categoryName: categoryToDelete.pop()})});
         let data = await response.json();

         if(data.CategoryDeleted === true) {
             deleted();
         } else {
             errorDeleting();
         }
    }

    const handleChange = (event) => {
        setCategoryName({...categoryName, categoryName: event.target.value});
    }

    const deleted = () =>  toast.success("Category Deleted!", {
        position: toast.POSITION.TOP_LEFT
    });

    const added = () =>  toast.success("Category Added!", {
        position: toast.POSITION.TOP_LEFT
    });

    const errorDeleting = () =>  toast.warning("Error! Deleting Category!", {
        position: toast.POSITION.TOP_LEFT
    });

    const errorAdding = () =>  toast.warning("Error! Adding Category!", {
        position: toast.POSITION.TOP_LEFT
    });

    useEffect(() => {
        getCategories();
    }, []);

    // if(!props.token) return <Redirect to='/login'></Redirect>

    return (
        <div>
             <Navbar />
             <Helmet>
                <title>Categories | eBaaba Dashboard</title>
            </Helmet>
            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                   <h2>Categories</h2>
                </div>
            </div>
            <div className="categories">
                <div className="categories-inner">
                <div className="row">
                    <div className="col-md-4 left">
                        <SideNav />
                    </div>
                    <div className="col-md-8 right">
                        <h2>Category List</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <form onSubmit={ addCategory } className="categories-form">
                                    <input type="text" name="category-name" className="category-name" id="categoryName" 
                                    value={categoryName.categoryName} onChange={ handleChange } required/>
                                    <input type="submit" className="category-submit" value="Add To Category" />
                                </form>
                            </div>
                            <div className="col-md-6">
                                <ul className="categories-list">
                                   { category.categories.map((value) => {
                                       return (
                                           <>
                                            <li><i className="fa fa-trash" value={value} onClick={ deleteCategory }></i>{ value } </li>
                                           </>
                                       )
                                   })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        token: state.auth.token
    }
);

export default connect(mapStateToProps)(Categories)
