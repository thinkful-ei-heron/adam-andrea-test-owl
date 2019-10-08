import React from 'react'
import {participants} from './store'

function ParticipantList() {
    participants.sort(function(a,b) {
        return b.inSession - a.inSession;
    })
    let sort = participants.sort(function(a,b) {
        return b.onStage - a.onStage;
    })
    console.log(sort);
    return (
        participants.map(person => {
            let status = ''
            if (person.inSession === true && person.onStage === false) {
                status = 'in session'
            }
            if (person.onStage === true && person.inSession === true) {
                status = 'on stage'
            }
            if (person.onStage === false && person.inSession === false) {
                status = 'left session'
            }
            return (
                <div className='participant'>
                    <img src={person.avatar} />
                    <div class='participant-info'>
                        <h6 class='participant-name'>{person.name}</h6>
                    </div>
                    <div class='participant-status'>
                        {status}
                    </div>
                </div>
            )
        }))

}

export default ParticipantList;

