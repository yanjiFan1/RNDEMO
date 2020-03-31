/**
 * Sample React Native Root
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <Text>烟祭111</Text>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>Root.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
// import Home from '../pages/home/Home';
// import About from '../pages/about/About';
// import { StackNavigator } from 'react-navigation';
// import Splash from '../pages/Splash';
// import CategoryContainer from '../containers/CategoryContainer';
// import MainContainer from '../containers/MainContainer';
// import WebViewPage from '../pages/ItemDetail/WebViewPage';
// import Feedback from '../pages/Feedback/Feedback';
// import About from '../pages/About/About';

// const TabContainer = TabNavigator(
//   {
//     Main: { screen: MainContainer },
//     Category: { screen: CategoryContainer },
//     Feedback: { screen: Feedback },
//     About: { screen: About }
//   },
//   {
//     lazy: true,
//     tabBarPosition: 'bottom',
//     tabBarOptions: {
//       activeTintColor: '#3e9ce9',
//       inactiveTintColor: '#999999',
//       showIcon: true,
//       style: {
//         backgroundColor: '#fff'
//       },
//       indicatorStyle: {
//         opacity: 0
//       },
//       tabStyle: {
//         padding: 0
//       }
//     }
//   }
// );
// const App = StackNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         headerLeft: null
//       }
//     },
//     Web: { screen: About }
//   },
//   {
//     initialRouteName: 'Home',
//     headerMode: 'screen',
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#3e9ce9'
//       },
//       headerTitleStyle: {
//         color: '#fff',
//         fontSize: 20
//       },
//       headerTintColor: '#fff'
//     }
//   }
// );

export default App;
