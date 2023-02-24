import React, {useEffect, useState} from 'react';
import {Link, useLocation, useMatch} from "react-router-dom";
import styles from './css/header.module.css'
import {ReactComponent as Arrow} from "../../media/header/arrow_down.svg";
import {ReactComponent as Search} from "../../media/header/inp.svg";
import {ReactComponent as Logo} from "../../media/header/logo.svg";
import {ReactComponent as Instagram} from "../../media/header/inst.svg";
import {ReactComponent as Facebook} from "../../media/header/faceb.svg";
import {ReactComponent as Telegram} from "../../media/header/tg.svg";
import {ReactComponent as LogoTwo} from "../../media/header/logoTwo.svg";
import SearchInput from "./SearchInput";
import {useDispatch, useSelector} from "react-redux";
import {categoriesSelect, getCategory} from "../../redux/slices/articlesSlices";

export default function Header() {
    const dispatch = useDispatch()
    const [ruCategory, setRuCategory] = useState('НОВОСТИ');
    const categories = useSelector(categoriesSelect)
    const match = useMatch('/articles/category/:category/');
    const locate = useLocation();
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    useEffect(() => {
        if (categories.length > 0 && match !== null) {
            setRuCategory(categories.find(c => c.en_title === match.params.category).ru_title)
        } else setRuCategory('НОВОВСТИ')
    }, [categories, match])
    return (
        <header id="header">
            <div className={styles.menu+" container"}>
                    <Link to='/'>
                        {
                            locate.pathname === '/multiMedia'
                            ?
                            <LogoTwo/>
                            :
                            <Logo/>
                        }
                    </Link>
                    <div className={styles.icons}>
                        <a target="_blank" href="https://instagram.com/geeks_edu">
                            <Instagram/>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/geekskg">
                            <Facebook/>
                        </a>
                        <a target="_blank" href="https://t.me/joinchat/SExl8seNzNMm6aaS">
                            <Telegram/>
                        </a>
                    </div>
            </div>
            <div className={styles.header}>
                <div className={"container "+styles.container}>
                    <div className={styles.nav__inner}>
                        <div className={styles.nav}>
                            <ul className={styles.ul}>
                                <li>
                                    <Link to='/' className={styles.link}>ГЛАВНАЯ СТРАНИЦА</Link>
                                </li>
                                <li className={styles.arrow_link} onClick={handleOpen}>
                                    <span className={styles.link}>{ruCategory.toUpperCase()}<Arrow style={open ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}/></span>
                                    <ul style={!open ? {height: 0, padding: '0 14px 0'} : {height: 172, padding: '4px 14px 7px'}} className={styles.categories}>
                                        {
                                            open
                                            &&
                                            categories.map(i => (
                                                <li key={i.id}><Link to={`/articles/category/${i.en_title}/`}>{i?.ru_title.toUpperCase()}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <Link to='/multiMedia' className={styles.link}>МУЛЬТИМЕДИА</Link>
                                </li>
                                <li>
                                    <Link to='/articles' className={styles.link}>СТАТЬИ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.search__inner}>
                            <SearchInput/>
                            <Search className={styles.search}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
