// This is an event details page which has its own route
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Event = () => {
  const [data,setData]=useState({});
  const {id}=useParams();
  useEffect(()=>{
    axios.get(`http://localhost:8080/meetups/${id}`).then((res)=>{
      setData(res.data)
    })
  },[])

  return (
    <div className="eventContainer">
       <div className="title"><h1>{data.title}</h1></div>
                  <div className="theme">{data.theme}</div>
                  <div className="description">{data.description}</div>
                  <div className="date">{data.date}</div>
                  <div className="time">{data.time}</div>
                  <div className="location">{data.location}</div>
                  <div className="image"><img height="250px" width="250px" src={data.image} alt="" /></div> 
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
