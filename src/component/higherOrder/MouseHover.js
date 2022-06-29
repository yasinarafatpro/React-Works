import React from 'react';
import withCounter from '../../hoc/withCounter';

const MouseHover = (props) => {
    const {count,incrementCount}=props
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Mouse hovered {count}</h1>
        </div>
    )
}

export default withCounter(MouseHover)