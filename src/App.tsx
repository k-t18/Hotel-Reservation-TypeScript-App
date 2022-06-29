import React, { FC, useState } from 'react';

import './App.css';
import ReservationCard from './Components/ReservationCard';
import CustomerCard from './Components/CustomerCard';
import MenuCard from './Components/MenuCard';
const App: FC = () => {
  const [activeCustomer, setactiveCustomer] = useState("");
  const [category, setcategory] = useState<string>("")

  function getVals(s: string, c: string) {
    setactiveCustomer(s);
    setcategory(c);

  }
  return (
    <div className="App">
      <div className="container">

        <ReservationCard />
        <CustomerCard setvals={getVals} />
        <MenuCard customer={activeCustomer} categ={category} />


      </div>
    </div>
  );
}

export default App;
