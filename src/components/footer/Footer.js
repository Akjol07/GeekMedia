import React from 'react';
import styles from './css/footer.module.css'
import {ReactComponent as FooterLogo} from "../../media/footer/footer_logo.svg";
import {Link} from "react-router-dom";
import {ReactComponent as FooterInst} from "../../media/footer/f_inst.svg";
import {ReactComponent as FooterFaceBook} from "../../media/footer/f_faceb.svg";
import {ReactComponent as FooterTg} from "../../media/footer/f_tg.svg";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_inner}>
                    <div className="footer_logo">
                        <Link to='/'>
                            <FooterLogo/>
                        </Link>
                    </div>
                    <div className={styles.footer_news}>
                        <ul className={styles.ul}>
                            <li>
                                <Link to='/' className={styles.link}>МУЛЬТИМЕДИА</Link>
                            </li>
                            <li>
                                <Link to='/' className={styles.link}>О ПРОЕКТЕ</Link>
                            </li>
                            <li>
                                <Link to='/' className={styles.link}>НОВОСТИ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_icons}>
                        <a href="">
                            <FooterInst/>
                        </a>
                        <a href="">
                            <FooterFaceBook/>
                        </a>
                        <a href="">
                            <FooterTg/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

