import React from 'react';
import PropTypes from "prop-types"
import Icon from "react-native-vector-icons/FontAwesome"
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function CheckBox(props) {

  const { colors } = useTheme();

  function handleChange() {
    const { onChange } = props;
    if (onChange) {
      return onChange();
    }
  }

  if (props.labelSide == "left") {
    return (
      <View style={styles.WrapperCheckBox}>
  
        <Text style={[styles.LabelCheck, props.labelStyle]}>
          {props.label}
        </Text>
        
        <TouchableOpacity onPress={handleChange} style={{ width: 25, height: 25, borderWidth: 1, borderColor: colors.text, justifyContent: "center", alignItems: "center" }}>
          {props.value ? <Icon name="check" style={{ fontSize: 16, }} color={colors.text} /> : null}
        </TouchableOpacity>
  
      </View>
    );
  } else if (props.labelSide == "right") {
    return (
      <View style={styles.WrapperCheckBox}>
  
        <TouchableOpacity onPress={handleChange} style={{ width: 25, height: 25, borderWidth: 1, borderColor: colors.text, justifyContent: "center", alignItems: "center" }}>
          {props.value ? <Icon name="check" style={{ fontSize: 16 }} color={colors.text} /> : null}
        </TouchableOpacity>
  
        <Text style={[styles.LabelCheck, props.labelStyle]}>
          {props.label}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.WrapperCheckBox}>
  
        <TouchableOpacity onPress={handleChange} style={{ width: 25, height: 25, borderWidth: 1, borderColor: colors.text, justifyContent: "center", alignItems: "center" }}>
          {props.value ? <Icon name="check" style={{ fontSize: 16, }} color={colors.text} /> : null}
        </TouchableOpacity>
  
        <Text style={[styles.LabelCheck, props.labelStyle]}>
          {props.label}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  WrapperCheckBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  LabelCheck: {
    marginLeft: 6,
    marginRight: 6,
  }
})

CheckBox.propTypes = {
  label: PropTypes.string,
  labelSide: PropTypes.string,
  labelStyle: PropTypes.object,
  iconColor: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.any,
  checkColor: PropTypes.string
}