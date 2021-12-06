import React from 'react';
import CardGameMain from "../cards/card-game-main";

function ListHorizontal({games}) {

    return (
        <ul className={'grid grid-cols-5 gap-x-5 gap-y-8'}>
            {games.map(game =>
                <li key={game.title}>
                    <CardGameMain game={game} />
                </li>
            )}
        </ul>
    );
}

export default ListHorizontal;
