import React from 'react'
import hand from "../assiet/Image/hand.svg"
export default function Navbar() {

    return (
        <>
         <div className="container-fluid mt-2">
         <div className='row'>
            <div className='col-lg-2 col-4'>
                <p className='background1  fs-2 text-light p-3'><span className="material-symbols-outlined fs-3">hexagon</span>Dashboard</p>
            </div>
            <div className='col-lg-10 col-8'>


                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                   
                        <div className="navbar-brand"><p>Hello Lalit <img src={hand} width="30px" alt="" />
                        </p></div>
                        <form className="d-flex ms-auto me-auto" role="search">
                            <button><span className="material-symbols-outlined">search</span></button>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    

                </nav></div>
            </div>

        </div>

        </>
    )
}
