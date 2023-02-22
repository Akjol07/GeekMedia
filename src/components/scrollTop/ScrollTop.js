import React, {useState} from 'react';
import {SwipeUp} from '@mui/icons-material';
import styles from './css/scrollTop.module.css';
import {Link} from 'react-scroll'

const ScrollTop = () => {
    const [scroll, setScroll] = useState(false);


    window.onscroll = () => {
        const doc = document.documentElement.scrollTop;
        setScroll(doc >= 250);
    };

    return (
        <>
            <Link
                to='header'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={styles.button}
                style={scroll ? {opacity: 1, transform: 'rotate(0deg)'} : {opacity: 0, transform: 'rotate(-135deg)'}}
            >
                <SwipeUp/>
            </Link>
        </>
    );
};

export default ScrollTop;