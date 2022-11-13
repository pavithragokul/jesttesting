import React from 'react';
type greetProps = {
    name?: string;
}

export const Greet =  (props: greetProps) => {
    return (
        <div >
            Hello {props.name ? props.name : 'Guest'}
        </div>
    );
}