import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

interface Props {
  navigation: any;
}

function OnboardingStepFour({navigation}: Props) {
  function nextStepWasPressed() {
    navigation.navigate('/app');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lorem Ipsum</Text>
      <Text style={styles.paragraph}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          color="white"
          title="Go to app"
          onPress={() => nextStepWasPressed()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 'auto',
    backgroundColor: '#60b600',
    height: 44,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
});

export default OnboardingStepFour;
