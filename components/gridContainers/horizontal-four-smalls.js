import React from 'react';
import CardGame from "../cards/card-game";

function HorizontalFourSmalls({games = []}) {

    if (!games) {
        return (
            <p>Loading New Games...</p>
        )
    }

    return (
        <div className={'grid grid-rows-1 grid-cols-4 grid-flow-col gap-6'}>
            {games.map((game, index) => {
                return (
                    <div key={game.id}>
                        <CardGame game={game} size={'sm'}/>
                    </div>
                )
            })}
        </div>
    );
}

export default HorizontalFourSmalls;
