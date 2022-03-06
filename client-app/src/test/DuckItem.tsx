import React from 'react';

import {IDuck} from './demo'

interface Props {
    duck: IDuck;
}

export default function DuckItem({duck}: Props) { // props here and then call {props.duck.name} can be just access here like this => {duck}
    return (
        <div>
            <span> {duck.name} </span>
            <button onClick={()=>{duck.makeSound(duck.name + ' quack')}}>Make sound</button>
        </div>
    )
}