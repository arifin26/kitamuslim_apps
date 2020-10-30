import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  StatusBar,
  ScrollView,
} from 'react-native';

export default class Perjus extends Component {
  constructor (props) {
    super (props);
    this.state = {
      modalVisible: false,
      userSelected: [],
      data: [
        {
          urutan: 1,
          latin: 'Ar Rahman',
          arab: 'Juz 1',
          arti: 'Yang Maha Pengasih',
        },
        {
          urutan: 2,
          latin: 'Ar Rahiim',
          arab: 'Juz 2',
          arti: 'Yang Maha Penyayang',
        },
        {
          urutan: 3,
          latin: 'Al Malik',
          arab: 'Juz 3',
          arti: 'Yang Maha Merajai / Memerintah',
        },
        {
          urutan: 4,
          latin: 'Al Quddus',
          arab: 'Juz 4',
          arti: 'Yang Maha Suci',
        },
        {
          urutan: 5,
          latin: 'As Salaam',
          arab: 'Juz 5',
          arti: 'Yang Maha Memberi Kesejahteraan',
        },
        {
          urutan: 6,
          latin: "Al Mu 'min",
          arab: 'Juz 6',
          arti: 'Yang Maha Memberi Keamanan',
        },
        {
          urutan: 7,
          latin: 'Al Muhaimin',
          arab: 'Juz 7',
          arti: 'Yang Maha Pemelihara',
        },
        {
          urutan: 8,
          latin: "Al 'Aziiz",
          arab: 'Juz 8',
          arti: 'Yang Maha Perkasa',
        },
        {
          urutan: 9,
          latin: 'Al Jabbar',
          arab: 'Juz 9',
          arti: 'Yang Memiliki Mutlak Kegagahan',
        },
        {
          urutan: 10,
          latin: 'Al Mutakabbir',
          arab: 'Juz 10',
          arti: 'Yang Maha Megah, Yang Memiliki Kebesaran',
        },
        {
          urutan: 11,
          latin: 'Al Khaliq',
          arab: 'Juz 11',
          arti: 'Yang Maha Pencipta',
        },
        {
          urutan: 12,
          latin: "Al Baari '",
          arab: 'Juz 12',
          arti: 'Yang Maha Melepaskan(Membuat, Membentuk, Menyeimbangkan)',
        },
        {
          urutan: 13,
          latin: 'Al Mushawwir',
          arab: 'Juz 13',
          arti: 'Yang Maha Membentuk Rupa(makhluknya)',
        },
        {
          urutan: 14,
          latin: 'Al Ghaffaar',
          arab: 'Juz 14',
          arti: 'Yang Maha Pengampun',
        },
        {
          urutan: 15,
          latin: 'Al Qahhaar',
          arab: 'Juz 15',
          arti: 'Yang Maha Memaksa',
        },
        {
          urutan: 16,
          latin: 'Al Wahhaab',
          arab: 'Juz 16',
          arti: 'Yang Maha Pemberi Karunia',
        },
        {
          urutan: 17,
          latin: 'Ar Razzaaq',
          arab: 'Juz 17',
          arti: 'Yang Maha Pemberi Rezeki',
        },
        {
          urutan: 18,
          latin: 'Al Fattaah',
          arab: 'Juz 18',
          arti: 'Yang Maha Pembuka Rahmat',
        },
        {
          urutan: 19,
          latin: "Al 'Aliim",
          arab: 'Juz 19',
          arti: 'Yang Maha Mengetahui(Memiliki Ilmu)',
        },
        {
          urutan: 20,
          latin: 'Al Qaabidh',
          arab: 'Juz 20',
          arti: 'Yang Maha Menyempitkan(makhluknya)',
        },
        {
          urutan: 21,
          latin: 'Al Baasith',
          arab: 'Juz 21',
          arti: 'Yang Maha Melapangkan(makhluknya)',
        },
        {
          urutan: 22,
          latin: 'Al Khaafidh',
          arab: 'Juz 22',
          arti: 'Yang Maha Merendahkan(makhluknya)',
        },
        {
          urutan: 23,
          latin: "Ar Raafi '",
          arab: 'Juz 23',
          arti: 'Yang Maha Meninggikan(makhluknya)',
        },
        {
          urutan: 24,
          latin: "Al Mu'izz",
          arab: 'Juz 24',
          arti: 'Yang Maha Memuliakan(makhluknya)',
        },
        {
          urutan: 25,
          latin: 'Al Mudzil',
          arab: 'Juz 25',
          arti: 'Yang Maha Menghinakan(makhluknya)',
        },
        {
          urutan: 26,
          latin: "Al Samii '",
          arab: 'Juz 26',
          arti: 'Yang Maha Mendengar',
        },
        {
          urutan: 27,
          latin: 'Al Bashiir',
          arab: 'Juz 27',
          arti: 'Yang Maha Melihat',
        },
        {
          urutan: 28,
          latin: 'Al Hakam',
          arab: 'Juz 28',
          arti: 'Yang Maha Menetapkan',
        },
        {
          urutan: 29,
          latin: "Al 'Adl",
          arab: 'Juz 29',
          arti: 'Yang Maha Adil',
        },
        {
          urutan: 30,
          latin: 'Al Lathiif',
          arab: 'Juz 30',
          arti: 'Yang Maha Lembut',
        },
      ],
    };
  }

  clickEventListener = item => {
    Alert.alert ('Message', 'Item clicked. ' + item.urutan);
  };

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#009688" barStyle="light-content" />
        <FlatList
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor={item => {
            return item.urutan;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  this.clickEventListener (item);
                }}
              >
                {/* <Image style={styles.image} source={{uri: item.image}} /> */}
                <View style={styles.cardContent}>
                  <View style={{height: 60, width: 300}}>
                    <Text style={styles.name}>{item.arab}</Text>
                    {/* <Text style={styles.count}>{item.arti}</Text> */}
                  </View>
                  {/* <TouchableOpacity
                    style={styles.followButton}
                    onPress={() => this.clickEventListener (item)}
                  >
                    <Text style={styles.followButtonText}>Explore now</Text>
                  </TouchableOpacity> */}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#ebf0f7',
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#009688',
    fontWeight: 'bold',
    marginRight: 40,
    marginTop: 10,
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: '#6666ff',
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  followButtonText: {
    color: '#dcdcdc',
    fontSize: 12,
  },
});
