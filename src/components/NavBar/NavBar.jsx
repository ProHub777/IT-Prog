import style from "./NavBar.module.css";
import Modal from "react-modal";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div>
      <form className={style["form"]}>
        <input type="name" />
        <input type="email" />
        <input type="password" />
      </form>
      <button onClick={closeModal}>Закрыть</button>
    </div>
  );

  return (
    <>
        <div className={style["container"]}>
          <div className={style["links"]}>
            <Link to='/'><img src="/1.jpg" alt="foto" className={style["img"]} /></Link>
            <div className={style["number"]}>
              <p>+998 (90) 131-31-97</p>
              <div className={style["btn"]}>
                <button onClick={openModal}>Записаться школе</button>
              </div>
            </div>
          </div>
        </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
      </Modal>
    </>
  );
}

export default NavBar;
