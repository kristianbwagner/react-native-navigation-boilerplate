import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import ScreenPlaceholder from '../screens/placeholders/screen';
import OnboardingStepOne from '../screens/onboarding/StepOne';
import OnboardingStepTwo from '../screens/onboarding/StepTwo';
import OnboardingStepThree from '../screens/onboarding/StepThree';
import OnboardingStepFour from '../screens/onboarding/StepFour';
import AppLoading from '../screens/loading/AppLoading';
import TabBarIcon from '../components/TabNavigator/TabBarIcon';
import DrawerComponent from '../components/DrawerNavigator/Drawer';
import {Button} from 'react-native';

const RootNavigation = createSwitchNavigator(
  {
    // Loading state
    '/loading': {screen: AppLoading},

    // Onboarding flow
    '/onboarding': createStackNavigator({
      '/onboarding/one': {
        screen: OnboardingStepOne,
        navigationOptions: ({navigation}) => {
          return {
            title: 'Step One',
            headerRight: (
              <Button
                title="skip"
                onPress={() => navigation.navigate('/app')}
              />
            ),
          };
        },
      },
      '/onboarding/two': {
        screen: OnboardingStepTwo,
        navigationOptions: ({navigation}) => {
          return {
            title: 'Step Two',
            headerRight: (
              <Button
                title="skip"
                onPress={() => navigation.navigate('/app')}
              />
            ),
          };
        },
      },
      '/onboarding/three': {
        screen: OnboardingStepThree,
        navigationOptions: ({navigation}) => {
          return {
            title: 'Step Three',
            headerRight: (
              <Button
                title="skip"
                onPress={() => navigation.navigate('/app')}
              />
            ),
          };
        },
      },
      '/onboarding/four': {
        screen: OnboardingStepFour,
        navigationOptions: ({navigation}) => {
          return {
            title: 'Step Four',
            headerRight: (
              <Button
                title="skip"
                onPress={() => navigation.navigate('/app')}
              />
            ),
          };
        },
      },
    }),

    // Main app content
    '/app': createDrawerNavigator(
      {
        '/app-tab': createBottomTabNavigator(
          {
            '/app/one': createStackNavigator({
              '/app/one/overview': {
                screen: ScreenPlaceholder,
                navigationOptions: ({navigation}) => {
                  return {
                    title: 'Tab One Overview',
                    headerLeft: (
                      <Button
                        title="Menu"
                        onPress={() => navigation.openDrawer()}
                      />
                    ),
                  };
                },
              },
              '/app/one/detail': {
                screen: ScreenPlaceholder,
                navigationOptions: {title: 'Tab One Detail'},
              },
            }),
            '/app/two': createStackNavigator({
              '/app/two/overview': {
                screen: ScreenPlaceholder,
                navigationOptions: ({navigation}) => {
                  return {
                    title: 'Tab Two Overview',
                    headerLeft: (
                      <Button
                        title="Menu"
                        onPress={() => navigation.openDrawer()}
                      />
                    ),
                  };
                },
              },
              '/app/two/detail': {
                screen: ScreenPlaceholder,
                navigationOptions: {title: 'Tab Two Detail'},
              },
            }),
            '/app/three': createStackNavigator({
              '/app/three/overview': {
                screen: ScreenPlaceholder,
                navigationOptions: ({navigation}) => {
                  return {
                    title: 'Tab Three Overview',
                    headerLeft: (
                      <Button
                        title="Menu"
                        onPress={() => navigation.openDrawer()}
                      />
                    ),
                  };
                },
              },
              '/app/three/detail': {
                screen: ScreenPlaceholder,
                navigationOptions: {title: 'Tab Three Detail'},
              },
            }),
            '/app/four': createStackNavigator({
              '/app/four/profile': {
                screen: ScreenPlaceholder,
                navigationOptions: ({navigation}) => {
                  return {
                    title: 'Tab Four Overview',
                    headerLeft: (
                      <Button
                        title="Menu"
                        onPress={() => navigation.openDrawer()}
                      />
                    ),
                  };
                },
              },
            }),
          },
          {
            defaultNavigationOptions: {
              tabBarIcon: ({tintColor}) => {
                return <TabBarIcon color={tintColor} />;
              },
            },
          }
        ),
      },
      {
        drawerType: 'slide',
        contentComponent: ({navigation}) => (
          <DrawerComponent navigation={navigation} />
        ),
      }
    ),
  },
  {
    initialRouteName: '/loading',
  }
);

export default createAppContainer(RootNavigation);
