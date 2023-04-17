import React from 'react';
import {IconSvgLogo} from '../../assets/icons/IconSvgLogo';
import {IconSvgPlus} from '../../assets/icons/IconSvgPlus';
import {IconSvgFavourite} from '../../assets/icons/IconSvgFavourite';
import {IconSvgMessages} from '../../assets/icons/IconSvgMessages';
import {ScrollView, TouchableOpacity, View, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../styles/Colors';
import {TextHelper} from '../../heplers/TextHelper';
import {PostCard} from '../../components/PostCards';
import {HistoryData} from '../../modules/history/HistoryData';
import {HistoryHelper} from '../../heplers/HistoryHelper';
import {IHistory} from '../../types/HistoryTypes';
import {home_screen_styles} from '../styles';

export const HomeScreen = () => {
  return (
    <>
      <View style={home_screen_styles.topContainer}>
        <IconSvgLogo />
        <View style={home_screen_styles.topContainerIcon}>
          <TouchableOpacity style={home_screen_styles.icon}>
            <IconSvgPlus />
          </TouchableOpacity>
          <TouchableOpacity style={home_screen_styles.icon}>
            <IconSvgFavourite />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconSvgMessages />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <ScrollView
          style={home_screen_styles.scroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {HistoryHelper.getUserHistory(HistoryData).map((item: IHistory) => (
            <TouchableOpacity key={item.id}>
              <View style={home_screen_styles.avatarContainer}>
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
                  style={home_screen_styles.border}>
                  <Image
                    style={[
                      home_screen_styles.userAvatar,
                      {borderColor: Colors.white},
                    ]}
                    source={{
                      uri: item.avatar,
                    }}
                  />
                </LinearGradient>
                <Text style={home_screen_styles.username}>
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
