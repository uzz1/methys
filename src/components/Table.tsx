import React, { useState } from "react";
import Modal from "../components/Modal";
import "../assets/Style.css"
import Header from "./Header";
import RightArrow from "../assets/icons/rightArrow.svg"
import LeftArrow from "../assets/icons/leftArrow.svg"
interface Shipment {
  shipmentName: string;
  clientName: string;
  entryDate: string;
  shipmentDate: string;
  status: string;
  value: number;
}

interface Props {
  shipments: Shipment[];
}


const Table: React.FC<Props> = ({ shipments }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);

  const filteredShipments = shipments.filter((shipment) =>
  shipment.shipmentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  shipment.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  shipment.entryDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
  shipment.shipmentDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
  shipment.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
  shipment.value.toString().includes(searchTerm)
);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShipments = filteredShipments.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredShipments.length / itemsPerPage);
  const pageNumbers = Array.from(Array(totalPages), (_, i) => i + 1);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleView = (shipment: Shipment) => setSelectedShipment(shipment);

  const handleModalClose = () => setSelectedShipment(null);

  function handleMenuClick() {
    const popupMenu = document.getElementById('popup-menu');
    if (popupMenu) {
      popupMenu.style.display = popupMenu.style.display === 'block' ? 'none' : 'block';
    }
  }

  return (
    <>
    <div className="main-body">
      <div className="table-body">
      <div className="search-div">
      <input
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Shipment Name</th>
            <th>Client Name</th>
            <th>Entry Date</th>
            <th>Shipment Date</th>
            <th>Status</th>
            <th>Value</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {currentShipments.map((shipment) => (
            <tr key={shipment.shipmentName}>
              <td>{shipment.shipmentName}</td>
              <td>{shipment.clientName}</td>
              <td>{shipment.entryDate}</td>
              <td>{shipment.shipmentDate}</td>
              <td>
                <button className={`status-button ${shipment.status.replace(/\s/g, "")}`}>{shipment.status}</button>
              </td>
              <td>{shipment.value}</td>
              <td>
                <button onClick={() => handleView(shipment)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    

<div className="pagination">
  <button  
   
  onClick={() => paginate(currentPage - 1)}
 disabled={currentPage === 1}>
    {/* &#8249; */}
    <img className="arrow-button"   src={LeftArrow} alt="Left Arrow"/>
  </button>
  {pageNumbers.map((pageNumber) => (
    <button
      key={pageNumber}
      className={currentPage === pageNumber ? "active" : ""}
      onClick={() => paginate(pageNumber)}
    >
      {pageNumber}
    </button>
  ))}
  <button
    
    onClick={() => paginate(currentPage + 1)}
    disabled={currentPage === pageNumbers.length}
  >
    {/* &#8250; */}
    <img className="arrow-button" src={RightArrow} alt="Right Arrow"/>
  </button>
</div>

      {selectedShipment && (
        <Modal onClose={handleModalClose}>
          <div>
            <h2>{selectedShipment.shipmentName}</h2>
            <p>Client Name: {selectedShipment.clientName}</p>
            <p>Entry Date: {selectedShipment.entryDate}</p>
            <p>Shipment Date: {selectedShipment.shipmentDate}</p>
            <p>Status: {selectedShipment.status}</p>
            <p>Value: {selectedShipment.value}</p>
          </div>
        </Modal>
      )}
    </div>
    </div>
    </>
  );
};

export default Table;