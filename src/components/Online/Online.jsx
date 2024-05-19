import style from "./Online.module.css";

function Online() {
  return (
    <>
      <div className={style["container"]}>
        <div className={style["main-on"]}>
          <div className={style["img-on"]}>
            <img src="/4.gif" alt="" />
          </div>
          <div className={style["txt-on"]}>
            <h1>
              Учитесь — где <br /> и когда хотите
            </h1>
            <p>
              Вы из другого региона или Вам неудобно ездить в филиалы? <br /> У
              нас есть решение — онлайн формат обучения как <br /> для взрослых,
              так и для детей
            </p>
            <div className={style["btn-on"]}>
              <button>Подробное об онлайн-обучении</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Online;
