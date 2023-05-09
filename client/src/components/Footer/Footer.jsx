import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            repellendus corrupti autem. Officia, tempore esse! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Aspernatur, quis?
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Ponnani , Malapuran , Kerala 679577</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone : 9074063743</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email : Hadhirasal22@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speaker</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                HADISTORE. 2023 CREATED BY HADI RAZAL.
            </div>
            <img src={Payment} alt="/" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
