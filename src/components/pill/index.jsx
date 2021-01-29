import React from 'react';
import PropTypes from 'prop-types';
import { Badge as WindmillBadge } from '@windmill/react-ui';

/*
* Displays a colored pill
*/
export const Pill = ({type, children, ...props}) => {
    // Windmill uses 'danger' to denote error badges. I prefer 'error'.
    if (type === 'error') type = 'danger';
    return (<WindmillBadge 
        className={type === 'warning' ? 'text-yellow-600 bg-yellow-100' : ''}
        type={type} {...props}>{children}</WindmillBadge>)
}

Pill.propTypes = {
    /*
    * Controls the color of the pill
    */
   type: PropTypes.oneOf(['success', 'primary', 'error', 'warning', 'neutral'])
}

Pill.defaultProps = {
    type: 'primary'
}