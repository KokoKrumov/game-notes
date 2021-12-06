import React from 'react';
import CardGame from "../cards/card-game";

function HorizontalOneBigAndFourSmalls({games = [], mirrored}) {

    if (!games) {
        return (
            <p>Loading New Games...</p>
        )
    }

    if (mirrored){
        return (
            <div className={'grid grid-rows-2 grid-cols-4 grid-flow-col gap-6'}>
                {games.map((game, index) => {
                    return (
                        <div key={game.id}
                             className={`${index === games.length-1 ? 'row-span-2 col-span-2' : ''}`}
                        >
                            {index === games.length-1 ?
                                <CardGame game={game} size={'lg'}/>
                                :
                                <CardGame game={game} size={'sm'}/>
                            }
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className={'grid grid-rows-2 grid-cols-4 grid-flow-col gap-6'}>
            {games.map((game, index) => {
                return (
                    <div key={game.id}
                         className={`${index === 0 ? 'row-span-2 col-span-2' : ''}`}
                    >
                        {index === 0 ?
                            <CardGame game={game} size={'lg'}/>
                            :
                            <CardGame game={game} size={'sm'}/>
                        }
                    </div>
                )
            })}
        </div>
    );
}

export default HorizontalOneBigAndFourSmalls;
