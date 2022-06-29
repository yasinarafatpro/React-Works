import React from 'react'
import withCounter from '../../hoc/withCounter';

const Click = (props) => {
    const{count,incrementCount}=props;
    return (
            <div>
                <button onClick={incrementCount}>{count}</button>
            </div>
    )
}
export default withCounter(Click);