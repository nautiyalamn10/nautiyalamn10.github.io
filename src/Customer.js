import React, { useState } from "react";

const Customer = ({
  id,
  info,
  name,
  username,
  website,
  email,
  address,
  phone,
  company,
}) => {
  const [readMore, setReadMore] = useState(true);
  const [readMore2, setReadMore2] = useState(true);
  // const [Addresss, setAddress] = useState([]);
  // setAddress(address);
  return (
    <article className="single-customer">
      <footer>
        <div className="customer-info">
          <h3>{name}</h3>
        </div>
        <div className="customer-info">
          <h4>Username</h4>
          <p> {username}</p>
        </div>
        <div className="customer-info">
          <h4>Email</h4>
          <p> {email}</p>
        </div>
        <div className="customer-info">
          <h4>Website</h4>
          <a href="#">{website}</a>
        </div>
        <div className="customer-info">
          <h4>Details : </h4>
        </div>

        {readMore ? (
          <h4>contact number : {phone}</h4>
        ) : (
          <>
            <h4>contact number : {phone}</h4>
            <p>
              Street : {address.street} , City : {address.city}
            </p>
            <p>ZipCode : {address.zipcode}</p>
          </>
        )}
        <button onClick={() => setReadMore(!readMore)}>
          {!readMore ? "Show less" : "  Full Details"}
        </button>
        <div className="customer-info">
          <h4>Company Details : </h4>
        </div>
        {readMore2 ? (
          <h4>Company name : {company.name}</h4>
        ) : (
          <>
            <h4>Company name : {company.name}</h4>
            <h5>{company.catchPhrase}</h5>
            <p>Business : {company.bs}</p>
          </>
        )}
        <button onClick={() => setReadMore2(!readMore2)}>
          {!readMore2 ? "Show less" : "  Full Details"}
        </button>
      </footer>
    </article>
  );
};

export default Customer;
