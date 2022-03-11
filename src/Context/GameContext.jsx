import React from 'react';

const GameContext = React.createContext('lol');

function GameProvider(props) {
    const defaultBoard = [
        '', '', '',
        '', '', '',
        '', '', '',
    ]
    const [board, setBoard] = React.useState([...defaultBoard])
    const [turn, setTurn] = React.useState('x')
    const [gameReady, setGameReady] = React.useState(true);
    const [color1, color2] = ['gold', 'aquamarine'];
    return (
        <GameContext.Provider value={{
            turn,
            setTurn,
            board,
            setBoard,
            defaultBoard,
            color1,
            color2,
            gameReady,
            setGameReady,
        }}>
            {props.children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProvider };