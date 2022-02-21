import React, { useRef, useState } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const HideableTextField = (props) => {
    const { colors } = useTheme();
    const show = props.show == undefined ? false : props.show;
    const label = props.label;
    const inline = props.inline;
    const [firstWidth, setWidth] = useState();

    if (label == "" || label == undefined) return (<></>);
    else
        if (!show) {
            return (<></>)
        } else {
            if (!inline && inline == undefined) {
                return (
                    <>
                        <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-start" }} onLayout={(event) => { setWidth(event.nativeEvent.layout.width); }} >{props.label}: </Text>
                        <Text style={{ padding: 2, color: colors.text, paddingLeft: 10, paddingRight: 10, marginBottom: -20, backgroundColor: "#313131", alignSelf: "flex-start", textAlign: "center", borderRadius: 15, top: -20, left: firstWidth, minWidth: 30 }}>{props.data}</Text>
                    </>
                );
            } else {
                return (
                    <>
                        <View style={{padding: 2, color: colors.text, fontSize: 16 }}>
                            <Text style={{ padding: 2, color: colors.text, fontSize: 16, alignSelf: "flex-start" }} onLayout={(event) => { setWidth(event.nativeEvent.layout.width); }} >{props.label}: </Text>
                            <Text style={{ padding: 2, color: colors.text, paddingLeft: 10, paddingRight: 10, marginBottom: -20, backgroundColor: "#313131", alignSelf: "flex-start", textAlign: "center", borderRadius: 15, top: -20, left: firstWidth, minWidth: 30 }}>{props.data}</Text>
                        </View>
                    </>
                );
            }
        }
}

export default HideableTextField;