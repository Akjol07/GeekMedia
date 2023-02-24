import React from 'react';
import styles from './css/LeftNews.module.css';
import {useSelector} from "react-redux";
import {articlesSelect, loadArticlesSelect} from "../../../redux/slices/articlesSlices";
import {CircularProgress} from "@mui/material";
import {Link} from "react-router-dom";


const LeftNews = () => {
    const articles = useSelector(articlesSelect);
    const load = useSelector(loadArticlesSelect);

    return (
        <div className={styles.left}>
            {
                !load
                    ?
                    <>
                        <div className={styles.mainNews}>
                            <Link to={`about/${articles[0]?.id}`}>
                                <img src={articles[0]?.image} alt=""/>
                                <span><p>{articles[0]?.title}</p></span>
                            </Link>
                        </div>
                        <div className={styles.news}>
                            <Link to={`about/${articles[1]?.id}`}>
                                <img src={articles[1]?.image} alt=""/>
                                <span><p>{articles[1]?.title}</p></span>
                            </Link>
                        </div>
                        <div className={styles.news}>
                            <Link to={`about/${articles[2]?.id}`}>
                                <img src={articles[2]?.image} alt=""/>
                                <span><p>{articles[2]?.title}</p></span>
                            </Link>
                        </div>
                    </>
                    :
                    <div className={styles.load}>
                        <CircularProgress/>
                    </div>
            }
        </div>
    );
};

export default LeftNews;