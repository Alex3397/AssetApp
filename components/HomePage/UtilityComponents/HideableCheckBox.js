import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CheckBox from './CheckBox';

const HideableCheckBox = (props) => {
    const { colors } = useTheme();

    var value = String(props.data).includes("false");
    var label = props.label;

    if (props.data != "false" && label != "" ) {
        return (
            <>
                <CheckBox label={label} labelStyle={{color: colors.text}} labelSide="right" value={!value} />
            </>
        );
    } else {
        return (<></>)
    }
}

export default HideableCheckBox;