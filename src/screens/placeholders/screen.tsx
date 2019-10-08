import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

interface Props {
  navigation: any;
}

function ScreenPlaceholder({navigation}: Props) {
  const routeName = navigation.state.routeName;
  return (
    <View style={styles.container}>
      <Text>Screen {routeName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScreenPlaceholder;
