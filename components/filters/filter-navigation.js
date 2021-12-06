import React from 'react';
import styled from "styled-components";
import Link from 'next/link'
import SearchIcon from '../icons/search-icon'
import ListBoxSelect from "./list-box";

function FilterNavigation() {

    const filters = [
        {
            id: 1,
            name: 'Filter 1'
        },
        {
            id: 2,
            name: 'Filter 2'
        },
        {
            id: 3,
            name: 'Filter 3'
        },
        {
            id: 4,
            name: 'Filter 4'
        },
    ]

    return (
        <div className={'relative my-14'}>
            <PolygonShapeNav
                className={'relative z-10 bg-woodsmoke mx-auto flex justify-between'}
            >
            <div>
                <ul className={'flex justify-items-start'}>
                    {filters.map((filter, index) => {
                        return (
                            <li key={filter.id} className={'-mr-3'}>
                                <PolygonShapeNavLink>
                                    <Link href="">
                                        <a className={'block px-11 py-2.5 font-roboto-regular text-20 text-white hover:bg-blaze-orange'}>
                                            {filter.name}
                                        </a>
                                    </Link>
                                </PolygonShapeNavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            </PolygonShapeNav>
            <div className={'absolute top-0 right-0 w-auto h-full z-10 py-1.5 pr-5'}>
                <ListBoxSelect/>
            </div>
            <PolygonShapeNavShadow
                className={'absolute top-3.5 left-0 w-full h-full z-0 bg-tuna'}/>
        </div>
    );
}

export default FilterNavigation;


const PolygonShapeNav = styled.div`
  width: calc(100% - 10px);
  clip-path: polygon(0 0, 100% 0, 99% 100%, 1% 100%);

`
const PolygonShapeNavShadow = styled.div`
  clip-path: polygon(0 0, 100% 0, 99% 100%, 1% 100%);

`
const PolygonShapeNavLink = styled.div`
  clip-path: polygon(0 0, 93% 0, 100% 100%, 7% 100%);
`
