import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HideableTextField from './HideableTextField';

const HideableInlineTittle = (props) => {
    const { colors } = useTheme();
    let title = "";
    let show = props.show == undefined ? false : props.show;
    let label = props.label;

    if (props.right == "" && props.left == "") {
        title = "";
    } else if (props.right == "" && props.left != "") {
        title = props.left;
    } else if (props.right != "" && props.left == "") {
        title = props.right;
    } else if (props.right != "" && props.left != "") {
        title = props.left + " - " + props.right;
    }

    if (props.right == "" && props.left == "" && !show) {
        return(<></>)
    } else {
        if (props.style == null) {
            return (
                <>
                    <HideableTextField show={show} label={label} data={title} />
                </>
            );
        } else {
            return (
                <>
                    <HideableTextField show={show} style={props.style} label={label} data={title} />
                </>
            );
        }
    }
}

export default HideableInlineTittle;