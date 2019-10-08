import React from 'react';
import {chatEvents} from './store';
import {participants} from './store';


function Chat () {
    
    return (
        chatEvents.map(event => {
            let timestamp= new Date(event.timestamp);
            let time= new Date(event.time);
            <div className='message'>
                <img src= {person.avatar}/>
            <div className= 'message-body'>
                if(event.message){
                <h6 className= 'message-body-name'>{person.name}</h6>
                <span className= 'message-body-time'>{time}</span>
                <div className= 'message-body-content'>
                    <p>{event.message}</p>
                </div>
                }
            </div>
            
            </div>
    
        }))
    
}
