import React from 'react'
import { Link } from 'react-router-dom'
import pic from "../assiet/Image/rohit.jpeg"
export default function Leftnav() {
    return (
        <>
        <div className="background">
            <div className="list-group " >
                <Link to="/admin-home" className=" background fs-5 text-light ms-3  "><span className="material-symbols-outlined">dashboard</span>Dashboard <span className="material-symbols-outlined  mt-1">chevron_right</span></Link>
                <Link to="/admin-user" className=" background fs-5 text-light ms-3  mt-2"><span className="material-symbols-outlined">inventory_2</span>Product <span className="material-symbols-outlined  mt-1">chevron_right</span></Link>
                <Link to="/admin-maincategory" className=" background fs-5 text-light ms-3  mt-2"><span className="material-symbols-outlined">person_pin</span>Customers <span className="material-symbols-outlined  mt-1">chevron_right</span></Link>
                <Link to="/admin-subcategory" className=" background fs-5 text-light ms-3  mt-2"><span className="material-symbols-outlined">payments</span>Income <span className="material-symbols-outlined  mt-1">chevron_right</span></Link>
                <Link to="/admin-Brand" className=" background fs-5 text-light ms-3  mt-2"><span className="material-symbols-outlined">app_promo</span>Promote <span className="material-symbols-outlined  mt-1">chevron_right</span></Link>
                <Link to="/admin-product" className=" background fs-5 text-light ms-3  mt-2"><span className="material-symbols-outlined">live_help</span>Help <span className="material-symbols-outlined  mt-1">chevron_right</span></Link>
                  
                    
                </div>
                <div className="btn-group dropright ">
                    <h3 className='text-light'> <img src={pic} className='rohit' width="30px" alt="" />
                     Lalit Sharma</h3>
                    <button type="button" className="btn text-light background2 dropdown-toggle ms-2 " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       
                    </button>
                    <div className="dropdown-menu"> 
                    </div>
                </div>
                </div>
        </>
    )
}
