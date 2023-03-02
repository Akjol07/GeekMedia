import React, {useEffect, useState} from 'react';
import styles from './css/reclame.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getGifs, gifSelect} from "../../redux/slices/gifSlice";
import {CircularProgress} from "@mui/material";

const Reaclame = () => {
    const dispatch = useDispatch()
    const {gifs, load} = useSelector(gifSelect)
    const [ind, setInd] = useState(0)

    useEffect(() => {
        gifs.length > 1
        &&
        setInterval(() => {
            ind === gifs.length - 1 ? setInd(0) : setInd(ind+1)
        }, 1000)
    },[])

    useEffect(() => {
        dispatch(getGifs())
    }, [dispatch])
    return (
        <div className={styles.reclame}>
            {
                !load
                ?
                <figure>
                    <a target='_blank' href="https://us.coca-cola.com/">
                        <img src={gifs[ind].video} alt=''/>
                    </a>
                </figure>
                :
                <div className={styles.load}>
                    <CircularProgress/>
                </div>
            }
        </div>
    );
};

export default Reaclame;