import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../styles/Colors';
import {Button} from '../../components/ui/Button';
import {DataHelper} from '../../heplers/DataHelper';
import {launchImageLibrary} from 'react-native-image-picker';
import {Text} from 'react-native';
import {observer} from 'mobx-react';
import {useRootStore} from '../../base/hooks/useRootStore';

interface IPhoto {
  uri: string;
}

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
      <View style={{paddingHorizontal: 16}}>
        <Text style={{marginTop: 12}}>makka_akhrieva</Text>

        <TouchableOpacity onPress={() => authStore.logout()}>
          <Text>Exit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.historyItem, styles.historyItemNotActive]}>
          <Image style={styles.history} source={{uri: exAvatar}} />
        </TouchableOpacity>

        <Text>Fullstack dev</Text>

        <Button title={'Upload photo'} onPress={addPhoto} />
      </View>

      <View style={styles.photoContainer}>
        {photos?.map((i: IPhoto, index: number) => (
          <TouchableOpacity key={index}>
            <Image
              style={styles.smallImage}
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

const styles = StyleSheet.create({
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
});
