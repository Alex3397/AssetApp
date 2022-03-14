import React, { useRef, useState } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

const TextFieldComponent = (props) => {

        const [forceWidth, setForceWidth] = useState(false);
        const [width, setWidth] = useState(props.label.length * 6);
        const [left, setLeft] = useState(props.label.length * 6);
        const [secondWidth, setSecondWidth] = useState(50);
        const [top, setTop] = useState(-20);
        const [maxWidth, setMaxWidth] = useState(props.label.length * 12);
        const [height, setHeight] = useState(18);
        const [heightSet, setHeightSet] = useState(false);
        
        const colors = props.theme;
        
        let style = {};
        let totalWidth = (width + secondWidth);
        let letHeight = height;
        let label = props.label;
        let data = props.data;

        const parentWidth = props.parentWidth;
        const onLayout = (event) => {
            if (!forceWidth) {
                setWidth(event.nativeEvent.layout.width);
                setLeft(event.nativeEvent.layout.width);
            }
            setHeight(event.nativeEvent.layout.height);
        };

        if (props.inline) style = { alignSelf: "flex-end", marginRight: 1, marginBottom: -21.25, top: -21.25 }

        if (totalWidth+30 > parentWidth && !forceWidth) {
            setMaxWidth(150);
            setTop(-30);
            setLeft(160);
            setForceWidth(true);
        }
        if (letHeight != 18 && maxWidth == 150 && !heightSet) {
            setTop(-(22 + (height/2.8)));
            setHeightSet(true);
        }

        if (secondWidth > 150) { console.log("label: " + label + " : " + data) }

        return (
            <View style={[ props.style, style, { width: totalWidth, alignContent: "center" }]} onLayout={props.onLayout} >
                <Text style={{ padding: 2, color: colors.text, fontSize: 16, maxWidth: maxWidth, textAlign: "center", alignSelf: "flex-start" }} onLayout={(event) => { onLayout(event) }} >{label}:</Text>
                <Text style={{ padding: 2, color: colors.text, top: top, marginLeft: 5, marginBottom: -20, left: left, paddingLeft: 10, paddingRight: 10, backgroundColor: colors.bubble, alignSelf: "flex-start", textAlign: "center", textAlignVertical: "center", borderRadius: 15, minWidth: 30, maxWidth: maxWidth+45 }} onLayout={(event) => { setSecondWidth(event.nativeEvent.layout.width); }} >{data}</Text>
            </View>
        );
}

const HideableTextField = (props) => {
    const { colors } = useTheme();
    const show = props.show == undefined ? false : props.show;
    const label = props.label;
    const inline = props.inline;
    const parentWidth = props.parentWidth;

    if (label == "" || label == undefined) return (<></>);
    else
        if (!show) {
            return (<></>)
        } else {
            return (
                <>
                    <TextFieldComponent parentWidth={parentWidth} inline={inline} data={props.data} label={label} show={show} theme={colors} onLayout={props.onLayout} />
                </>
            );
        }
}

export default HideableTextField;