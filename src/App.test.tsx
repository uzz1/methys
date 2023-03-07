import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Table from "./components/Table";

const shipments = [
  {
    shipmentName: "Shipment 1",
    clientName: "Client 1",
    entryDate: "2022-02-01",
    shipmentDate: "2022-02-10",
    status: "In Transit",
    value: 1000,
  },
  {
    shipmentName: "Shipment 2",
    clientName: "Client 2",
    entryDate: "2022-02-05",
    shipmentDate: "2022-02-12",
    status: "Delivered",
    value: 500,
  },
  {
    shipmentName: "Shipment 3",
    clientName: "Client 3",
    entryDate: "2022-02-10",
    shipmentDate: "2022-02-20",
    status: "Cancelled",
    value: 2000,
  },
];

describe("Table", () => {
  it("renders the table headers", () => {
    render(<Table shipments={shipments} />);
    expect(screen.getByText("Shipment Name")).toBeInTheDocument();
    expect(screen.getByText("Client Name")).toBeInTheDocument();
    expect(screen.getByText("Entry Date")).toBeInTheDocument();
    expect(screen.getByText("Shipment Date")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Value")).toBeInTheDocument();
    expect(screen.getByText("View")).toBeInTheDocument();
  });

  it("renders the correct number of rows", () => {
    render(<Table shipments={shipments} />);
    expect(screen.getAllByRole("row")).toHaveLength(4);
    // The table has a header row and 3 data rows
  });

  it("renders the correct shipment data in the table", () => {
    render(<Table shipments={shipments} />);
    const shipment1 = shipments[0];
    const shipment2 = shipments[1];
    const shipment3 = shipments[2];

    expect(screen.getByText(shipment1.shipmentName)).toBeInTheDocument();
    expect(screen.getByText(shipment1.clientName)).toBeInTheDocument();
    expect(screen.getByText(shipment1.entryDate)).toBeInTheDocument();
    expect(screen.getByText(shipment1.status)).toBeInTheDocument();
    expect(screen.getByText(shipment1.value.toString())).toBeInTheDocument();
    
  });
})