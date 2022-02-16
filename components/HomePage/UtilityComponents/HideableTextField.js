import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const HideableTextField = (props) => {
    const { colors } = useTheme();
    const show = props.show == undefined ? false : props.show;
    const label = props.label;

    //if (label == "" || label == undefined)  return(<></>);
    //else 
    if (!show) {
        return(<></>)
    } else {
        if (props.style == null) {
            return (
                <>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 16 }}>{props.label}: {props.data}</Text>
                </>
            );
        } else {
            return (
                <>
                    <Text style={props.style}>{props.label}: {props.data}</Text>
                </>
            );
        }
    }
}

export default HideableTextField;