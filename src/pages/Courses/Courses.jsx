import style from "./Courses.module.css";
import NavBar from "../../components/NavBar/NavBar";
import BackColor from "../Back-color/Back-color";
import Navigate from "../../components/Navigate/Navigate";

function Courses() {
  return (
    <>
      <BackColor>
        <div className={style["container"]}>
          <NavBar />
          <Navigate />
          <div className={style["txt"]}>
            <p>Выберите подходящий курс</p>
          </div>
          <div className={style["txt-2"]}>
            <p>Все курсы</p>
          </div>
          <div className={style["main-flex"]}>
            <div className={style["main"]}>
              <div className={style["box"]}>
                <p>Web-разработка</p>
                <p>12-14 лет</p>
              </div>
              <div className={style["box-center"]}>
                <p>
                  На занятиях дети научаются создавать свои <br /> игры <br /> и
                  мультфильмы с помощью блоков, которые <br /> напоминают
                  конструктор Lego
                </p>
                <div className={style["spend-time"]}>
                  <p>*54 занятия</p>
                  <p>*8-9 месяца</p>
                </div>
                <div className={style["btn"]}>
                  <button>КОНСУЛЬТАЦИЯ</button>
                </div>
              </div>
            </div>

            <div className={style["main"]}>
              <div className={style["box"]}>
                <p>Scratch</p>
                <p>5-8 лет</p>
              </div>
              <div className={style["box-center"]}>
                <p>
                  На занятиях дети научаются создавать свои <br /> игры <br /> и
                  мультфильмы с помощью блоков, которые <br /> напоминают
                  конструктор Lego
                </p>
                <div className={style["spend-time"]}>
                  <p>*32 занятия</p>
                  <p>*3-4 месяца</p>
                </div>
                <div className={style["btn"]}>
                  <button>КОНСУЛЬТАЦИЯ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackColor>
    </>
  );
}

export default Courses;
