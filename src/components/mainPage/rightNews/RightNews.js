import React from 'react';
import {useSelector} from "react-redux";
import {articlesSelect, loadArticlesSelect} from "../../../redux/slices/articlesSlices";
import {Link} from "react-router-dom";
import styles from './css/rightnews.module.css'
import {CircularProgress} from "@mui/material";


const RightNews = () => {
    const articles = useSelector(articlesSelect);
    const load = useSelector(loadArticlesSelect)
    return (
        <div className={styles.right_news}>
            <ul>
                {
                    !load
                    ?
                    articles.slice(3, 9).map((i) => (
                    <li key={i?.id}>
                        <p>{i?.created_date}</p>
                        <Link to={`about/${i?.id}`}>{i?.title}</Link>
                    </li>))
                    :
                    <>
                        <div className={styles.load}>
                            <CircularProgress/>
                        </div>
                    </>
                }
            </ul>
        </div>
    );
};

export default RightNews;