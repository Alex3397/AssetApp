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
        return (<></>)
    } else {
        return (
            <>
                <Text style={[props.style, { color: colors.text, fontSize: 16, alignSelf: "center" }]}>{title}</Text>
            </>
        );
    }
}

export default HideableTittle;