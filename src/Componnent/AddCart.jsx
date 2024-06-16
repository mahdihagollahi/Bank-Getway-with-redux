import React, { useState, useContext } from "react";
import { useDispatch,useSelector } from "react-redux";
import { IoCard } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import {addCard  } from '../Redux/cardSlice'
import { setImageCart, resetImageBank  } from '../Redux/bankSlice';

// import { ProfileContext } from "../App";

export default function AddCard() {
  const dispatch = useDispatch();
  // const {
    // handleAddCard,
    // handleBankImage,
    // imgBank,

//     handleAddCard,
// bankImage,
// imgBank
  // } = useContext(ProfileContext);

  const [number, setNumber] = useState("");
  const [cvv2, setCvv2] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [inventory, setInventory] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    const sanitizedValue = value.replace(/\s+/g, "");
    const formattedValue = sanitizedValue.replace(/(.{4})/g, "$1 ");
    dispatch(setNumber(formattedValue.trim()));
  };

  const handleAddCard = () => {
    dispatch(addCard({ name, number, password, cvv2, year, month, inventory }));
    
  
    setNumber("")
  setCvv2("")
  setYear("")
  setMonth("")
  setName("")
  setPassword("")
  setInventory("")
  };

  

 

  
  const imgBank = useSelector((state) => state.Bank.ImgBank);

  const bankImage = (e) => {
    const value = e.target.value.slice(0,4);
    console.log("Bank code:", value);
  switch(value){
    case "6037":
    dispatch(setImageCart('src/assets/Img/saderat.png'));
    break;
  case "6219":
    dispatch(setImageCart('src/assets/Img/Blue.png'));
    break;
  case "5029":
    dispatch(setImageCart('src/assets/Img/Dey.png'));
    break;
    case "2071":
        dispatch(setImageCart("src/assets/Img/Toseye.png"));
        break;
  
      case "6276":
        dispatch(setImageCart("src/assets/Img/Toseye.png"));
        break;
  
      case "5022":
        dispatch(setImageCart("src/assets/Img/Pasargard.png"));
        break;
  
      case "5028":
        dispatch(setImageCart("src/assets/Img/Shahr.png"));
        break;
  
      case "5029":
        dispatch(setImageCart("src/assets/Img/Taavon.png"));
        break;
  
      case "5029":
        dispatch(setImageCart("src/assets/Img/Karafarin-Bank-logo.png.webp"));
        break;
  
      case "5054":
        dispatch(setImageCart("src/assets/Img/gardeshgari.png"));
        break;
  
      case "5057":
        dispatch(setImageCart("src/assets/Img/iranZamin.png"));
        break;
  
      case "5058":
        dispatch(setImageCart("src/assets/Img/Kosar.png"));
        break;
  
      case "5892":
        dispatch(setImageCart("src/assets/Img/Sepah.png"));
        break;
  
      case "5894":
        dispatch(setImageCart("src/assets/Img/Refah.png"));
        break;
  
      case "6037":
        dispatch(setImageCart("src/assets/Img/Keshvarzi.png"));
        break;
  
      case "6392":
        dispatch(setImageCart("src/assets/Img/Keshvarzi.png"));
        break;
  
      case "6037":
        dispatch(setImageCart("src/assets/Img/Meli.png"));
        break;
  
      case "6063":
        dispatch(setImageCart("src/assets/Img/Mehr.png"));
        break;
  
      
      
  
      case "6104":
        dispatch(setImageCart("src/assets/Img/Melat.png"));
        break;
  
      case "9919":
        dispatch(setImageCart("src/assets/Img/Melat.png"));
        break;
  
      case "62192":
        dispatch(setImageCart("src/assets/Img/Saman.png"));
        break;
  
      case "6221":
        dispatch(setImageCart("src/assets/Img/Parsian-removebg-preview.png"));
        break;
  
      case "6391":
        dispatch(setImageCart("src/assets/Img/Parsian-removebg-preview.png"));
        break;
  
      case "6278":
        dispatch(setImageCart("src/assets/Img/Parsian-removebg-preview.png"));
        break;
  
      case "6273":
        dispatch(setImageCart("src/assets/Img/Ansar.png"));
        break;
  
      case "6274":
        dispatch(setImageCart("src/assets/Img/Noveen.png"));
        break;
      case "6277":
        dispatch(setImageCart("src/assets/Img/Post.svg"));
        break;
  
      case "6279":
        dispatch(setImageCart("src/assets/Img/Maadan.png"));
        break;
  
      case "6280":
        dispatch(setImageCart("src/assets/Img/Maskan.jpeg"));
        break;
  
      case "6281":
        dispatch(setImageCart("src/assets/Img/Etebary.png"));
        break;
  
      case "6362":
        dispatch(setImageCart("src/assets/Img/Ayandeh.png"));
        break;
  
      case "6367":
        dispatch(setImageCart("src/assets/Img/Markazi.png"));
        break;
  
      case "6369":
        dispatch(setImageCart("src/assets/Img/Hekmat.png"));
        break;
  
      case "6393":
        dispatch(setImageCart("src/assets/Img/Sina.png"));
        break;
  
      case "63937":
        dispatch(setImageCart("src/assets/Img/Mehr-eghtesad.png"));
        break;
      case "6395":
        dispatch(setImageCart("src/assets/Img/Ghavamin.png"));
        break;
      case "6396":
        dispatch(setImageCart("src/assets/Img/Sarmaye.png"));
        break;
  default:
    dispatch(resetImageBank())
    break;
  }
}

  return (
    <div className="container">
      <div className="container w-[69%] h-auto ml-60 text-center mr-96 align-center justify-center mt-20 mb-20 text-white p-10 px-10 border-solid border-2 rounded-2xl bg-white">
        <div>
          <div className="flex px-10">
            <IoCard className="w-7 h-7 bg-blue-500 text-white rounded-full p-1 mr-4" />
            <h2 className="text-2xl text-black">Acoin<span className="text-black opacity-70">Pay</span></h2>
          </div>
          <div className="flex gap-96 mt-10 text-black">
            <div className="ml-[40px]">
              <h2 className="text-bold text-lg mr-[143px]">CardNumber</h2>
              <p className="text-xs opacity-50">Enter the 16-digit card number on the Card</p>
            </div>
            <a className="flex cursor-pointer justify-between text-black ml-[10px]">
              <FaRegEdit className="mt-1 text-blue-500 mr-2" />
              <p>Edit</p>
            </a>
          </div>
          <div>
            <div className="my-5 -ml-[60px] relative">
              <input
                style={{ color: "black", marginRight: "170px" }}
                value={number}
                onChange={
                  (e) => {
                    bankImage(e);
                 
                  handleChange(e);
                  }
               
              }
                className="text-black bg-gray-100 text-center mr-[170px] border border-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-[100px] block w-[81%] p-2.5 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="2412   -    7512   -   3412   -   3456"
                required
                maxLength="19"
              />
              {imgBank && (
                <img className="w-[5%] absolute top-[2%] left-[6%]" src={imgBank} alt="Bank Logo" />
              )}
            </div>
            <div className="flex mt-10 text-right text-black">
              <div>
                <h2 className="text-bold text-lg ml-[40px] mr-[128px]">CVV Number</h2>
                <p className="text-xs opacity-50">Enter the 3 or 4 digit number on the Card</p>
              </div>
              <div className="ml-20 mt-3">
                <input
                  style={{ color: "black" }}
                  value={cvv2}
                  onChange={(e) => 
                    setCvv2(e.target.value)
                
                  }
                  placeholder="5643"
                  type="password"
                  maxLength="4"
                  className="text-center text-white bg-white px-[113px] py-3 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                />
              </div>
            </div>
            <div className="flex mt-10 text-right text-black">
            <div className="ml-[40px]">
            <h2 className="text-bold text-lg mr-[111px]">Expiry Date</h2>
            <p className="text-xs opacity-50 dark:border-gray-200 mr-[43px]">
            {" "}
                Enter the expiration the card{" "}
              </p>
              </div>
              <div className="flex gap-2 ml-28 text-black">
                <input
                  style={{ color: "black" }}
                  value={year}
                  onChange={(e) => 
                    
                    setYear(e.target.value)
                  
                  
                  }
                  placeholder="Y"
                  type="text"
                  maxLength="2"
                  className="text-center text-black bg-[#ffff] px-3 py-3 dark:focus:ring-blue-500 dark:focus:border-blue-500 border dark:border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                />
                <span className="mt-2 text-bold">/</span>
                <input
                  style={{ color: "black" }}
                  value={month}
                  onChange={(e) => 
                    
                    setMonth(e.target.value)

                    
                  
                  }
                  placeholder="M"
                  maxLength="2"
                  type="text"
                  className="text-center text-black bg-[#ffff] px-3 py-3 dark:focus:ring-blue-500 dark:focus:border-blue-500 border dark:border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
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
                  value={name}
                  onChange={(e) => 
                    setName(e.target.value)
                   
                  }
                  type="text"
                  maxLength="8"
                  className="text-center text-black bg-white px-[115px] py-3 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                />
              </div>
            </div>
            <div className="flex mt-10 text-black">
              <div className="ml-[40px]">
                <h2 className="text-bold text-lg mr-[124px]">Password</h2>
                <p className="text-xs opacity-50">Please enter your dynamic password</p>
              </div>
              <div className="flex gap-2 ml-[113px]">
                <input
                  style={{ color: "black" }}
                  value={password}
                  onChange={(e) => 
                    
                    setPassword(e.target.value)

                   
                  
                  }
                  placeholder="xxxx"
                  type="password"
                  maxLength="4"
                  className="text-center text-black bg-white px-[115px] py-3 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                />
              </div>
            </div>
            <div className="flex mt-10 text-black">
              <div className="ml-[40px]">
                <h2 className="text-bold text-lg mr-[120px]">Inventory</h2>
                <p className="text-xs opacity-50 mr-11">Please enter your inventory</p>
              </div>
              <div className="flex gap-2 ml-[113px]">
                <input
                  value={inventory}
                  onChange={(e) => 
                    
                    setInventory(e.target.value)

                   
                  
                  }
                  placeholder="xxxxxx"
                  type="number"
                  maxLength="12"
                  style={{ color: "black" }}
                  className="text-black text-center ml-3 bg-white px-[115px] py-3 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-gray-300 text-sm rounded-lg block"
                />
              </div>
            </div>
            <div className="mt-10 ml-[65px]">
              <button
                type="submit"
                onClick={
                  () => handleAddCard(name, number, password, cvv2, year, month, inventory)
                  
                }
                className="text-blue-700 w-9/12 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-80 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >AddCard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



