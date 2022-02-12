import React from "react";
import Customer from "./Customer";

const Customers = ({ customers, name }) => {
  return (
    <section>
      <div className="title">
        <h2>Welcome {name}</h2>
        <div className="underline"></div>
      </div>
      <div>
        <h3>Customer List</h3>
        {customers.map((customer) => {
          return <Customer key={customer.id} {...customer} />;
        })}
      </div>
    </section>
  );
};

export default Customers;
