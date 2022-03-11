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
    const [gameReady, setGameReady] = React.useState(false);
    const [playingWithPC, setPlayingWithPC] = React.useState(false);
    const [color1, color2, color3 ] = ['#FFFFFF', '#9FD19D', 'gold'];
    return (
        <GameContext.Provider value={{
            turn,
            setTurn,
            board,
            setBoard,
            defaultBoard,
            color1,
            color2,
            color3,
            gameReady,
            setGameReady,
            playingWithPC, 
            setPlayingWithPC,
        }}>
            {props.children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProvider };