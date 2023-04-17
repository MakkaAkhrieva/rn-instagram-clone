import React, {useEffect, useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Button} from '../../components/ui/Button';
import {launchImageLibrary} from 'react-native-image-picker';
import {Text} from 'react-native';
import {observer} from 'mobx-react';
import {useRootStore} from '../../base/hooks/useRootStore';
import {IPhoto} from '../types';
import {profile_screen_styles} from '../styles';

const exAvatar =
  'https://funpick.ru/wp-content/uploads/2017/11/Ochen-legkie-i-krasivye-16.jpg';

export const ProfileScreen = observer(() => {
  const {authStore} = useRootStore();
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const setPhoto = () => {
    const arr = [...Array(6)].map(_ => ({uri: exAvatar}));
    setPhotos(arr);
  };

  const addPhoto = async () => {
    const result = await launchImageLibrary({
      mediaType: 'mixed',
    });

    if (result.assets) {
      const addedPhotos = result.assets?.map(i => ({uri: i.uri!})) || [];
      setPhotos(prevState => [...prevState, ...addedPhotos]);
      const formData = new FormData();
      const sendFileData = result.assets.map(item => ({
        type: item.type,
        name: item.fileName,
        uri: item.uri,
      }));
      formData.append('file', sendFileData);
    }
  };

  useEffect(() => {
    setPhoto();
  }, []);

  return (
    <ScrollView>
      <View style={profile_screen_styles.view}>
        <Text style={profile_screen_styles.text}>makka_akhrieva</Text>
        <TouchableOpacity onPress={() => authStore.logout()}>
          <Text>Exit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            profile_screen_styles.historyItem,
            profile_screen_styles.historyItemNotActive,
          ]}>
          <Image
            style={profile_screen_styles.history}
            source={{uri: exAvatar}}
          />
        </TouchableOpacity>
        <Text>Fullstack dev</Text>
        <Button title={'Upload photo'} onPress={addPhoto} />
      </View>
      <View style={profile_screen_styles.photoContainer}>
        {photos?.map((i: IPhoto, index: number) => (
          <TouchableOpacity key={index}>
            <Image
              style={profile_screen_styles.smallImage}
              source={{
                uri: i.uri,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
});
