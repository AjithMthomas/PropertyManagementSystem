import Axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../config";
import jwt_decode from 'jwt-decode';
import login,{ getLocal } from '../Contexts/auth'




function Payment(props) {
 
  const localResponse = getLocal('authToken');
  const decoded = jwt_decode(localResponse);

  const {property} = props

  const REACT_APP_PUBLIC_KEY=   'rzp_test_8emA6zzli6nGP1'
  const  REACT_APP_SECRET_KEY= 'O4RlOXRxnLAX8IaXM3ifqFZZ'



// this function will handel payment when user submit his/her money
// and it will confim if payment is successfull or not
  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      await Axios({
        url: `${BASE_URL}/property/payment/success/`,
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Everything is OK!");
         
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };

  // this will load a script tag which will open up Razorpay payment card to make //transactions
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const showRazorpay = async () => {
    const res = await loadScript();
    const amount = property.price
    const name = decoded.username
    let bodyData = new FormData();
   
    // we will pass the amount and product name to the backend using form data
    bodyData.append("amount", amount.toString());
    bodyData.append("name", name);

    const data = await Axios({
      url: `${BASE_URL}/property/pay/`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: bodyData,
    }).then((res) => {
      return res;
    });

    // in data we will receive an object from the backend with the information about the payment
    //that has been made by the user

    var options = {
      key_id:REACT_APP_PUBLIC_KEY, // in react your environment variable must start with REACT_APP_
      key_secret:REACT_APP_SECRET_KEY,
      amount: data.data.payment.amount,
      currency: "INR",
      name: "Org. Name",
      description: "Test teansaction",
      image: "", // add image url
      order_id: data.data.payment.id,
      handler: function (response) {
        // we will handle success by calling handlePaymentSuccess method and
        // will pass the response that we've got from razorpay
        handlePaymentSuccess(response);
      },
      prefill: {
        name: "User's name",
        email: "User's email",
        contact: "User's phone",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="container">
      <button onClick={showRazorpay} className="bg-yellow-500 text-black py-2 px-4 rounded-md border-black mt-4 ms-3">
        Pay with razorpay
      </button>
    </div>
  );
}

export default Payment;
