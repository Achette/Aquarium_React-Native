import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  tabBar: {
    borderTopColor: Colors.primary,
    height: 70,
    backgroundColor: Colors.background,
  },
  tabBarLabel: {
    fontSize: 12,
    color: Colors.primary,
    paddingBottom: 10,
  },
  tabBarInactive: {
    color: Colors.inactiveTab,
  },
  icon: {
    marginTop: 12,
    width: 40,
    resizeMode: 'contain',
  },
});
