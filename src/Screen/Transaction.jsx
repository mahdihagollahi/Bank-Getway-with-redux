
import React, { useState, useContext } from "react";
import { IoCard } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { ProfileContext } from "../Componnent/EveryThing";

export default function Card() {
  const selectedCard = useSelector((state) => state.card.selectedCard);
  const { imgBank, handelNegetive } = useContext(ProfileContext);
  const [cartCash, setcartCash] = useState("");

  const disableNumberDefult = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) { 
      setcartCash(newValue);
    }
  };

  return (
    <div className="container">
      <div className="container w-[69%] h-auto ml-60 text-center mr-96 align-center justify-center mt-20 mb-20 text-white p-10 px-10 border-solid border-2 rounded-2xl bg-white ">
        <div className="flex px-10">
          <IoCard className="w-7 h-7 bg-blue-500 text-white rounded-full p-1 mr-4 " />
          <h2 className="text-2xl text-black">
            Acoin
            <span className="text-black opacity-70">Pay</span>
          </h2>
        </div>

        <div className="flex gap-96 mt-10 text-black ">
          <div className="ml-[40px]">
            <h2 className="text-bold text-lg mr-[143px]">CardNumber</h2>
            <p className="text-xs opacity-50">
              Enter the 16-digit card number on the Card
            </p>
          </div>
          <a className="flex justify-between text-black ml-[30px]">
            <FaRegEdit className="mt-1 text-blue-500 mr-2 -ml-[20px]" />
            <p>Edit</p>
          </a>
        </div>

        <form>
          <div className="my-5 -ml-[60px]">
            <input
              style={{ color: "black" }}
              value={selectedCard ? selectedCard.number : ''}
              className="text-black bg-gray-100 text-center mr-[170px] border border-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-[100px] block w-[81%] p-2.5"
              placeholder="2412   -    7512   -   3412   -   3456"
              required
              disabled
            />
            {imgBank && (
              <img className="w-[5%] absolute top-[2%] left-[6%]" src={imgBank} alt="Bank Logo" />
            )}
          </div>

          <div className="flex mt-10 text-right text-black">
            <div>
              <h2 className="text-bold text-lg ml-[40px] mr-[128px]">CVV Number</h2>
              <p className="text-xs opacity-50">
                Enter the 3 or 4 digit number on the Card
              </p>
            </div>
            <div className="ml-20 mt-3">
              <input
                style={{ color: "black" }}
                value={selectedCard ? selectedCard.cvv2 : ''}
                placeholder="5643"
                type="password"
                disabled
                className="text-center text-black bg-white px-[113px] py-3 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex mt-10 text-right text-black">
            <div className="ml-[40px]">
              <h2 className="text-bold text-lg mr-[111px]">Expiry Date</h2>
              <p className="text-xs opacity-50 dark:border-gray-200 mr-[43px]">
                Enter the expiration the card
              </p>
            </div>

            <div className="flex gap-2 ml-28 text-black">
              <input
                style={{ color: "black" }}
                value={selectedCard ? selectedCard.year : ''}
                placeholder="Y"
                type="text"
                disabled
                className="text-center text-black bg-[#ffff] px-3 py-3 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="mt-2 text-bold">/</span>
              <input
                style={{ color: "black" }}
                value={selectedCard ? selectedCard.month : ''}
                placeholder="M"
                type="text"
                disabled
                className="text-center text-black bg-[#ffff] px-3 py-3 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex mt-10 text-black">
            <div className="ml-[40px]">
              <h2 className="text-bold text-lg mr-[120px]">Password</h2>
              <p className="text-xs opacity-50">
                Please enter your dynamic password
              </p>
            </div>
            <div className="flex gap-2 ml-[113px]">
              <input
                style={{ color: "black" }}
                value={selectedCard ? selectedCard.password : ''}
                placeholder="xxxx"
                type="password"
                disabled
                className="text-center text-black bg-white px-[115px] py-3 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex mt-10 text-black">
            <div className="ml-[40px]">
              <h2 className="text-bold text-lg mr-[80px]">Name</h2>
              <p className="text-xs opacity-50">Please enter your name</p>
            </div>
            <div className="flex gap-2 ml-[187px]">
              <input
                style={{ color: "black" }}
                placeholder="Mahdi"
                value={selectedCard ? selectedCard.name : ''}
                disabled
                type="text"
                className="text-center text-black bg-white px-[115px] py-3 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex mt-10 text-black">
            <div className="ml-[40px]">
              <h2 className="text-bold text-lg mr-[120px]">Money</h2>
              <p className="text-xs opacity-50 mr-11">Please enter your money</p>
            </div>
            <div className="flex gap-2 ml-[113px]">
              <input
                value={cartCash}
                onChange={(e) => disableNumberDefult(e)}
                placeholder="xxxxxx"
                type="number"
                maxLength="12"
                style={{ color: "black" }}
                className="text-black text-center ml-6 bg-white px-[115px] py-3 border border-gray-300 text-sm rounded-lg"
              />
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={() => handelNegetive(cartCash, 1)}
              type="button"
              className="text-blue-700 w-9/12 text-bold hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-80 py-2.5 text-center mb-2"
            >
              PayNow
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

