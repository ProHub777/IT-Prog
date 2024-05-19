import style from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={style["container"]}>
        <div className={style["main"]}>
          <img src="/1.jpg" alt="" className={style["img"]} />
        </div>
        <div className={style["f"]}>
        <div className={style["txt"]}>
          <p>
            Школа программирования в <br /> Ташкенте <br /> © OOO Invicta One
            Stud
          </p>
        </div>
        <div className={style["box"]}>
          <div className={style["box-1"]}>
            <p>Курсы для всех</p>
            <p>Онлайн-обучение</p>
            <p>Отзавы</p>
          </div>
          <div className={style["box-1"]}>
            <p>Вопрос-ответ</p>
            <p>Контакты</p>
            <p>Партнерам</p>
          </div>
          <div className={style["box-1"]}>
            <p>Вакансия</p>
          </div>
          <div className={style["box-1"]}>
            <p>+998 (90) 131-31-97</p>
            <p>Рабочее время: <br /> Пн — Пт с 10:00 до <br /> 20:00</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
