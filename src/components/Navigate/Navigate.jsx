import style from './Navigate.module.css';
import { Link } from 'react-router-dom';

function Navigate() {
    return (
        <>
        <div className={style["container"]}>
            <ul className={style["link"]}>
                <Link to="/cours"><li className={style['list_link']}>Курсы для всех</li></Link>
                <li className={style['list_link']}>Онлайн-обучение</li>
                <Link to='/feadback'><li className={style['list_link']}>Отзавы</li></Link>
                <li className={style['list_link']}>Вопросы-ответы</li>
                <Link to='/media'><li className={style['list_link']}>Контакты</li></Link>
                <li className={style['list_link']}>Партнеры</li>
                <Link to='/vakansia'><li className={style['list_link']}>Вакансия</li></Link>
            </ul>
        </div>
        </>
    )
}


export default Navigate; 