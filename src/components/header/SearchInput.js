import React, {useState} from 'react';
import styles from './css/header.module.css'
import {useSelector} from "react-redux";
import {articlesSelect} from "../../redux/slices/articlesSlices";
import {Link} from "react-router-dom";

const SearchInput = () => {
    const articles = useSelector(articlesSelect);
    const [input, setInput] = useState('')
    const [arrInp, setArrInp] = useState([])


    const handleSearch = ({target}) => {
        setInput(target.value)
        setArrInp(target.value === '' ? [] : articles.filter(i => i.title.toLowerCase().includes(target.value.toLowerCase())))
    }

    const handleClick = () => {
        setInput('')
        setArrInp([])
    }


    return (
        <>
            <input type="text" placeholder='Поиск' value={input} onChange={handleSearch} className={styles.input}/>
            <div style={arrInp.length <= 0 ? {maxHeight: 0, padding: '0 12px 0'} : {maxHeight: 176, padding: '10px 12px 21px'}} className={styles.lists}>
                <ul>
                    {
                     arrInp.map(i => <li key={i?.id}>
                         <Link to={`about/${i?.id}`} onClick={handleClick}>{i?.title}</Link>
                     </li>)
                    }
                </ul>
            </div>
        </>
    );
};

export default SearchInput;
