import React from 'react';
import styles from './css/aboutProject.module.css'
import {photos} from "./listsAboutProject";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";

const AboutProject = () => {
    return (
        <div className={styles.about}>
            <div className="container">
                <h2>О ПРОЕКТЕ</h2>
                <div className={styles.titles}>
                    <p className={styles.title_one}>Geeks - Курсы <br/> IT-профессий в Кыргызстане</p>
                    <p className={styles.title_two}>Курсы IT-профессий Geeks (Гикс) были основаны в 2018-ом году в Бишкеке с целью дать возможность каждому человеку, даже без опыта в технологиях, гарантированно освоить IT-профессию.</p>
                    <h2>Основатели Geeks - Айдар Бакиров и Нургазы Сулайманов.</h2>
                    <p className={styles.title_three}>Geeks сегодня? <br/> - Более 1000 действующих студентов; <br/> - 4 филиала в Кыргызстане в 3 городах: Бишкек, Ош, Кара-Балта; <br/> - Гарантированная и оплачиваемая стажировка в IT-компании GeekStudio; <br/> - Более 50 опытных сотрудников; <br/> - Система менторства и возможность зарабатывать до 30 000 сомов в месяц уже во время обучения; <br/> - Бесплатные и обустроенные коворкинги общей площадью более 2500 кв. м.; <br/> - 8 самых востребованных на мировом рынке IT-курсов <br/> - Система бесплатных повторов.</p>
                </div>
                <Swiper
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    slidesPerView={1}
                    navigation
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className={styles.images}>
                    {
                        photos.map((i, k) => <SwiperSlide key={k}>
                                    <img src={i} alt=""/>
                                </SwiperSlide>)
                    }
                </Swiper>
                <div className={styles.titles_two}>
                    <p>Geeks. Цели </p>
                    <p className={styles.titles_second}>Несмотря на активный рост, мы не останавливаемся на достигнутом, а продолжаем и дальше развивать сеть образовательных центров в Кыргызстане. Основная цель на ближайшее время - трудоустроить как можно больше выпускников Geeks, в том числе в нашей IT-компании GeekStudio. Цель на перспективу - изменить Кыргызстан в лучшую сторону, подготавливая “к труду и обороне” десятки тысяч профессионалов.</p>
                    <p>Работы много и это только начало. Мы очень рады, что сообщество Гиков в Кыргызстане растет такими стремительными темпами, и даже после окончания курсов многие ребята остаются на связи как со своими одногруппниками, так и с командой образовательного центра. Как принято говорить в наших кругах: “Бывших Гиков не бывает”. Мы искренне убеждены в том, что только вместе, как единое целое, мы сможем помочь нашей стране выйти на новый уровень и процветать.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutProject;