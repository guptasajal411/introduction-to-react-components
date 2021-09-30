import React from 'react';
import emojipedia from '../emojipedia'

function createTerm(term) {
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label={term.name}>
                    {term.emoji}
                </span>
                <span>{term.name}</span>
            </dt>
            <dd>{term.meaning}</dd>
        </div>
    );
}

function Emojipedia() {
    return (
        <div>
            <h1>
                <span>Emojipedia</span>
            </h1>

            <dl className="dictionary">
                {emojipedia.map(createTerm)}
            </dl>
        </div>
    );
}

export default Emojipedia;