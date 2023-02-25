import React, {useEffect} from 'react';
import styles from './css/mainPage.module.css';
import {useDispatch} from "react-redux";
import {getArticles} from "../../redux/slices/articlesSlices";
import LeftNews from "../../components/mainPage/leftNews/LeftNews";
import RightNews from "../../components/mainPage/rightNews/RightNews";
import Reaclame from "../../components/reclame/Reaclame";


const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticles())
    }, [])
    return (
        <div className={styles.wrapper}>
            <div className={"container "+styles.container}>
                <LeftNews/>
                <RightNews/>
            </div>
            <Reaclame/>
        </div>
    );
};

export default MainPage;