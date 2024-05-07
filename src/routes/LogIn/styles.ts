import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  page: {
    flex:1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: Colors.primary,
    marginTop: 52,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.subtitleText,
    opacity: 0.6,
    marginTop: 8,
  },
  input: {
    marginBottom: 8,
  },
  inputContainer: {
    marginTop: 16,
    width: '80%',
    opacity: 0.6,
  },
  error: {
    color: Colors.inputErrorText,
  },
  placeholderText: {
    color: Colors.placeholderText,
  },
  infoText: {
    flexDirection: 'row',
    marginVertical: 15,
  },
});
