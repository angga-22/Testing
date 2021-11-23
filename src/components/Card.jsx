import * as React from "react";
import Modal from "./Modal";

const Card = ({ label, image, desc }) => {
  const [isModal, setIsModal] = React.useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div
      className="card flex flex--column justify-center"
      onClick={toggleModal}
    >
      <img src={image} alt="img" className="img" />
      <h4 className="card__card-label">{label}</h4>
      <p className="card__card-desc">{desc}</p>
      {isModal ? <Modal /> : null}
    </div>
  );
};

export default Card;
