import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from './HideableTextField';
import HideableCheckBox from './HideableCheckBox';
import PropTypes from "prop-types";

const HideableLine = (props) => {
    const { colors } = useTheme();
    const window = useWindowDimensions();

    let rightLabel = props.rightLabel;
    let rightData = props.rightData;
    let leftLabel = props.leftLabel;
    let leftData = props.leftData;
    let type = props.type;
    let rightShow = props.rightShow == undefined ? false : props.rightShow;
    let leftShow = props.leftShow == undefined ? false : props.leftShow;

    let fullLength = String(rightLabel).length + String(rightData).length + String(leftLabel).length + String(leftData).length;

    if (!rightShow && !leftShow) {
        return (<></>)
    } else if (type == undefined || type == "text") {
        if (fullLength < 53) {
            return (
                <>
                    <HideableTextField label={leftLabel} data={leftData} show={leftShow} />
                    <HideableTextField inline={true} label={rightLabel} data={rightData} show={rightShow} />
                </>
            );
        } else {
            return (
                <>
                    <HideableTextField label={leftLabel} data={leftData} show={leftShow} />
                    <HideableTextField label={rightLabel} data={rightData} show={rightShow} />
                </>
            )
        }
    } else if (type == "checkbox") {
        if (fullLength < 52) {
            return (
                <>
                    <HideableCheckBox label={leftLabel} data={leftData} show={leftShow} />
                    <HideableCheckBox viewStyle={{ alignSelf: "flex-end", top: -25, marginBottom: -25 }} label={rightLabel} data={rightData} show={rightShow} />
                </>
            );
        } else {
            return (
                <>
                    <HideableCheckBox label={leftLabel} data={leftData} show={leftShow} />
                    <HideableCheckBox label={rightLabel} data={rightData} show={rightShow} />
                </>
            )
        }
    }
}

HideableLine.propTypes = {
    rightLabel: PropTypes.any,
    rightData: PropTypes.any,
    leftLabel: PropTypes.any,
    leftData: PropTypes.any,
    rightShow: PropTypes.any,
    leftShow: PropTypes.any,
    type: PropTypes.any
}

export default HideableLine;