// This is an event details page which has its own route
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Event = () => {
  const [data,setData]=useState({});
  const {id}=useParams();
  useEffect(()=>{
    axios.get(`http://localhost:8080/meetup/${id}`).then((res)=>{
      setData(res.data)
      console.log(res.data);
    })
  },[])

  return (
    <div className="eventContainer">
      <h1>{data.title}</h1>
     
      {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */}

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
      <button className="unsubscribe">Unsubscribe</button>
      <button className="subscribe" onClick={() => { }}>Subscribe</button>
    </div>
  );
};
