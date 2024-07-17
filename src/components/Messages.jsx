import React from "react";
import "../assets/messages.css";
import director from "../assets/img/director.jpg";

const Messages = () => {
  return (
    < div className="messages">
      <div className="heading-container-1">
        <h1 className="heading_1">Director's Message</h1>
      </div>
      <ul className="videos">
        <li className="videolist">
          <div className="videodiv">
            <iframe
              className="iframestyle"
              src="https://www.youtube.com/embed/kPLbUGvvNus"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className="directorbio">
            <div className="directorimg">
              <img className="image_1" src={director} alt="Director" />
            </div>
            <p className="bio">
              <span className="doctor">Dr. Pawan Kumar Singh</span> is Director of Indian Institute of
              Management Tiruchirappalli. He has served as Director of
              Management Development Institute Gurgaon and Director In-charge of
              Indian Institute of Management Indore. In the role of mentoring of
              Indian Institute of Management Sambalpur, he served as the first
              Chairperson of Academic Committee and as a Nodal Officer of IIM
              Sambalpur. Dr. Singh is in academics for more than three decades
              including being Professor of Organisational Behaviour and Human
              Resource Management at Indian Institute of Management Indore for
              about 15 years.
            </p>
            <div className="info">
              <p className="name">
                Prof. Pawan Kumar Singh
                <br className="desg" />
                Director of Indian Institute of Management, Tiruchirappalli
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Messages;
