import style from "./FeadBack.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Navigate from "../../components/Navigate/Navigate";

function FeadBack() {
  return (
    <>
      <div className={style["back-colr"]}>
        <div className={style["container"]}>
          <NavBar />
          <Navigate />
          <div className={style["main"]}>
            <div className={style["back-clr"]}>
              <img src="/6.jpg" alt="" />
              <h1>Владимер</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                Praesentium, fugiat.
              </p>
            </div>

            <div className={style["back-clr"]}>
              <img src="/7.jpg" alt="" />
              <h1>Вова</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                Praesentium, fugiat.
              </p>
            </div>

            <div className={style["back-clr"]}>
              <img src="/5.jpg" alt="" />
              <h1>Александор</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
                Praesentium, fugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeadBack;
