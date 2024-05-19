import style from './Back-clr.module.css';

function Backclr({children}) {
    return (
        <>
            <div className={style["back-clr"]}>{children}</div>
        </>
    )
}


export default Backclr; 