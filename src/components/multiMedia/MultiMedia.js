import React, {useEffect, useState} from 'react';
import styles from './css/multiMedia.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getVideos, videosSelect} from "../../redux/slices/videosSlice";
import {CircularProgress, Pagination} from "@mui/material";

const MultiMedia = () => {
    const dispatch = useDispatch()
    const {videos, load} = useSelector(videosSelect)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getVideos({page, page_size: 4}))
    }, [dispatch, page])

    return (
        <div className={styles.multiMedia}>
            <div className="container">
                <h2 className={styles.title}>МУЛЬТИМЕДИА</h2>
                <div className={styles.multi_videos}>
                        {
                            !load
                            ?
                            <>
                            <ul className={styles.multi_video}>
                                {
                                    videos?.results.map(i =>
                                        <li key={i.id}>
                                            <div className={styles.video}>
                                                <video  width='560' height='333' src={i.media} controls></video>
                                                <p className={styles.multi_title}>{i.title}</p>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                            {videos.count > 4 && <Pagination page={page} onChange={(_, p) => setPage(p)} count={Math.ceil(videos?.count / 4)} color="primary" className={styles.pagination}/>}
                            </>
                            :
                            <div className={styles.load}>
                                <CircularProgress/>
                            </div>
                        }
                </div>
            </div>
        </div>
    );
};

export default MultiMedia;