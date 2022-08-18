import React from 'react';
type greetProps = {
    name?: string;
}
export const Greet =  (props: greetProps) => {
    return (
        <div>
            Greet {props.name}
        </div>
    );
}