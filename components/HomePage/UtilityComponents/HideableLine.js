import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from './HideableTextField';
import HideableCheckBox from './HideableCheckBox';
import PropTypes from "prop-types";

const HideableLine = (props) => {
    const { colors } = useTheme();

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
        if (fullLength < 52) {
            return (
                <>
                    <HideableTextField label={rightLabel} data={rightData} show={rightShow} />
                    <HideableTextField style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }} label={leftLabel} data={leftData} show={leftShow} />
                </>
            );
        } else {
            return (
                <>
                    <HideableTextField label={rightLabel} data={rightData} show={rightShow} />
                    <HideableTextField label={leftLabel} data={leftData} show={leftShow} />
                </>
            )
        }
    } else if (type == "checkbox") {
        if (fullLength < 52) {
            return (
                <>
                    <HideableCheckBox label={rightLabel} data={rightData} show={rightShow} />
                    <HideableCheckBox viewStyle={{ alignSelf: "flex-end", top: -25, marginBottom: -25 }} label={leftLabel} data={leftData} show={leftShow} />
                </>
            );
        } else {
            return (
                <>
                    <HideableCheckBox label={rightLabel} data={rightData} show={rightShow} />
                    <HideableCheckBox label={leftLabel} data={leftData} show={leftShow} />
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