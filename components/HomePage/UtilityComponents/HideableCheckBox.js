import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CheckBox from './CheckBox';

const HideableCheckBox = (props) => {
    const { colors } = useTheme();

    var value = String(props.data).includes("true");
    var label = props.label;
    var show = props.show;
    
    if (show == undefined) show = false;
    if (label == "" && !value) return(<></>);
    if (!value && !show) return(<></>)

    return (
        <>
            <CheckBox viewStyle={props.viewStyle} label={label} labelStyle={{ marginLeft: 1, color: colors.text, fontSize: 16 }} labelSide="left" value={value} />
        </>
    );
}

export default HideableCheckBox;