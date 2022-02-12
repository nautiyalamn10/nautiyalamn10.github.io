import React, { useState } from "react";
import Loading from "./Loading";
import Customers from "./Customers";
const url = "http://jsonplaceholder.typicode.com/users";
function App() {
  const [isLoading, setIsLoading] = useState(true); //when loading show form

  const [uname, setName] = useState("");
  const [customer, setCustomer] = useState([]);
  const fetchDetails = async (name) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const customers = await response.json();
      setCustomer(customers);
      setName(name);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error();
    }
  };
  // useEffect(() => {
  //   fetchDetails();
  // }, []);
  if (isLoading) {
    return (
      <main>
        <Loading fetchDetail={fetchDetails} />
      </main>
    );
  }

  return (
    <main>
      <Customers customers={customer} name={uname} />
    </main>
  );
}

export default App;
