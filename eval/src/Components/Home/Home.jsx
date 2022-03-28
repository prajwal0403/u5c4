import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios" ;

export const Home = () => {
const[data,setData]=useState([]);
useEffect(()=>{axios.get("http://localhost:8080/meetups").then((res)=>setData(res.data))},[]);



  return (
    <div className="homeContainer">
      {[]
        .filter((el) => { }) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`add route here`} className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`add your route here`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {data
            .map((el) => {
              return (
                <Link key={el.id} to={`/meetup/${el.id}`} className="events">
                  <div className="title"><h1>{el.title}</h1></div>
                  <div className="theme">{el.theme}</div>
                  <div className="description">{el.description}</div>
                  <div className="date">{el.date}</div>
                  <div className="time">{el.time}</div>
                  <div className="location">{el.location}</div>
                  <div className="image"><img height="250px" width="250px" src={el.image} alt="" /></div>
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};
