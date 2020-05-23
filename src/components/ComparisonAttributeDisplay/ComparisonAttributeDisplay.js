import React from 'react';
import { green, yellow, red } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import './ComparisonAttributeDisplay.scss'

function getServerityIcon(severity) {
    switch(severity) {
        case 'good':
            return <CheckIcon
                    style={{ color: green[500] }}
                    fontSize="small" />;
        case 'average':
            return <WarningIcon
                    style={{ color: yellow[700] }}
                    fontSize="small" />;
        case 'bad':
            return <CloseIcon
                    style={{ color: red[500] }}
                    fontSize="small" />;
        default:
            return '';
    }
}
function ComparisonAttributeDisplay(props) {
    const displayText = props.text;
    const severity = props.severity;

    return <div className="display">{displayText}{getServerityIcon(severity)}</div>;
}

export default ComparisonAttributeDisplay;