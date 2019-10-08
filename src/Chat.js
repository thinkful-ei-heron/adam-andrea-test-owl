import React from 'react';
import chatEvents from './store';
import participants from './store';

function Chat () {
    return (
        participants.map(person => {
            <div className='participants-list'>
                <img src= {person.avatar}/>
            <div className= 'participant-info'>
                <h6 class= 'participant-name'>{person.name}</h6>
            </div>
            </div>
            <div className='messages'>

            </div>
        }))
    
}
