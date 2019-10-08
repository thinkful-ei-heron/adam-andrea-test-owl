import React from 'react'
import participants from './store'

function ParticipantList() {
        // console.log(participants.sort(person => {
        //     person.inSession === true
        // }));

        return (
            participants.map(person => {
                let status= ''
                if(person.onStage === true){
                    status= 'on stage'
                }
                if(person.inSession === true){
                    status= 'in session'
                }
                else{
                    status= 'left session'
                }
                return (
                <div className='participant'>
                <img src= {person.avatar}/>
                <div class= 'participant-info'>
                    <h6 class= 'participant-name'>{person.name}</h6>
                </div>
                <div class='participant-status'>
                    {status}
                </div>
                </div>
                )   
            }))
        
}

export default ParticipantList;

