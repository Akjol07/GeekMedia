import React, {useEffect} from 'react';
import styles from './css/slider.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Autoplay} from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {articlesSelect, getArticles, loadArticlesSelect} from "../../redux/slices/articlesSlices";
import {NavLink, useParams} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {ReactComponent as Instagram} from "../../media/slider/inst.svg";
import {ReactComponent as Facebook} from "../../media/slider/faceb.svg";
import {ReactComponent as Telegram} from "../../media/slider/tg.svg";

const Slider = () => {
    const {id} = useParams();
    const articles = useSelector(articlesSelect);
    const load = useSelector(loadArticlesSelect)

    const dispatch = useDispatch()

    const topClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Популярные новости</h2>
            {
                !load
                ?
                <Swiper
                    className={styles.blocks}
                    autoplay={{delay: 2000, disableOnInteraction: false}}
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    {articles.slice(0, 15).map(i => (
                        <SwiperSlide className={styles.block} key={i.id}>
                            <NavLink onClick={topClick} to={`/about/${i.id}`}>
                                <div className={styles.block_img}>
                                    <img src={i?.image} alt="" className={styles.block_image}/>
                                </div>
                                <p className={styles.block_title}>{i?.title}</p>
                            </NavLink>
                        </SwiperSlide>
                    ))}
                </Swiper>
                    :
                    <div className={styles.load}>
                        <CircularProgress/>
                    </div>
            }
            <p className={styles.title_social}>Поделиться в социальных сетях:</p>
            <div className={styles.socials}>
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
    );
};

export default Slider;