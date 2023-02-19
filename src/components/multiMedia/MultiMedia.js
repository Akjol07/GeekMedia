import React, {useEffect} from 'react';
import styles from './css/multiMedia.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getVideos, videosSelect} from "../../redux/slices/videosSlice";
import {CircularProgress} from "@mui/material";

const MultiMedia = () => {
    const dispatch = useDispatch()
    const {videos, load} = useSelector(videosSelect)

    useEffect(() => {
        dispatch(getVideos())
    }, [])

    return (
        <div className={styles.multiMedia}>
            <div className="container">
                <h2 className={styles.title}>Мультимедиа</h2>
                <div className={styles.multi_videos}>
                        {
                            !load
                            ?
                                <ul className={styles.multi_video}>
                                    {
                                        videos.map(i =>
                                            <li key={i.id}>
                                                <video width='525' height='333' src={i.media} controls></video>
                                                <p className={styles.multi_title}>{i.title}</p>
                                            </li>
                                        )
                                    }
                                </ul>
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