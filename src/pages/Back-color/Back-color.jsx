import style from './Back-color.module.css';

function BackColor({children}) {
    return (
        <>
          <div className={style["back-clr"]}>{children}</div>
        </>
    )
}



export default BackColor;