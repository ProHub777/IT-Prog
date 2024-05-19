import style from "./Map.module.css";

function Map() {
  return (
    <>
      <div className={style["container"]}>
        <div className={style["main-map"]}>
          <div className={style["main"]}>
            <h1>
              5 филиалов в Ташкенте — <br /> выбирай любой
            </h1>
            <div className={style["title-map"]}>
              <p>
                Мы делаем все, чтобы создать доступную среду для обучения <br />
                программированию, поэтому открываем филиалы в каждом районе
              </p>
            </div>
            <div className={style["btn-map"]}>
              <button>Филиалы на карте</button>
            </div>
          </div>
            <div className={style["img-map"]}>
              <img src="/3.gif" alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Map;
