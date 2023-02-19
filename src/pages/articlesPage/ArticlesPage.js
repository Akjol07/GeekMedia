import React, {useEffect, useState} from 'react';
import styles from './css/articlesPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {Button, CircularProgress} from "@mui/material";
import {Link} from "react-router-dom";
import {DayPicker} from 'react-day-picker'
import 'react-day-picker/dist/style.css';
import {articlesByCategory, getArticlesByCategory} from "../../redux/slices/filteredSlice";

const ArticlesPage = () => {
    const dispatch = useDispatch()
    const {articles, load} = useSelector(articlesByCategory);
    const [selectedDate, setSelectedDate] = useState(null);

    function handleDayClick(day, { selected }) {
        if (selected) {
            // Если дата уже выбрана, отменяем выбор
            setSelectedDate(null);
            return;
        }
        setSelectedDate(day);
    }

    const clearDate = () => setSelectedDate(null);



    useEffect(() => {
        selectedDate !== null
            ?
        dispatch(getArticlesByCategory({
            created_date_min: selectedDate.toLocaleDateString().split('.').reverse().join('-'),
            created_date_max: selectedDate.toLocaleDateString().split('.').reverse().join('-'),
        }))
            :
            dispatch(getArticlesByCategory())
    }, [selectedDate])
    return (
        <div className={styles.articles}>
            <div className={"container "+styles.container}>
                <div>
                    <h2>СТАТЬИ</h2>
                    {
                        articles.length <= 0 && <h2 className={styles.notFound}>Новостей на эту дату не найдено!</h2>
                    }
                    {
                        !load
                            ?
                            <ul>
                                {
                                    articles.map(i => <li key={i.id}>
                                        <span>{i.created_date}</span>
                                        <Link to={`/about/${i.id}`}><p>{i.title}</p></Link>
                                    </li>)
                                }
                            </ul>
                            :
                            <div className={styles.load}>
                                <CircularProgress/>
                            </div>
                    }
                </div>
                <div className={styles.block_picker}>
                    <Button variant="contained" onClick={clearDate}>Все статьи</Button>
                    <DayPicker onDayClick={handleDayClick} selected={selectedDate} />
                    {selectedDate && <p>Выбранная дата: {selectedDate.toLocaleDateString()}</p>}
                </div>
            </div>
        </div>
    );
};

export default ArticlesPage;