import React from "react";
import "./descriptionbox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to E-commerce , your ultimate destination for all your
          shopping needs. With an extensive array of products spanning fashion,
          electronics, home goods, beauty, and more, we provide a one-stop shop
          for discerning shoppers. Our user-friendly interface ensures a
          seamless browsing experience, with intuitive search and filtering
          options to help you find exactly what you're looking for. At Rohit, we
          prioritize customer satisfaction above all else. Our dedicated support
          team is available to assist you with any inquiries or concerns,
          ensuring that your shopping experience is smooth and enjoyable from
          start to finish. Whether you have questions about products, need help
          with orders, or require assistance with returns and exchanges, we're
          here to help.
          <p>
            We understand the importance of security when shopping online.
            That's why we employ advanced encryption technology to protect your
            personal information and secure payment gateways to ensure safe
            transactions. Shop with confidence knowing that your privacy and
            security are our top priorities.
          </p>
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
