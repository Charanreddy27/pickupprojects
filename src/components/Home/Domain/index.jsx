import React from "react";
import web from "../imgs/web.jpg"
import ml from "../imgs/ml.jpg"
import AI from "../imgs/AI.jpg"
import DeepLearning from "../imgs/DeepLearning.jpg"
import IOT from "../imgs/IOT.jpg"
import BlockChain from "../imgs/BlockChain.jpg"
import DataScience from "../imgs/DataScience.jpg"
import cloud from "../imgs/Cloud.jpg"
import IOT1 from '../imgs/IOT.jpg';

const ResponsiveCard = ({ imageUrl, title }) => {
  return (
    <div
      style={{
        width: "130px",
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: "100%",
          height: "100px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          padding: "16px",
          textAlign: "start",
        }}
      >
        <h3 style={{ 
          fontSize:"10px",
          margin: "0",
           textAlign:"center",
            }}>{title}</h3>
      </div>
    </div>
  );
};

const CardList = () => {
  const data = [
    { imageUrl: ml, title: "Machine Learning" },
    { imageUrl: AI, title: "AI" },
    { imageUrl: web, title: "Full Stack" },
    { imageUrl: DeepLearning, title: "Deep Learning" },
    { imageUrl: IOT, title: "IOT" },
    { imageUrl: BlockChain, title: "Block Chain" },
    { imageUrl: DataScience, title: "Data Science" },
    { imageUrl: cloud, title: "Cloud Computing" },
    // { imageUrl: "https://source.unsplash.com/random/200x200?sig=1", title: "Card 3" },
    // Add more data as needed
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {data.map((item, index) => (
        <ResponsiveCard key={index} imageUrl={item.imageUrl} title={item.title} />
      ))}
    </div>
  );
};

const Domain = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Domains</h1>
      <CardList />
    </div>
  );
};

export default Domain;
