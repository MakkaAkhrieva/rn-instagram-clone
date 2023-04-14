import React from 'react';
import {IconSvgLogo} from '../../assets/icons/IconSvgLogo';
import {IconSvgPlus} from '../../assets/icons/IconSvgPlus';
import {IconSvgFavourite} from '../../assets/icons/IconSvgFavourite';
import {IconSvgMessages} from '../../assets/icons/IconSvgMessages';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../styles/Colors';
import {TextHelper} from '../../heplers/TextHelper';
import {PostCard} from '../../components/PostCards';
import {HistoryData} from '../../modules/history/HistoryData';
import {HistoryHelper} from '../../heplers/HistoryHelper';
import {IHistory} from '../../types/HistoryTypes';

export const HomeScreen = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <IconSvgLogo />
        <View style={styles.topContainerIcon}>
          <TouchableOpacity style={{marginRight: 20}}>
            <IconSvgPlus />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 20}}>
            <IconSvgFavourite />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconSvgMessages />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <ScrollView
          style={{marginTop: 12, marginLeft: 8}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {HistoryHelper.getUserHistory(HistoryData).map((item: IHistory) => (
            <TouchableOpacity key={item.id}>
              <View style={styles.avatarContainer}>
                <LinearGradient
                  colors={
                    item.active
                      ? [
                          'rgba(201, 19, 185, 1)',
                          'rgba(249, 55, 63, 1)',
                          'rgba(254, 205, 0, 1)',
                        ]
                      : ['#818181', '#525252', '#676767']
                  }
                  style={styles.border}>
                  <Image
                    style={[styles.userAvatar, {borderColor: Colors.white}]}
                    source={{
                      uri: item.avatar,
                    }}
                  />
                </LinearGradient>
                <Text style={styles.username}>
                  {TextHelper.getUserHistoryName(item.name)}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {[...Array(10)].map((_, index) => (
          <PostCard key={index} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
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
});
