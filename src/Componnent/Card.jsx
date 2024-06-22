


// components/Card.js
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addCard } from '../Redux/cardSlice';

export default function Card({
  name, Number, Password, Cvv2, Year, Month, Inventory, imgBank , SelectCard
}) {
  // const dispatch = useDispatch();

  // const handleAddCard = () => {
  //   dispatch(addCard({
  //     nameCard: name,
  //     numberCard: Number,
  //     passwordCard: Password,
  //     cvv2Card: Cvv2,
  //     yearCard: Year,
  //     monthCard: Month,
  //     inventory: Inventory,
  //     imgBank: imgBank,
  //   }));
  // };
  

  return (
    <div 
      style={{ display: "flex" }} 
      className="w-96 h-56 mb-12 m-auto bg-white rounded-xl relative text-black shadow-2xl transition-transform transform hover:scale-110 hover:shadow-md hover:border-[#fafa]"
      onClick={SelectCard}
    >
      <div className="w-full px-8 absolute top-8">
        <div className="flex justify-between">
          <div>
            <p className="font-light">Name</p>
            <p className="font-medium tracking-widest">{name}</p>
          </div>
          {imgBank && <img className="w-14 h4" src={imgBank} />}
        </div>
        <div className="pt-1">
          <p className="font-light">Card Number</p>
          <p className="font-medium tracking-more-wider">{Number}</p>
        </div>
        <div className="pt-6 pr-6">
          <div className="flex justify-between">
            <div>
              <p className="font-light text-xs">Expiry</p>
              <p className="font-medium tracking-wider text-sm">{Year} / {Month}</p>
            </div>
            <div>
              <p className="font-light text-xs">CVV</p>
              <p className="font-bold tracking-more-wider text-sm">{Cvv2}</p>
            </div>
            <div>
              <p className="font-light text-xs">Password</p>
              <p className="font-bold tracking-more-wider text-sm">{Password}</p>
            </div>
            <div>
              <p className="font-light text-xs">Inventory</p>
              <p className="font-bold tracking-more-wider text-sm">{Inventory}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

