import React, { useState, useEffect } from 'react'
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import StoreList from './StoreList';

const Store = (props) => {

    let page_no = props.match.params.page? props.match.params.page : 1;
    const [allProducts, setProducts] = useState({products: []});
    const [pagination, setPagination] = useState({current_page: "", last_page: ""})
    const [search, setSearch] = useState({});
    const [page, setPage] = useState({page: page_no});

    const getAllProducts = async () => {
    
        if(search.searchBox === undefined) {
        let url = 'http://localhost:8000/api/v1/products/p/1?page=' + page.page;
        let response = await fetch(url);
        let data = await response.json();
        if(data) {
            let arr = [];
            data.data.map((value, index) => {        
            let product =  {
                        name: value.name,
                        description: value.description,
                        regular_price: value.regular_price,
                        sale_price: value.sale_price,
                        quantity: value.quantity,
                        slug: value.slug,
                        category_name: value.slug,
                        url: JSON.parse(value.url),
                        last_page: value.last_page,
                        current_page: value.current_page 
                }      
                arr.push(product);
            });
            setProducts({products : arr });
            setPagination({current_page: data.current_page, last_page: data.last_page});
            }
        } else {
            let url = 'http://localhost:8000/api/v1/products/search/' + search.searchBox + '/' + page.page;
            let response = await fetch(url);
            let data = await response.json();
            if(data) {
                let arr = [];
                data.data.map((value, index) => {        
                let product =  {
                            name: value.name,
                            description: value.description,
                            regular_price: value.regular_price,
                            sale_price: value.sale_price,
                            quantity: value.quantity,
                            slug: value.slug,
                            category_name: value.slug,
                            url: JSON.parse(value.url),
                            last_page: value.last_page,
                            current_page: value.current_page 
                    }      
                    arr.push(product);
                });
                setProducts({products : arr});
                setPagination({current_page: data.current_page, last_page: data.last_page});
            }
        }   
    }

    const handleChange = (event) => {
        setSearch(Object.assign({}, search, { [event.target.id]: event.target.value }));
        console.log(search);
    }

    const next = (event) => {
       event.preventDefault();
       let currentPage = Number(page.page) + 1;
       setPage({page: currentPage});
       
    }

    
    const prev = (event) => {
        event.preventDefault();
        let currentPage = Number(page.page) - 1;
        if(currentPage === 0 ) {
            setPage({page: 1});
        } else {
            setPage({page: currentPage});
        }
    }

    useEffect(() => {
        getAllProducts();
    },[search, page]);

    return (
        <div>
             <Helmet>
                <title>Store | eBaaba Dashboard</title>
            </Helmet>
            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                   <h2>Store</h2>
                </div>
            </div>
           <div className="store">
               <div className="store-inner">
                   <div className="row">
                       <div className="col-md-4 left">
                         <SideNav />
                       </div>
                       <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-8">
                                    <h2>Products -  <Link style={{ padding: '8px 20px', fontSize: '17px', backgroundColor : '#33b27b', color: '#fff', borderRadius: '5px'}} to='/add-product'>Add Product</Link></h2>
                                </div>
                                <div className="col-md-4">
                                    <form> 
                                        <div className="form-group">
                                            <input type="text" placeholder="Search" id="searchBox" onChange={ handleChange } className="form-control" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <StoreList allProducts={ allProducts } />
                            { Number(pagination.last_page) > 1? 
                         (
                            <nav aria-label="Products Navigation">
                            <ul class="pagination justify-content-center">
                                <li class= { "page-item " +  (Number(page.page) === 1? "disabled" : "")}>
                                    <a class="page-link" href="" onClick={ prev }>Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="/store">1</a></li>
                                <li class="page-item"><a class="page-link" href="/store/2">2</a></li>
                                { pagination.last_page > 2? (
                                     <li class="page-item"><a class="page-link" href="#">...</a></li>
                                ) : 
                                (
                                   ""
                                )}
                                <li class= { "page-item " +  (Number(page.page) === Number(pagination.last_page)? "disabled" : "")}>
                                    <a class="page-link" href="" onClick={ next }>Next</a>
                                </li>
                            </ul>
                            { console.log(page.page) }
                        </nav>
                         ): ""}
                        </div>
                        
                    </div>
                         
                       </div>
                   </div>
               </div>
                

    );
}

export default Store
