import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {IconSvgProoerties} from '../assets/icons/IconSvgProoerties';
import {IconSvgFavourite} from '../assets/icons/IconSvgFavourite';
import {IconSvgComments} from '../assets/icons/IconSvgComments';
import {IconSvgShare} from '../assets/icons/IconSvgShare';
import {IconSvgCollection} from '../assets/icons/IconSvgCollection';
import {Colors} from '../styles/Colors';

export const PostCard = () => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://funpick.ru/wp-content/uploads/2017/11/Ochen-legkie-i-krasivye-16.jpg',
            }}
          />
          <Text style={styles.username}>makka_akhrieva</Text>
        </View>

        <TouchableOpacity>
          <IconSvgProoerties />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://funpick.ru/wp-content/uploads/2017/11/Ochen-legkie-i-krasivye-16.jpg',
          }}
        />
      </View>

      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <TouchableOpacity>
            <IconSvgFavourite />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 11}}>
            <IconSvgComments />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 11}}>
            <IconSvgShare />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <IconSvgCollection />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.like_text}>100 Likes</Text>

      <View style={styles.comment}>
        <Text style={styles.text} numberOfLines={2}>
          <Text style={styles.like_text}>Username</Text> {''}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis
          eum saepe? Quod quibusdam, minima illum atque esse id ipsa optio,
          saepe eveniet odio nisi! Ipsum, at voluptatibus. Vero, quas.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
