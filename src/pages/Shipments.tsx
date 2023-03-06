import React, { useState } from "react";
import Modal from "../components/Modal";
import "../assets/Style.css"
import Header from "../components/Header";
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
interface HeaderProps {
  onMenuClick: () => void;
}

const Shipments: React.FC<Props> = ({ shipments }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);

  const filteredShipments = shipments.filter((shipment) =>
    shipment.shipmentName.toLowerCase().includes(searchTerm.toLowerCase())
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
    <Header onMenuClick={handleMenuClick}/>
    <div className="main-body">
      <input
        type="text"
        placeholder="Search by shipment name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
              <td>{shipment.status}</td>
              <td>{shipment.value}</td>
              <td>
                <button onClick={() => handleView(shipment)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <ul>
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button onClick={() => paginate(pageNumber)}>{pageNumber}</button>
            </li>
          ))}
        </ul>
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
    </>
  );
};

export default Shipments;