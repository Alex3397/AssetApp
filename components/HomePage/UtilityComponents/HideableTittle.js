import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const HideableTittle = (props) => {
    const { colors } = useTheme();
    let title = "";
    let show = props.show == undefined ? false : props.show;

    if (props.right == "" && props.left == "") {
        title = "";
    } else if (props.right == "" && props.left != "") {
        title = props.left;
    } else if (props.right != "" && props.left == "") {
        title = props.right;
    } else if (props.right != "" && props.left != "") {
        title = props.right + " - " + props.left;
    }

    if (props.right == "" && props.left == "" && !show) {
        return(<></>)
    } else {
        if (props.style == null) {
            return (
                <>
                    <Text style={{ padding: 2, color: colors.text, fontSize: 18, alignSelf: "center" }}>{title}</Text>
                </>
            );
        } else {
            return (
                <>
                    <Text style={props.style}>{title}</Text>
                </>
            );
        }
    }
}

export default HideableTittle;