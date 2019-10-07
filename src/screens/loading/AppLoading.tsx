import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {
  navigation: any;
}

function OnboardingStepOne({navigation}: Props) {
  setTimeout(() => {
    navigation.navigate('/onboarding');
  }, 2000);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default OnboardingStepOne;
