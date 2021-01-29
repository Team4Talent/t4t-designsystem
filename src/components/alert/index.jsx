import React from 'react';
import PropTypes from 'prop-types';
import { Alert as WindmillAlert } from '@windmill/react-ui'

/*
* Displays a notification with a specific color.
*/
export const Alert = ({type, children, ...props}) => {
    // Windmill uses 'danger' to denote error alerts. I prefer 'error'.
    if (type === 'error') type = 'danger';
    return (<WindmillAlert type={type} {...props}>{children}</WindmillAlert>);
}

Alert.propTypes = {
    /*
    * Controls the color of the alert
    */
   type: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'neutral'])
}

Alert.defaultProps = {
    type: 'info'
}