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
        const local = localStorage.getItem('gifInd');
        if (gifs.length > 1) {
            if (!local) {
                localStorage.setItem('gifInd', JSON.stringify(ind))
            } else {
                if (JSON.parse(local) >= gifs.length - 1) {
                    localStorage.setItem('gifInd', JSON.stringify(0))
                    setInd(0);
                } else {
                    console.log(JSON.parse(local) + 1);
                    localStorage.setItem('gifInd', JSON.stringify(JSON.parse(local) + 1));
                    setInd(JSON.parse(local) + 1);
                }
            }
        }
    },[gifs])

    useEffect(() => {
        dispatch(getGifs())
    }, [dispatch])
    return (
        <div className={styles.reclame}>
            {
                !load
                ?
                <figure>
                    <a target='_blank' href={gifs[ind]?.url}>
                        <img src={gifs[ind]?.video} alt=''/>
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