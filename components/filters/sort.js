import React from 'react';
import {useRef} from "react";
import SearchIcon from '../icons/search-icon'

function Sort(props) {
    const sortOptionYear = useRef();
    const sortOptionMonth = useRef();

    function handleSubmit(e){
        e.preventDefault()
        const selectedOptionYear = sortOptionYear.current.value
        const selectedOptionMonth = sortOptionMonth.current.value
        props.onSearch(selectedOptionYear, selectedOptionMonth)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <select id='year' type="text" ref={sortOptionYear}>
                    <option value="none">-</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
                <select id='month' type="text" ref={sortOptionMonth}>
                    <option value="none">-</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                </select>
                <button>
                    <SearchIcon color={'red'}/>
                </button>
            </div>
        </form>
    );
}

export default Sort;
