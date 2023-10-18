import React from 'react'
import Leftnav from './Leftnav'
import pic from "../assiet/Image/1.png"
import pic1 from "../assiet/Image/2.jpg"
import pic2 from "../assiet/Image/3.png"
import pic3 from "../assiet/Image/4.png"
import Chart from "./chart1"
import DatabaseDiscussionPieChart from './Piechart';

const data = [
  { label: 'old customers', value: 30 },
  { label: 'new customers', value: 60 }
];
export default function Home() {
  
  return (
    <>
      <div className="container-fluid home">
        <div className="row">
          <div className='col-lg-2 col-4'>
            <Leftnav />
          </div>
          <div className='col-lg-10 col-8 '>
            <div className="card1">
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={pic} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text"><small className="text-body-secondary">Earning</small></p>
                      <h5 className="card-title">$198k</h5>
                      <p className="card-text">37.8% This Month </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={pic1} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text"><small className="text-body-secondary">Orders</small></p>
                      <h5 className="card-title">$2.4k</h5>
                      <p className="card-text">2% This Month </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={pic2} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text"><small className="text-body-secondary">Balance</small></p>
                      <h5 className="card-title">$2.4k</h5>
                      <p className="card-text">2% This Month </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={pic3} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text"><small className="text-body-secondary">Total Sales</small></p>
                      <h5 className="card-title">$89k</h5>
                      <p className="card-text">11% This Month </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="row">
            <div className="col-8">
              <div className="chart">
                <Chart />
              </div>
            </div>
            <div className="col-4">
              <div className="App1">
                <h3 className='text-center'>Customers</h3>
                <DatabaseDiscussionPieChart data={data} />

              </div> </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
