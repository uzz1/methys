import React from 'react'
import Table from '../components/Table'
import shippingData from '../data/table-data.json'
import Header from "../components/Header";

const Shipments = () => {
  return (
    <div className='page-body'>
      <Header pageName={"Shipments"}/>
      <Table shipments={shippingData}  />
    </div>
  )
}

export default Shipments