import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from './css/aboutPage.module.css'
import Slider from "../../components/slider/Slider";
import {useParams} from "react-router-dom";
import {articleSelect, clearArticle, getArticle, loadArticleSelect} from "../../redux/slices/articleSlice";
import {CircularProgress} from "@mui/material";

const AboutPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const article = useSelector(articleSelect);
    const load = useSelector(loadArticleSelect)

    useEffect(() => {
        dispatch(clearArticle());
        dispatch(getArticle(id));
    }, [id]);

    return (
        <div className={styles.aboutPage}>
            <div className="container">
                {
                    !load
                    ?
                    <>
                        <div className={styles.box_one}>
                            <span className={styles.time}>{article?.created_date_time}</span>
                            <p className={styles.text}>{article?.title}</p>
                        </div>
                        <div>
                            <div className={styles.box_img}>
                                <img src={article?.image} alt="" className={styles.img}/>
                            </div>
                            <p className={styles.box_title}>{article?.description}</p>
                        </div>
                        <div className={styles.titles}>
                            <ul>
                                {
                                    article?.articles.map(i => <li key={i.id}>
                                        <h2>{i.title}</h2>
                                        {i.image !== null && <img src={i.image} alt=""/>}
                                        <p>{i.description}</p>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </>
                    :
                        <div className={styles.load}>
                            <CircularProgress/>
                        </div>
                }
                <Slider/>
            </div>
        </div>
    );
};

export default AboutPage;