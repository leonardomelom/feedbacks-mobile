import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1d',
    color: '#f0f1f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: getBottomSpace() + 16,
    right: 16,
  }
});