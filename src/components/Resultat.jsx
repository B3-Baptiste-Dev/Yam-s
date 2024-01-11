import React from 'react';
import { useLocation } from 'react-router-dom';
import './Results.css';

const Results = () => {
    const location = useLocation();
    const { dice } = location.state || { dice: [] };

    const checkForBrelan = (dice) => {
        const counts = dice.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});

        return Object.values(counts).some(count => count >= 3);
    };

    return (
        <div className="results-container">
            <h1 className="results-title">Résultats</h1>
            <div className="dice-results">
                <p>Résultats des dés:</p>
                <div className="dice-container">
                    {dice.map((value, index) => (
                        <div key={index} className={`die results-die`}>
                            {value}
                        </div>
                    ))}
                </div>
            </div>
            <div className="brelan-result">
                {checkForBrelan(dice)
                    ? <p className="brelan">Vous avez un brelan !</p>
                    : <p className="no-brelan">Vous n'avez pas de brelan.</p>
                }
            </div>
        </div>
    );
};

export default Results;
