import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {search_screen_styles} from '../styles';

export const SearchScreen = () => {
  return (
    <ScrollView>
      <View style={search_screen_styles.flexRow}>
        <View style={search_screen_styles.topLeftContainer}>
          {[...Array(4)].map((_, index) => (
            <TouchableOpacity key={index}>
              <Image
                style={search_screen_styles.smallImage}
                source={{
                  uri: 'http://placeimg.com/640/480/nature',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Image
            style={search_screen_styles.highImage}
            source={{
              uri: 'http://placeimg.com/640/480/city',
            }}
          />
        </View>
      </View>
      <View style={search_screen_styles.centerContainer}>
        {[...Array(6)].map((_, index) => (
          <TouchableOpacity key={index}>
            <Image
              style={search_screen_styles.smallImage}
              source={{
                uri: 'http://placeimg.com/640/480/abstract',
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={search_screen_styles.flexRow}>
        <View style={search_screen_styles.bottomLeft}>
          <Image
            style={search_screen_styles.bigImage}
            source={{
              uri: 'http://placeimg.com/640/480/business',
            }}
          />
        </View>
        <View style={search_screen_styles.bottomRight}>
          {[...Array(2)].map((_, index) => (
            <TouchableOpacity key={index}>
              <Image
                style={search_screen_styles.smallImage}
                source={{
                  uri: 'http://placeimg.com/640/480',
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
