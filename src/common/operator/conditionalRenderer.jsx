import React from 'react';

const ConditionalRenderer = props => {
    const { children } = props;
    if (props.test) {
        return children;
    }
    return false;
}

export default ConditionalRenderer;
