import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="container flex justify-between m-auto">
      <Card
        label="angga"
        image="https://i.ibb.co/qgGsrw3/DCIM-101-MEDIA-DJI-0083-JPG.jpg"
        desc="lorem ipsum dolor sir amit amit"
      />
      <Card
        label="anggi"
        image="https://i.ibb.co/qgGsrw3/DCIM-101-MEDIA-DJI-0083-JPG.jpg"
        desc="lorem ipsum dolor sir amit amit"
      />
      <Card
        label="riski"
        image="https://i.ibb.co/qgGsrw3/DCIM-101-MEDIA-DJI-0083-JPG.jpg"
        desc="lorem ipsum dolor sir amit amit"
      />
    </div>
  );
};

export default Home;
