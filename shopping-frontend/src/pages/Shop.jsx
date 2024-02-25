import React from "react";
import Hero from "../components/hero/Hero";
import NewCollections from "../components/new-collections/NewCollections";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};

export default Shop;
