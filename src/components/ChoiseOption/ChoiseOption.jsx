import style from "./ChoiseOption.module.css";

function ChoiseOption() {
  return (
    <>
      <div className={style["container"]}>
        <div className={style["flex-box"]}>
          <div className={style["title-question"]}>
            <h1>
              Почему выбирают <br /> IT-Prog ?
            </h1>
            <img src="/2.gif" alt="" />
          </div>
          <div className={style["option"]}>
            <div className={style["why-we"]}>
              <h1>Профориентация</h1>
              <p>
                Ребёнок пробует себя в роли <br /> разных IT-специалистов и
                начинает лучше <br />
                понимать перспективы: кем работать <br />
                и как применять свои способности <br />
                после школы
              </p>
            </div>
          </div>
          <div className={style["option-2"]}>
            <div className={style["why-we"]}>
              <h1>Вовлекаем в обучение</h1>
              <p>
                Ребята не просто общаются с преподавателем, а участвуют в
                викторинах, командных соревнованиях, тестированиях и дискуссиях
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChoiseOption;
