import {Colors} from '../styles/Colors';
import {StyleSheet} from 'react-native';
import {DataHelper} from '../heplers/DataHelper';

export const auth_screen_styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    marginTop: 64,
  },
  wrapper: {
    marginTop: 32,
  },
});

export const home_screen_styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  topContainerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    padding: 2,
    marginEnd: 15,
  },
  border: {
    borderRadius: 100,
    padding: 2,
  },
  userAvatar: {
    height: 60,
    width: 60,
    borderRadius: 100,
    borderWidth: 4,
  },
  username: {
    textAlign: 'center',
    width: 60,
    overflow: 'hidden',
    fontSize: 12,
    marginTop: 5,
    color: Colors.black,
  },
  scroll: {
    marginTop: 12,
    marginLeft: 8,
  },
  icon: {
    marginRight: 20,
  },
});

export const profile_screen_styles = StyleSheet.create({
  history: {
    height: 96,
    width: 96,
    borderRadius: 96 / 2,
    borderWidth: 3,
    borderColor: 'white',
  },
  historyItemContainer: {
    marginRight: 16,
  },
  historyItem: {
    height: 96,
    width: 96,
    borderRadius: 96 / 2,
  },
  historyItemActive: {
    borderColor: Colors.red,
  },
  historyItemNotActive: {
    borderColor: Colors.gray,
  },
  photoContainer: {
    marginTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  smallImage: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.33,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003,
  },
  text: {
    marginTop: 12,
  },
  view: {
    paddingHorizontal: 16,
  },
});

export const search_screen_styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  smallImage: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.33,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003,
  },
  topLeftContainer: {
    width: DataHelper.getWidth() * 0.667,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  highImage: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.66,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003,
  },
  bigImage: {
    width: DataHelper.getWidth() * 0.663,
    height: DataHelper.getWidth() * 0.663,
    marginTop: DataHelper.getWidth() * 0.003,
    marginRight: DataHelper.getWidth() * 0.003,
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  bottomLeft: {
    width: DataHelper.getWidth() * 0.66,
    height: DataHelper.getWidth() * 0.66,
    marginRight: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.006,
  },
  bottomRight: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
