import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/Colors';

export const button = StyleSheet.create({
  button: {
    height: 29,
    borderRadius: 8,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: Colors.white,
    alignItems: 'center',
  },
});

export const input_styles = StyleSheet.create({
  inputContainer: {
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    backgroundColor: Colors.light_gray,
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 8,
  },
  shadowInput: {
    shadowOffset: {width: 0, height: 2},
    shadowColor: Colors.gray,
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 2,
  },
  inputStyle: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    lineHeight: 22,
    color: Colors.black,
  },
  labelLine: {
    left: 0,
    right: 0,
    position: 'absolute',
    top: 8,
    height: 1,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.red,
    marginTop: 6,
  },
});

export const loader_styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const postCard_styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    marginLeft: 9,
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 14,
    color: Colors.black,
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 375,
  },
  like_text: {
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 16,
    marginLeft: 12,
    color: Colors.black,
  },
  comment: {
    marginTop: 6,
  },
  text: {
    fontSize: 14,
    lineHeight: 17,
    color: Colors.black,
    marginLeft: 12,
  },
  left: {
    marginLeft: 11,
  },
});
