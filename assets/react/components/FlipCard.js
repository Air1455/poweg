import React, { useState } from 'react';
import {Card} from "@mui/material";
import BackgroundAnimate from "./BackgroundAnimate";

const FlipCard = ({ frontText, backBody, backTitle }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flip-card">
            <div className="flip-card__side flip-card__side--front">
                <BackgroundAnimate />
                <div className="flip-card__theme">
                    <h1>{frontText}</h1>
                </div>
            </div>
            <div className="flip-card__side flip-card__side--back">
                <div className="flip-card__side--back-header">
                    <BackgroundAnimate />
                    <h2>{backTitle}</h2>
                </div>
                <div className="flip-card__side--back-body">
                    {backBody}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
