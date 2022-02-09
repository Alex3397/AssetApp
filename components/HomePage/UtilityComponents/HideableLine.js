import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from './HideableTextField';
import HideableCheckBox from './HideableCheckBox';

const HideableLine = (props) => {
    const { colors } = useTheme();

    var rightLabel = props.rightLabel;
    var rightData = props.rightData;
    var leftLabel = props.leftLabel;
    var leftData = props.leftData;
    var type = props.type;
    var rightShow = props.rightShow;
    var leftShow = props.leftShow;

    var fullLength = String(rightLabel).length + String(rightData).length + String(leftLabel).length + String(leftData).length;

    if ((rightLabel == "" && rightData == "" && leftLabel == "" && leftData == "") && !show) {
        return (<></>)
    } else if (type == undefined || type == "text" ) {
        if (fullLength < 52) {
            return (
                <>
                    <HideableTextField label={rightLabel} data={rightData} show={rightShow} />
                    <HideableTextField style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end", top: -22, marginBottom: -22 }} label={leftLabel} data={leftData} show={leftShow} />
                </>
            );
        } else {
            return(
                <>
                    <HideableTextField label={rightLabel} data={rightData} show={rightShow} />
                    <HideableTextField style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-end"}} label={leftLabel} data={leftData} show={leftShow} />
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
            return(
                <>
                    <HideableCheckBox label={rightLabel} data={rightData} show={rightShow} />
                    <HideableCheckBox viewStyle={{ alignSelf: "flex-end" }} label={leftLabel} data={leftData} show={leftShow} />
                </>
            )
        }
    }
}

export default HideableLine;