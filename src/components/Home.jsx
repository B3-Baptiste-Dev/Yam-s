import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [diceResults, setDiceResults] = useState(Array(5).fill(null));
    const [selectedDice, setSelectedDice] = useState(Array(5).fill(false));
    const [rollCount, setRollCount] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);  // Nouvel état pour suivre si le jeu a commencé

    const handlePlay = () => {
        setDiceResults(diceResults.map((value, index) => selectedDice[index] ? value : Math.ceil(Math.random() * 6)));
        setSelectedDice(Array(5).fill(false)); // Reset selection after roll
        setRollCount(rollCount + 1);
        setGameStarted(true);  // Mettre à jour l'état pour indiquer que le jeu a commencé
    };

    const toggleDieSelection = (index) => {
        setSelectedDice(selectedDice.map((selected, i) => (i === index ? !selected : selected)));
    };

    const handleResult = () => {
        navigate('/resultat', { state: { dice: diceResults } });
    };

    return (
        <div className="home-container">
            <button onClick={handlePlay} disabled={rollCount >= 3} className="button">Jouer</button>
            {rollCount >= 3 && (
                <button onClick={handleResult} className="button">Résultat</button>
            )}
            {gameStarted && (
                <div className="dice-container">
                    {diceResults.map((value, index) => (
                        <div key={index} onClick={() => toggleDieSelection(index)} className={`die home-die ${selectedDice[index] ? 'selected' : ''}`}>
                            {value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
