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

const RootNavigation = createSwitchNavigator(
  {
    // Loading state
    '/loading': {screen: AppLoading},

    // Onboarding flow
    '/onboarding': createStackNavigator({
      '/onboarding/one': {
        screen: OnboardingStepOne,
        navigationOptions: {title: 'Step One'},
      },
      '/onboarding/two': {
        screen: OnboardingStepTwo,
        navigationOptions: {title: 'Step Two'},
      },
      '/onboarding/three': {
        screen: OnboardingStepThree,
        navigationOptions: {title: 'Step Three'},
      },
      '/onboarding/four': {
        screen: OnboardingStepFour,
        navigationOptions: {title: 'Step Four'},
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
                navigationOptions: {title: 'Tab One Overview'},
              },
              '/app/one/detail': {
                screen: ScreenPlaceholder,
                navigationOptions: {title: 'Tab One Detail'},
              },
            }),
            '/app/two': createStackNavigator({
              '/app/two/overview': {
                screen: ScreenPlaceholder,
                navigationOptions: {title: 'Tab Two Overview'},
              },
              '/app/two/detail': {
                screen: ScreenPlaceholder,
                navigationOptions: {title: 'Tab Two Detail'},
              },
            }),
            '/app/three': createStackNavigator({
              '/app/three/overview': {
                screen: ScreenPlaceholder,
                navigationOptions: {title: 'Tab Three Overview'},
              },
              '/app/three/detail': {
                screen: ScreenPlaceholder,
                navigationOptions: {title: 'Tab Three Detail'},
              },
            }),
            '/app/four': createStackNavigator({
              '/app/four/profile': {
                screen: ScreenPlaceholder,
                navigationOptions: {title: 'Tab Four Overview'},
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
