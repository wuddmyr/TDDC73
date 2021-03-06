import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';

const Select = ({options, selected, setSelected}) => {
  const [display, setDisplay] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setDisplay(false)}>
      <View style={{...styles.main, height: display ? '100%' : 'auto'}}>
        <View style={styles.selectContainer}>
          <TouchableOpacity style={styles.select} onPress={() => setDisplay(!display)}>
            <Text style={styles.selectText}>
              {typeof options[selected] !== 'undefined' && options[selected].value}
            </Text>
            <Icon name="caret-down" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{maxHeight: '60%', display: display ? 'flex' : 'none'}}>
          <ScrollView style={styles.dropdown}>
            {options.map((item, i) => (  
              <TouchableOpacity style={styles.rowItem} key={item.key} onPress={() => {
                setSelected(i);
                setDisplay(false);
              }}>
                <Text style={{...styles.rowItemText, fontWeight: i == selected ? 'bold' : 'normal'}}>{item.value}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 9999
  },
  select: {
    backgroundColor: '#863e92',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingLeft: 10,
    paddingRight: 10
  },
  selectText: {
    fontFamily: 'Ubuntu-Regular',
    color: '#fff',
    fontSize: 20
  },
  rowItem: {
    padding: 15,
  },
  rowItemText: {
    color: '#fff',
    fontFamily: 'Ubuntu-Regular',
  },
  dropdown: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -10,
    backgroundColor: '#863e92'
  },
  selectContainer: {
    padding: 10,
    backgroundColor: '#ae55bc'
  }
});

export default Select;