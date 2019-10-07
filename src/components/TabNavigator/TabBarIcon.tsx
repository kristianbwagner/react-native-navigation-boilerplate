import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  color: string;
}

function TabBarIcon(props) {
  return (
    <View
      style={{
        ...styles.container,
        ...{backgroundColor: props.color},
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: 'red',
  },
});

export default TabBarIcon;
