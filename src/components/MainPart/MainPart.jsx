import style from "./MainPart.module.css";

function MainPart() {
  return (
    <>
      <div className={style["container"]}>
        <div className={style["flex-box"]}>
          <div className={style["back-clr"]}>
            <div className={style["title"]}>
              <h1>
                Курсы <br /> программирования <br /> и дизайна для <br /> детей
                <br /> в Ташкенте
              </h1>
            </div>
            <div className={style["title-down"]}>
              <p>
                Мы учим практическим навыкам, которые будут полезны в будущем
              </p>
            </div>
          </div>
          <div className={style["back-clr-2"]}>
            <div className={style["title-join"]}>
              Запишитесь на <br /> бесплатный <br /> пробный урок
            </div>
            <div className={style["ipt"]}>
              <input type="name" placeholder="Ваше Имя:" />
              <input type="text" placeholder="+998 97 777 07 70" />
            </div>
            <div className={style["chek"]}>
              <input type="checkbox" name="" id="" />
              <div className={style["title-chek"]}>
                <p>
                  Нажимая кнопку «Записаться», Вы соглашаетесь с условиями
                  обработки персональных данных
                </p>
              </div>
            </div>
            <div className={style["btn-chek"]}>
                <button>Записаться</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPart;
