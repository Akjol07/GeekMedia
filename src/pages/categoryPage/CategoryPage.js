import React, {useEffect, useState} from 'react';
import styles from '././css/categoryPage.module.css'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {categoriesSelect, getCategory} from "../../redux/slices/articlesSlices";
import {CircularProgress} from "@mui/material";
import {articlesByCategory, getArticlesByCategory} from "../../redux/slices/filteredSlice";

const CategoryPage = () => {
    const dispatch = useDispatch()
    const {category} = useParams()
    const {articles, load} = useSelector(articlesByCategory)
    const categories = useSelector(categoriesSelect)
    const [ruCategory, setRuCategory] = useState('');

    useEffect(() => {
        dispatch(getCategory())
        dispatch(getArticlesByCategory({category: category}))
    },[category])

    useEffect(() => {
        if (categories.length > 0) {
            setRuCategory(categories.find(c => c.en_title === category).ru_title)
        } else setRuCategory('')
    }, [categories, category])
    return (
        <div className={styles.category}>
            <div className="container">
                <h2>{ruCategory}</h2>
                {
                    !load
                    ?
                        <ul>
                        {
                        articles?.results.map(i => <li key={i.id}>
                            <span>{i.created_date_time}</span>
                            <Link to={`/about/${i.id}`}>
                                <p>{i.title}</p>
                            </Link>
                        </li>)
                        }
                        < /ul>
                    :
                    <div className={styles.load}>
                        <CircularProgress/>
                    </div>
                }
            </div>
        </div>
    );
};

export default CategoryPage;