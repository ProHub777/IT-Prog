import style from "./Mendia.module.css";
import BackColor from "../Back-color/Back-color";
import NavBar from "../../components/NavBar/NavBar";
import Navigate from "../../components/Navigate/Navigate";

function Mendia() {
  return (
    <>
      <BackColor>
        <div className={style["container"]}>
          <NavBar />
          <Navigate />
          <div className={style["main"]}>
            <h1>IT-Prog</h1>
            <p>
              Учим практическим навыкам, которые <br /> будут полезны в будущем
            </p>
          </div>
          <div className={style["media"]}>
            <div className={style["media-box"]}>
              <div className={style["txt"]}>
                <h1>150 м</h1>
                <p>
                  Подписчиков <br /> в Instagram
                </p>
              </div>
              <div className={style["img"]}>
                <img src="/logo1.jpg" alt="" />
              </div>
            </div>

            <div className={style["media-box"]}>
              <div className={style["txt"]}>
                <h1>510 м</h1>
                <p>
                  Подписчиков <br /> в Youtube
                </p>
              </div>
              <div className={style["img"]}>
                <img src="/logo2.jpg" alt="" />
              </div>
            </div>

            <div className={style["media-box"]}>
              <div className={style["txt"]}>
                <h1>50 м</h1>
                <p>
                  Подписчиков <br /> в Telegram
                </p>
              </div>
              <div className={style["img"]}>
                <img src="/logo3.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className={style["f"]}>
            <div className={style["main-media"]}>
              <div className={style["number"]}>
                <h1>+998 (90) 131-31-97</h1>
                <p>Телефон для консультации</p>
              </div>
            </div>

            <div className={style["main-media"]}>
              <div className={style["number"]}>
                <h1>hello@IT-Prog.uz</h1>
                <p>Напишите нам письмо</p>
              </div>
            </div>
          </div>
        </div>
      </BackColor>
    </>
  );
}

export default Mendia;
