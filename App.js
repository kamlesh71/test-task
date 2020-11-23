import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';

const { fontScale } = Dimensions.get('window');

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <View style={styles.rightBg} />
          <View style={styles.boxBody}>
            <View style={styles.bodySquare} />
            <Text style={styles.bodyText}>Name</Text>
            <View style={styles.bodySquare} />
          </View>
          <View style={styles.boxFooter}>
            <Text style={styles.footerText}>Balance</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const colors = {
  primary: '#0f1c22',
  gray: '#f4f5fb',
  white: '#ffffff'
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: colors.white,
    width: '64%',
    aspectRatio: 1.175,
    borderRadius: 15,
    overflow: 'hidden'
  },
  rightBg: {
    position: 'absolute',
    backgroundColor: colors.gray,
    top: 0,
    left: 0,
    bottom: 0,
    aspectRatio: .5
  },
  boxBody: {
    flex: 1,
    borderBottomLeftRadius: 40,
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: colors.white,
    paddingHorizontal: '6%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  bodySquare: {
    backgroundColor: colors.primary,
    aspectRatio: 1,
    flex: .24,
    borderRadius: 10,
    elevation: 4
  },
  bodyText: {
    fontSize: 21 / fontScale,
    color: colors.primary,
  },
  boxFooter: {
    backgroundColor: colors.gray,
    flex: 1,
    justifyContent: 'center',
    borderTopRightRadius: 40
  },
  footerText: {
    textAlign: 'center',
    fontSize: 24 / fontScale,
    color: colors.primary
  }
});

export default App;
