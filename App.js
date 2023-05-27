/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import colors from './src/utils/colors'
import Form from './src/components/Form';




function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    <StatusBar barStyle={'light-content'}/>
    <SafeAreaView style={styles.safeArea}>
     <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
     <Form/>
     </SafeAreaView>
     <View>
      <Text>ResultDO</Text>
    </View>
    <View>
      <Text>FOOTER</Text>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor:colors.PRIMARY_COLOR,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
  },
  titleApp:{
    fontSize:25,
    fontWeight:'bold',
    color:"#fff",
    marginTop:15
  }
});

export default App;
