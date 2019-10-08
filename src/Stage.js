import React from 'react';
import {participants} from './store';

function Stage() {
    return (
        participants.filter(person => person.onStage === true).map(person => {
            return (
                <div className='stage'>
                    <div className='contact-img-container'>
                        <div className='details-top'>
                            <span className='details-name'>{person.name}</span>
                            <div className='speaker-img'>Speaker</div>
                            <div className='volume-indicator'>Volume</div>
                        </div>
                        <img src={person.avatar} />
                        <div className='details-bottom'>
                            <div className='volume-indicator'>Volume</div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Stage;