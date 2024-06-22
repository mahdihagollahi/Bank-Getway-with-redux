import React, {  createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Transaction from "../Screen/Transaction";
import History from "../Screen/History";
import InputCard from "./AddCart";
import Card from "./Card";
import Navbar from "./Navbar";
import { setImageCart, resetImageBank } from "../Redux/bankSlice";
import { negetiveInventory , setCardDetails } from '../Redux/cardSlice';

export const ProfileContext = createContext();

function EveryThing() {
  
  
 

  const dispatch = useDispatch();

  const imgBank = useSelector((state) => state.Bank.ImgBank);
  const { list } = useSelector((state) => state.card);
  const {historyList} = useSelector((state => state.card.historyList))

  const SelectCard = (card) => {
    dispatch(setCardDetails(card));
    console.log(SelectCard)
  };


  const handelNegetive = (negetivePrice , id) => {
    dispatch(negetiveInventory({negetivePrice , id}))
  }
 
  const bankImage = (e) => {
    const value = e.target.value.slice(0, 4);
    console.log("Bank code:", value);
    switch (value) {
      case "6037":
        dispatch(setImageCart("src/assets/Img/saderat.png"));
        break;
      case "6219":
        dispatch(setImageCart("src/assets/Img/Blue.png"));
        break;
      case "5029":
        dispatch(setImageCart("src/assets/Img/Dey.png"));
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
        dispatch(resetImageBank());
        break;
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        handelNegetive,
        bankImage,
        imgBank,
      }}
    >
      <div>
        <Navbar />

        <Routes>
          <Route
            path="/History"
            element={<History historyList={historyList} />}
          />
          <Route index element={<InputCard />} />
          <Route
            path="/Transaction"
            element={
              <Transaction
              
              />
            }
          />
        </Routes>
        <div>
          {list.map((item) => {
            return (
              <Card
                key={item.id}
                bankImge={bankImage}
                imgBank={imgBank}
                name={item.name}
                Number={item.number}
                Password={item.password}
                Cvv2={item.cvv2}
                Year={item.year}
                Month={item.month}
                Inventory={item.inventory}
                SelectCard={() => SelectCard(item)}
              />
            );
          })}
        </div>
      </div>
    </ProfileContext.Provider>
  );
}

export default EveryThing;
Mak77188185eeN