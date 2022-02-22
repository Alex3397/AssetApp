import React, { useRef, useState } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

class TextFieldComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            forceWidth: false,
            width: this.props.label.length * 6,
            secondWidth: 50,
            top: -20
        }
    }

    render() {
        const colors = this.props.theme;
        
        let style = {};
        let totalWidth = (this.state.width + this.state.secondWidth);
        const parentWidth = this.props.parentWidth;

        if (this.props.inline) style = { alignSelf: "flex-end", marginBottom: -21, top: -21 }

        console.log("Parent Width: " + parentWidth);
        console.log(this.props.label + " : " + this.props.data + " : " + totalWidth);

        if (totalWidth+30 > parentWidth) {}

        return (
            <View style={[this.props.style, style, { width: totalWidth, alignContent: "center" }]} onLayout={this.props.onLayout} >
                <Text style={{ padding: 2, color: colors.text, fontSize: 16, textAlign: "center", maxWidth: 120, alignSelf: "flex-start" }} onLayout={(event) => { if (!this.state.forceWidth) this.setState({ width: event.nativeEvent.layout.width }); }} >{this.props.label}: </Text>
                <Text style={{ padding: 2, color: colors.text, top: this.state.top, marginBottom: -20, left: this.state.width, paddingLeft: 10, paddingRight: 10, backgroundColor: "#313131", alignSelf: "flex-start", textAlign: "center", textAlignVertical: "center", borderRadius: 15, minWidth: 30 }} onLayout={(event) => { this.setState({ secondWidth: event.nativeEvent.layout.width }); }} >{this.props.data}</Text>
            </View>
        );
    }
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