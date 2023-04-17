import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {IconSvgProoerties} from '../assets/icons/IconSvgProoerties';
import {IconSvgFavourite} from '../assets/icons/IconSvgFavourite';
import {IconSvgComments} from '../assets/icons/IconSvgComments';
import {IconSvgShare} from '../assets/icons/IconSvgShare';
import {IconSvgCollection} from '../assets/icons/IconSvgCollection';
import {postCard_styles} from './styles';

export const PostCard = () => {
  return (
    <View>
      <View style={postCard_styles.topContainer}>
        <View style={postCard_styles.flexRow}>
          <Image
            style={postCard_styles.avatar}
            source={{
              uri: 'https://funpick.ru/wp-content/uploads/2017/11/Ochen-legkie-i-krasivye-16.jpg',
            }}
          />
          <Text style={postCard_styles.username}>makka_akhrieva</Text>
        </View>
        <TouchableOpacity>
          <IconSvgProoerties />
        </TouchableOpacity>
      </View>
      <View style={postCard_styles.imageContainer}>
        <Image
          style={postCard_styles.image}
          source={{
            uri: 'https://funpick.ru/wp-content/uploads/2017/11/Ochen-legkie-i-krasivye-16.jpg',
          }}
        />
      </View>
      <View style={postCard_styles.topContainer}>
        <View style={postCard_styles.flexRow}>
          <TouchableOpacity>
            <IconSvgFavourite />
          </TouchableOpacity>
          <TouchableOpacity style={postCard_styles.left}>
            <IconSvgComments />
          </TouchableOpacity>
          <TouchableOpacity style={postCard_styles.left}>
            <IconSvgShare />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <IconSvgCollection />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={postCard_styles.like_text}>100 Likes</Text>
      <View style={postCard_styles.comment}>
        <Text style={postCard_styles.text} numberOfLines={2}>
          <Text style={postCard_styles.like_text}>Username</Text> {''}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis
          eum saepe? Quod quibusdam, minima illum atque esse id ipsa optio,
          saepe eveniet odio nisi! Ipsum, at voluptatibus. Vero, quas.
        </Text>
      </View>
    </View>
  );
};
