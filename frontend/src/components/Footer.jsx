import React from "react";
import { styled } from "styled-components";
import logo from "../assets/CarTrade.svg";

const Footer = () => {
  return (
    <DIV>
      <footer>
        <div className="image">
          <img src={logo} alt="logo" />
        </div>

        <ul>
          <li>Listing</li>
          <li>FAQ</li>
          <li>About Us</li>
        </ul>

        <ul>
          <li>Blog</li>
          <li>Our Team</li>
          <li>Contact</li>
        </ul>

        <p>
          Award-winning, family owned dealership of new and pre-owned vehicles
          with several locations across the city. Lowest prices and the best
          customer service guaranteed.
        </p>
      </footer>
    </DIV>
  );
};

export default Footer;

const DIV = styled.div`
  width: 100%;
  background-color: #222732;
  height: 400px;
  margin-top: 50px;

  footer {
    padding-top: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    .image {
      img {
        width: 100px;
      }
    }

    p {
      width: 400px;
    }

    li {
      margin: 10px;
      text-align: start;
      font-size: 20px;
      font-weight: 400;
    }
    li::marker {
      content: "•"; /* Set the marker to a disc (•) */
      color: red; /* Change the color to your desired color */
      margin-right: 20px;
    }
  }
`;
