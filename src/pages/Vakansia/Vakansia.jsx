import style from "./Vakansia.module.css";
import BackColor from "../Back-color/Back-color";
import NavBar from "../../components/NavBar/NavBar";
import Navigate from "../../components/Navigate/Navigate";

function Vakansia() {
  return (
    <>
      <BackColor>
        <div className={style["container"]}>
          <NavBar />
          <Navigate />
          <div className={style["flex"]}>
            <div class={style["back-c"]}>
              <div className={style["form"]}>
                <form action="">
                  <div className={style["one"]}>
                    <label for={style["name"]}>
                      <h1>Имя</h1>
                      <input type="text" placeholder="Имя" id="name" />
                    </label>
                  </div>
                  <div className={style["one"]}>
                    <label for="surname">
                      <h1>Фамилия</h1>
                      <input type="text" placeholder="Фамилия" id="surname" />
                    </label>
                  </div>
                  <div className={style["one"]}>
                    <label for="tel">
                      <h1>Телефон</h1>
                      <input type="tel" placeholder="Телефон" id="tel" />
                    </label>
                  </div>
                  <div className={style["btn"]}>
                    <button>Отправить</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </BackColor>
    </>
  );
}

export default Vakansia;
