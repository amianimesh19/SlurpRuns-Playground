// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * Generated with the TypeScript template
//  * https://github.com/react-native-community/react-native-template-typescript
//  *
//  * @format
//  */

// import React, {type PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import Icon from 'react-native-vector-icons/MaterialIcons';
// import ReloadInstructions from './node_modules/react-native/Libraries/NewAppScreen/components/ReloadInstructions';
// import Colors from './node_modules/react-native/Libraries/NewAppScreen/components/Colors';
// import Header from './node_modules/react-native/Libraries/NewAppScreen/components/Header';
// import DebugInstructions from './node_modules/react-native/Libraries/NewAppScreen/components/DebugInstructions';
// // import LinkList from './node_modules/react-native/Libraries/NewAppScreen/components/LearnMoreLinks';
// import LearnMoreLinks from './node_modules/react-native/Libraries/NewAppScreen/components/LearnMoreLinks';

// import {useTheme} from './common/util';

// const Section: React.FC<
//   PropsWithChildren<{
//     title: string;
//   }>
// > = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const currTheme = useTheme();

//   return (
//     <SafeAreaView style={styles.main}>
//       {/* <Icon size={24} name={'bookmark'} /> */}
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />

//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>

//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           {/* <LearnMoreLinks /> */}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     paddingTop: 40,
//     paddingHorizontal: 10,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React, {useState} from 'react';
import {Platform} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
// import {useTheme} from './common/util';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  // const currTheme = useTheme();
  const [count, setCount] = useState(0);
  const rnType =
    Platform.OS === 'web' ? 'React Native Web' : 'React Native Android/IOS';
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello from {rnType}!</Text>
      <Icon size={24} name={'group'} />
      <Button
        onPress={() => setCount(count + 1)}
        mode={'contained'}
        // labelStyle={{color: currTheme.colors.accent}}
      >
        Click me!
      </Button>

      <Text>You clicked {count} times!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 40,
  },
});

export default App;
