const dispatch = useDispatch;
const imgBank = useSelector((state) => state.Bank.imgBank)

const bankImage = (e) => {
    const value = e.target.value.slice(0,4);
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
  
      case "6104" :
        dispatch(setImageCart("src/assets/Img/Melat.png"));
        break;
  
        case  "6104":
          dispatch(setImageCart("src/assets/Img/Melat.png"));
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



import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setImageCart, resetImageBank } from '../Redux/reducer'














import React, { useState, useContext } from "react";
import { IoCard } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { ProfileContext } from "./EveryThing";
import { useDispatch, useSelector } from "react-redux";
import { setImageCart, resetImageBank } from "../Redux/reducer";

export default function AddCard() {
  const {
    AddCard,
    name,
    setname,
    number,
    setnumber,
    cvv2,
    setcvv2,
    year,
    setyear,
    month,
    setmonth,
    password,
    setpassword,
    setinventory,
    inventory
  } = useContext(ProfileContext);

  const dispatch = useDispatch();
  const ImgBank = useSelector((state) => state.Bank.ImgBank);

  const handleChange = (event) => {
    const { value } = event.target;
    const sanitizedValue = value.replace(/\s+/g, "");
    const formattedValue = sanitizedValue.replace(/(.{4})/g, "$1 ");
    setnumber(formattedValue.trim());
    bankImage(event);
  };

  const bankImage = (e) => {
    const value = e.target.value.slice(0, 4);
    switch(value) {
      case "6037":
        dispatch(setImageCart('path/to/saderat.png'));
        break;
      // سایر موارد ...
      default:
        dispatch(resetImageBank());
        break;
    }
  };

  console.log("ImgBank:", ImgBank); // دیباگ مقدار imgBank

  return (
    <div className="container">
      <div className="container w-[69%] h-auto ml-60 text-center mr-96 align-center justify-center mt-20 mb-20 text-white p-10 px-10 border-solid border-2 rounded-2xl bg-white ">
        <div>
          <div className="flex px-10">
            <IoCard className="w-7 h-7 bg-blue-500 text-white rounded-full p-1 mr-4 " />
            <h2 className="text-2xl text-black"> Acoin<span className=" text-black opacity-70">Pay</span> </h2>
          </div>
          <div className="flex gap-96 mt-10 text-black ">
            <div className="ml-[40px]">
              <h2 className="text-bold text-lg mr-[143px]">CardNumber</h2>
              <p className="text-xs opacity-50"> Enter the 16-digit card number on the Card</p>
            </div>
            <a className="flex cursor-pointer justify-between text-black ml-[30px]">
              <FaRegEdit className="mt-1 text-blue-500 mr-2" />
              <p>Edit</p>
            </a>
          </div>
          <div>
            <div className="my-5 -ml-[60px] relative ">
              <div className=""></div>
              <input
                style={{ color: "black", marginRight: "170px" }}
                value={number}
                onChange={(e) => {
                  handleChange(e);
                }}
                className=" text-black bg-gray-100 text-center mr-[170px] border border-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-[100px] block w-[81%] p-2.5 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="2412 - 7512 - 3412 - 3456"
                required
                maxLength="16"
              />
              {ImgBank && (
                <img
                  className="w-[5%] absolute top-[2%] left-[6%] "
                  src={ImgBank}
                />
              )}
            </div>
            <div className="flex mt-10 text-right text-black">
              <div className="">
                <h2 className="text-bold text-lg ml-[40px] mr-[128px]">CVV Number</h2>
                <p className="text-xs opacity-50"> Enter the 3 or 4 digit number on the Card</p>
              </div>
              <div className="ml-20 mt-3">
                <input
                  style={{ color: "black" }}
                  value={cvv2}
                  onChange={(e) => setcvv2(e.target.value)}
                  placeholder="5643"
                  type="password"
                  maxLength="4"
                  className=" text-center text-white bg-white px-[113px] py-3 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                />
              </div>
            </div>
            <div className="flex mt-10 text-right text-black">
              <div className="ml-[40px]">
                <h2 className="text-bold text-lg mr-[111px]">Expiry Date</h2>
                <p className="text-xs opacity-50 dark:border-gray-200 mr-[43px]"> Enter the expiration the card </p>
              </div>
              <div className="flex gap-2 ml-28 text-black">
                <input
                  style={{ color: "black" }}
                  value={year}
                  onChange={(e) => setyear(e.target.value)}
                  placeholder="Y"
                  type="text"
                  maxLength="2"
                  className=" text-center text-black bg-[#ffff] px-3 py-3 dark:focus:ring-blue-500 dark:focus:border-blue-500 border dark:border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                />
                <span className="mt-2 text-bold ">/</span>
                <input
                  style={{ color: "black" }}
                  value={month}
                  onChange={(e) => setmonth(e.target.value)}
                  placeholder="M"
                  maxLength="2"
                  type="text"
                  className=" text-center text-black bg-[#ffff] px-3 py-3 dark:focus:ring-blue-500 dark:focus:border-blue-500 border dark:border-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                />
              </div>
            </div>

            <div className="flex mt-10 text-black">
              <div className="ml-[40px]">
                <h2 className="text-bold text-lg mr-[80px]">Name</h2>
                <p className="text-xs opacity-50">Please enter u're name</p>
              </div>
              <div className="flex gap-2 ml-[187px]">
                <input
                  style={{ color: "black" }}
                  placeholder="Mahdi"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  type="text"
                  maxLength="8"
                  className=" text-center text-black bg-white px-[115px] py-3 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                />
              </div>
            </div>

            <div className="flex mt-10 text-black">
              <div className="ml-[40px]">
                <h2 className="text-bold text-lg mr-[124px]">Password</h2>
                <p className="text-xs opacity-50"> Please enter u're dynomic password </p>
              </div>
              <div className="flex gap-2 ml-[113px]">
                <input
                  style={{ color: "black" }}
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  placeholder="xxxx"
                  type="password"
                  maxLength="4"
                  className=" text-center text-black bg-white px-[115px] py-3 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
                />
              </div>
            </div>

            <button
              onClick={AddCard}
              className="bg-blue-600 hover:bg-blue-800 active:bg-blue-950 focus:ring-blue-300 mt-10 mb-10 text-white p-2 px-4 rounded-lg "
            >
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}













































// import React, { useState, createContext } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Transaction from "../Screen/Transaction";
// import History from "../Screen/History";
// import InputCard from "./AddCart";
// import Card from "./Card";
// import Navbar from "./Navbar";
// import { setImageCart, resetImageBank  } from '../Redux/bankSlice';
// import { addCard, selectCard, updateInventory } from '../Redux/cardSlice';

// export const ProfileContext = createContext() ; 

// function EveryThing() {
//   const [name, setname] = useState("");
//   const [number, setnumber] = useState("");
//   const [cvv2, setcvv2] = useState("");
//   const [year, setyear] = useState("");
//   const [month, setmonth] = useState("");
//   const [password, setpassword] = useState("");
//   const [inventory, setinventory] = useState("");
//   // const [list, setlist] = useState([]);
//   const [idCart , setidCart]= useState("")

//   const [nameCart, setnameCart] = useState("");
//   const [numberCart, setnumberCart] = useState("");
//   const [cvv2Cart, setcvv2Cart] = useState("");
//   const [yearCart, setyearCart] = useState("");
//   const [monthCart, setmonthCart] = useState("");
//   const [passwordCart, setpasswordCart] = useState("");
//   const [cartCash, setcartCash] = useState(null);
//   // const [historyList , sethistoryList] = useState([])


//   const dispatch = useDispatch();
//   const imgBank = useSelector((state) => state.Bank.ImgBank);
//   const { list, historyList, selectedCard } = useSelector((state) => state.card);
  

//   // const SelectCard = (event) => {
//   //   const foundedCard =list.map((card)=>{
//   //     return card.id === event.id;
//   //   })
//   //   console.log(foundedCard)

//   //   if(foundedCard){
//   //     setnumberCart(event.number),
//   //     setcvv2Cart(event.cvv),
//   //     setpasswordCart(event.password),
//   //     setnameCart(event.name),
//   //     setmonthCart(event.month),
//   //     setyearCart(event.year)
//   //     setidCart(event.id)
//   //   }
    
//   // }


//   const handelSelectCad = useSelector((state) => state.card.selectedCard)

// const SelectCard = (event) =>{
//   const foundedCard = list.find((card) => card.id === event.id);

//     if (foundedCard) {
//       dispatch(selectCard(foundedCard));
//     }


//   // const AddCard = () => {
//   //   dispatch(Cardlist(name,number,password,year,month,inventory ,cvv2))

//   //   setname("")
//   //   setnumber("")
//   //   setcvv2("")
//   //   setyear("")
//   // setmonth("")
//   // setpassword("")
//   //  setinventory("")
//   // }

  

  
// // const AddCard =(name,number,password,cvv,year,month,inventory)=>{
// // const NewCard ={
// //   id:list.length + 1 ,
// //   name,
// //   number,
// //   password,
// //   cvv,
// //   year,
// //   month,
// //   inventory
// // }
// // console.log(NewCard)
// // setlist([...list,NewCard])


// // setname("")
// // setnumber("")
// // setcvv2("")
// // setyear("")
// // setmonth("")
// // setpassword("")
// // setinventory("")

// // }


// const handleAddCard = () => {
//   dispatch(addCard({ name, number, password, cvv2, year, month, inventory }));
//   // setName("");
//   // setNumber("");
//   // setCvv2("");
//   // setYear("");
//   // setMonth("");
//   // setPassword("");
//   // setInventory("");

//   setname("")
// setnumber("")
// setcvv2("")
// setyear("")
// setmonth("")
// setpassword("")
// setinventory("")
// };




// // const negetiveInventory = (negetivePrice , id) => {
// //   const newCash = list.map((card)=>{
// //     return card.id === id && card.inventory >= negetivePrice
// //     ?{...card , inventory: card.inventory - negetivePrice}
// //     :card;
// //   });
 

// //   newCash.map((item)=>{
// //     if(item.id === id){
// //       const Historycal ={...item , p:negetivePrice};
// //       sethistoryList([...historyList , Historycal])
// //       console.log(historyList)

// //     }
// //   })

// //   setlist(newCash);
// //   }


// const negetiveInventory = (negetivePrice, id) => {
//   dispatch(updateInventory({ id, amount: negetivePrice }));
// };


  

 


// const bankImage = (e) => {
//     const value = e.target.value.slice(0,4);
//     console.log("Bank code:", value);
//   switch(value){
//     case "6037":
//     dispatch(setImageCart('src/assets/Img/saderat.png'));
//     break;
//   case "6219":
//     dispatch(setImageCart('src/assets/Img/Blue.png'));
//     break;
//   case "5029":
//     dispatch(setImageCart('src/assets/Img/Dey.png'));
//     break;
//     case "2071":
//         dispatch(setImageCart("src/assets/Img/Toseye.png"));
//         break;
  
//       case "6276":
//         dispatch(setImageCart("src/assets/Img/Toseye.png"));
//         break;
  
//       case "5022":
//         dispatch(setImageCart("src/assets/Img/Pasargard.png"));
//         break;
  
//       case "5028":
//         dispatch(setImageCart("src/assets/Img/Shahr.png"));
//         break;
  
//       case "5029":
//         dispatch(setImageCart("src/assets/Img/Taavon.png"));
//         break;
  
//       case "5029":
//         dispatch(setImageCart("src/assets/Img/Karafarin-Bank-logo.png.webp"));
//         break;
  
//       case "5054":
//         dispatch(setImageCart("src/assets/Img/gardeshgari.png"));
//         break;
  
//       case "5057":
//         dispatch(setImageCart("src/assets/Img/iranZamin.png"));
//         break;
  
//       case "5058":
//         dispatch(setImageCart("src/assets/Img/Kosar.png"));
//         break;
  
//       case "5892":
//         dispatch(setImageCart("src/assets/Img/Sepah.png"));
//         break;
  
//       case "5894":
//         dispatch(setImageCart("src/assets/Img/Refah.png"));
//         break;
  
//       case "6037":
//         dispatch(setImageCart("src/assets/Img/Keshvarzi.png"));
//         break;
  
//       case "6392":
//         dispatch(setImageCart("src/assets/Img/Keshvarzi.png"));
//         break;
  
//       case "6037":
//         dispatch(setImageCart("src/assets/Img/Meli.png"));
//         break;
  
//       case "6063":
//         dispatch(setImageCart("src/assets/Img/Mehr.png"));
//         break;
  
      
      
  
//       case "6104":
//         dispatch(setImageCart("src/assets/Img/Melat.png"));
//         break;
  
//       case "9919":
//         dispatch(setImageCart("src/assets/Img/Melat.png"));
//         break;
  
//       case "62192":
//         dispatch(setImageCart("src/assets/Img/Saman.png"));
//         break;
  
//       case "6221":
//         dispatch(setImageCart("src/assets/Img/Parsian-removebg-preview.png"));
//         break;
  
//       case "6391":
//         dispatch(setImageCart("src/assets/Img/Parsian-removebg-preview.png"));
//         break;
  
//       case "6278":
//         dispatch(setImageCart("src/assets/Img/Parsian-removebg-preview.png"));
//         break;
  
//       case "6273":
//         dispatch(setImageCart("src/assets/Img/Ansar.png"));
//         break;
  
//       case "6274":
//         dispatch(setImageCart("src/assets/Img/Noveen.png"));
//         break;
//       case "6277":
//         dispatch(setImageCart("src/assets/Img/Post.svg"));
//         break;
  
//       case "6279":
//         dispatch(setImageCart("src/assets/Img/Maadan.png"));
//         break;
  
//       case "6280":
//         dispatch(setImageCart("src/assets/Img/Maskan.jpeg"));
//         break;
  
//       case "6281":
//         dispatch(setImageCart("src/assets/Img/Etebary.png"));
//         break;
  
//       case "6362":
//         dispatch(setImageCart("src/assets/Img/Ayandeh.png"));
//         break;
  
//       case "6367":
//         dispatch(setImageCart("src/assets/Img/Markazi.png"));
//         break;
  
//       case "6369":
//         dispatch(setImageCart("src/assets/Img/Hekmat.png"));
//         break;
  
//       case "6393":
//         dispatch(setImageCart("src/assets/Img/Sina.png"));
//         break;
  
//       case "63937":
//         dispatch(setImageCart("src/assets/Img/Mehr-eghtesad.png"));
//         break;
//       case "6395":
//         dispatch(setImageCart("src/assets/Img/Ghavamin.png"));
//         break;
//       case "6396":
//         dispatch(setImageCart("src/assets/Img/Sarmaye.png"));
//         break;
//   default:
//     dispatch(resetImageBank())
//     break;
//   }
// }
//   return (
//     <ProfileContext.Provider value={{name,
//       // setname,
//       handleAddCard,
//       // number,
//       // setnumber,
//       // cvv2,
//       // setcvv2,
//       // year,
//       // setyear,
//       // month,
//       // setmonth,
//       // password,
//       // setpassword,
//       // inventory,
//       // setinventory,
//       // list,
//       // setlist,
//       // idCart,
//       // setidCart,
//       // nameCart,
//       // setnameCart,
//       // numberCart,
//       // setnumberCart,
//       // cvv2Cart,
//       // setcvv2Cart,
//       // yearCart,
//       // setyearCart,
//       // monthCart,
//       // setmonthCart,
//       // passwordCart,
//       // setpasswordCart,
//       // cartCash,
//       // setcartCash,
//       // historyList,
//       // sethistoryList,
//       // SelectCard,
//       // AddCard,
//       // negetiveInventory
//       // ,bankImage,
//       // imgBank,
//      }}>
//     <div>
    
//       <Navbar/>

//       <Routes>
    
//         <Route path="/History" element={<History historyList={historyList}/>}/>
//         <Route index element={<InputCard handleAddCard={handleAddCard}
//   bankImge={bankImage}
//   imgBank={imgBank}  />} />
//         <Route path="/Transaction" element={<Transaction  />} />
//       </Routes>
//     <div>


//       {list.map((item) => {
//         return (
//         <Card key={item.id} bankImge={bankImage}   imgBank={imgBank}  name={item.name} Number={item.number} Password={item.password} Cvv2={item.cvv} Year={item.year} Month={item.month} Inventory={item.inventory} SelectCard={()=>SelectCard(item)}/>
//         )
//       })}

      
//   </div>
//     </div>
//     </ProfileContext.Provider>
//   );
// }

// export default EveryThing;


