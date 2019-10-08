import React from 'react';
import {ScrollView, SafeAreaView, StyleSheet, Button} from 'react-native';

interface Props {
  navigation: any;
}

function CustomDrawerContentComponent({navigation}: Props) {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Button
          title="Tab One"
          onPress={() => navigation.navigate('/app/one')}
        />
        <Button
          title="Tab Two"
          onPress={() => navigation.navigate('/app/two')}
        />
        <Button
          title="Tab Three"
          onPress={() => navigation.navigate('/app/three')}
        />
        <Button
          title="Tab Four"
          onPress={() => navigation.navigate('/app/four')}
        />
        <Button
          title="Onboarding"
          onPress={() => navigation.navigate('/onboarding')}
        />
        <Button
          title="Reload app"
          onPress={() => navigation.navigate('/loading')}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: 'lightgrey',
  },
});

export default CustomDrawerContentComponent;
