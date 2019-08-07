import React from 'react';

interface nameProps{
    name: string,
    sName?: string
}
const Name: React.SFC<nameProps> = (props) => <span className='title'>{props.name} {props.sName}</span>

export default Name;