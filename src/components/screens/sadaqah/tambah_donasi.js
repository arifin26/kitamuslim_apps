import React,{ Component } from 'react';

import { 
    StyleSheet, 
    Text, 
    View, 
    PixelRatio, 
    TouchableOpacity, 
    Image, 
    TextInput, 
    Alert,
    ScrollView,
    YellowBox
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

import RNFetchBlob from 'rn-fetch-blob';

export default class TambahArtikel extends Component {
  static navigationOptions =
  {
     title: 'Tambahkan Artikel Baru',
   
  };
   
  constructor() {

    super();

    this.state = {

      ImageSource: null,
      data: null,
      judul_donasi:'',
      nama_perorangan_lembang:'',
      donasi_dibutuhkan:'',
      lokasi:'',
      bank:'',
      kode_bank:'',
      no_rekening: '',
      no_konfirmasi: '',
      donasi_terkumpul: '',
      status_donasi	: '',
    }
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        this.setState({

          ImageSource: source,
          data: response.data

        });
      }
    });
  }

  uploadImageToServer = () => {

    RNFetchBlob.fetch('POST', 'https://masjidindonesia.000webhostapp.com/manajemen_masjid/donasi/tambah_donasi.php', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.data },
        { name: 'judul_donasi', data: this.state.judul_donasi },
        { name: 'nama_perorangan_lembang', data: this.state.nama_perorangan_lembang	},
        { name: 'donasi_dibutuhkan', data: this.state.donasi_dibutuhkan	},
        { name: 'lokasi', data: this.state.donasi_dibutuhkan},
        { name: 'bank', data: this.state.donasi_dibutuhkan},
        { name: 'kode_bank', data: this.state.nama_perorangan_lembang},
        { name: 'no_rekening', data: this.state.nama_perorangan_lembang},
        { name: 'no_konfirmasi', data: this.state.nama_perorangan_lembang},
        { name: 'donasi_terkumpul', data: this.state.nama_perorangan_lembang},
        { name: 'status_donasi', data: this.state.nama_perorangan_lembang},

      ]).then((resp) => {

        var tempMSG = resp.data;

        tempMSG = tempMSG.replace(/^"|"$/g, '');

        Alert.alert(tempMSG);

      }).catch((error) => {
        console.error(error)
      })

  }

  render() {
    YellowBox.ignoreWarnings(['RNFetchBlob']);
    return (
    <View>
      <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>

          <View style={styles.ImageContainer}>

            {this.state.ImageSource === null ? <Text>Select a Photo</Text> :
              <Image style={styles.ImageContainer} source={this.state.ImageSource} />
            }

          </View>

        </TouchableOpacity>


        <TextInput

          placeholder="Masukan Judul Artikel "

          onChangeText={data => this.setState({ judul_donasi: data })}

          underlineColorAndroid='transparent'

          style={styles.TextInputStyle}
        />

        <TextInput

        placeholder="Masukan Tgl Postingan "

        onChangeText={data => this.setState({ nama_perorangan_lembang: data })}

        underlineColorAndroid='transparent'

        style={styles.TextInputStyle}
        />

        <TextInput

        placeholder="Masukan Lokasi Posting Artikel "

        onChangeText={data => this.setState({ donasi_dibutuhkan: data })}

        underlineColorAndroid='transparent'

        style={styles.TextInputStyle}
        />

        <TextInput

        placeholder="Masukan Detail Artikel "

        onChangeText={data => this.setState({ lokasi: data })}

        underlineColorAndroid='transparent'

        style={styles.TextInputStyleDetail}

        />


        <TouchableOpacity onPress={this.uploadImageToServer} activeOpacity={0.6} style={styles.button} >

          <Text style={styles.TextStyle}> Upload Now </Text>

        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },

  ImageContainer: {
    borderRadius: 10,
    width: 250,
    height: 250,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDDC39',

  },

  TextInputStyle: {

    textAlign: 'center',
    height: 40,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#028b53',
    marginTop: 20
  },

  TextInputStyleDetail: {

    textAlign: 'center',
    height: 50,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#028b53',
    marginTop: 20,
    flexWrap:'wrap'
  },

  button: {

    width: '80%',
    backgroundColor: '#00BCD4',
    borderRadius: 7,
    marginTop: 20
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    padding: 10
  }

});