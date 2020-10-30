import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  YellowBox,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from 'react-native';

import {isEmpty} from 'lodash';
import Kompas from '../src/components/screens/arah_kiblat/kompas';
import {Grid, Col, Row} from 'react-native-easy-grid';
import {
  magnetometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
// import Slideshow from 'react-native-slideshow';

import style from './styles';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment-hijri';
import NavigationDrawerStructure from './components/screens/pengaturan/index';

const Artikel = require('./assets/artikel.png');
const Dzikir = require('./assets/dzikir.png');
const Info_Kajian = require('./assets/book.png');
const Kalender_Hijrah = require('./assets/calendar_hijri.png');
const Hadist = require('./assets/book_hadist.png');
const Masjid_Terdekat = require('./assets/mosque.png');
const Kiblat_Kompas = require('./assets/Kiblat_Kompas.png');
const Sadaqah = require('./assets/fundraiser.png');
const Al_Quran = require('./assets/alquran.png');
const Asmaul_Husna = require('./assets/99_asmaul_husna.png');
const Shalat = require('./assets/islam.png');
const Penyaluran_Donasi = require('./assets/gallery.png');
const Book_Muslim = require('./assets/books.png');
const MenuIcon = require('./assets/list.png');
const Bg_Jadwal_Shalat = require('./assets/fatih-yurur-kNSREmtaGOE-unsplash.jpg');

class Dashboard_Public extends Component {
  constructor() {
    super();

    this.state = {
      j_shalat: [],
      latitude: null,
      longitude: null,
      heading: null,
      position1: 1,
      interval: null,
      qibla: [],
      databerita: [],
      magnetometer: '0',
      dataSource: [
        {
          title: 'Apa Itu Management Masjid ?',
          caption: 'Sebuah Aplikasi Difungsikan Membantu Pengurus Masjid',
          url: require('./assets/masjid.jpg'),
        },
        {
          title: 'Kemudian Apa Lagi Kegunaan Management Masjid?',
          caption:
            'Management Masjid Juga Berguna Bagi Jamaah Masjid Yaitu Panduan Sunnah - Sunnah صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ ',
          url: require('./assets/masjid2.jpg'),
        },
        {
          title: 'Kenapa Harus Management Masjid ?',
          caption:
            'Insyaalah, Management Masjid Dapat Membantu Pengurus dan Jammah Masjid',
          url: require('./assets/masjid3.jpg'),
        },
      ],
    };
  }

  //arah kiblat
  UNSAFE_componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position1 === this.state.dataSource.length
              ? 0
              : this.state.position1 + 1,
        });
      }, 5000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  Get_Lokasi_User = () => {
    Geolocation.getCurrentPosition(
      position => {
        const Latitude = position.coords.latitude;
        const Longitude = position.coords.longitude;
        console.log(position);
        this.setState({
          latitude: Latitude,
          longitude: Longitude,
        });

        fetch(
          'https://time.siswadi.com/pray/?lat=' +
            Latitude +
            '&lng=' +
            Longitude,
        )
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson.data);
            this.setState({
              j_shalat: responseJson.data,
            });
          });

        return fetch(
          'https://time.siswadi.com/qibla/?lat=' +
            Latitude +
            '&lng=' +
            Longitude,
        )
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);
            this.setState({
              qibla: responseJson.data.derajat,
            });
          });
      },
      err => {
        console.log(err);
      },
      {enableHighAccuracy: false, timeout: 2000, maximumAge: 3600000},
    ).catch(error => console.log(error));
  };

  //berita islami
  berita = async () => {
    try {
      let response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=id&apiKey=655becbabbf040c8a1601efbcb47acde',
      );
      let responseJson = await response.json();
      // console.log(responseJson);
      await this.setState({
        databerita: responseJson.articles,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.Get_Lokasi_User();
    this.berita();
  }

  renderCategory = ({item}) => {
    return (
      <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
        <View style={style.categoriesItemContainer}>
          <Image
            style={style.categoriesPhoto}
            source={{uri: item.urlToImage}}
          />
          <Text style={style.categoriesName}>{item.title}</Text>
          <Text style={style.categoriesInfo}>kita muslim.com</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    YellowBox.ignoreWarnings(['']);
    // const ShalatFajr = isEmpty(this.state.j_shalat.Fajr) ? 'Loding...' : this.state.j_shalat.Fajr
    // const ShalatDhuhur = isEmpty(this.state.j_shalat.Dhuhr) ? 'Loding...' : this.state.j_shalat.Dhuhr
    // const ShalatAsr = isEmpty(this.state.j_shalat.Asr) ? 'Loding...' : this.state.j_shalat.Asr
    // const ShalatMaghrib = isEmpty(this.state.j_shalat.Maghrib) ? 'Loding...' : this.state.j_shalat.Maghrib

    const timeMasehi = moment().format('ll');
    const timeHijriyah = moment().format('ddd/iD/iM/iYYYY');
    // const isbofereFajr = moment({hour:3, minute:0}).isBefore({hour:5, minute:0}) ? ShalatFajr : ' Salah'
    // const isbofereDhuhur = moment({hour:8, minute:0}).isBefore({hour:12, minute:0}) ? ShalatDhuhur : ' Salah'
    // const isbofereAsr = moment({hour:14, minute:0}).isBefore({hour:17, minute:0}) ? ShalatAsr : ' Salah'
    // const isbofereMaghrib = moment({hour:14, minute:30}).isBefore({hour:18, minute:0}) ? ShalatMaghrib : ' Salah'

    return (
      <ScrollView>
        <View style={styles.MainContainer}>
          <StatusBar backgroundColor="#009688" />
          <View style={styles.Containerheader}>
            <View style={styles.SubHeaderImage}>
              <TouchableOpacity>
                {/* <NavigationDrawerStructure /> */}
                <Image source={MenuIcon} style={styles.IconStyling} />
              </TouchableOpacity>
            </View>
            <View style={styles.SubHeaderText}>
              <Text style={styles.TextHeader}>KITA MUSLIM</Text>
            </View>
          </View>
          <ImageBackground
            source={Bg_Jadwal_Shalat}
            style={{height: 300, width: '100%'}}>
            <View style={styles.ContainerWaktuShalat}>
              <View style={styles.ContainerJamHarian}>
                <Text style={styles.JudulHeaderShalat}>
                  Jadwal Shalat Harian
                </Text>
                {/* <Text style={styles.HariWaktuShalat}>Fajr</Text> */}
                {/* <Text style={styles.JamWaktuShalat}>{ShalatFajr}</Text> */}
                {/* <Text style={styles.JamWaktuShalat}>{isbofereDhuhur}</Text> */}

                <View>
                  <Text style={styles.Time}>kalender masehi</Text>
                  <Text style={styles.Time}>{timeMasehi}</Text>
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={styles.Time}>kalender hijrah</Text>
                  <Text style={styles.Time}>{timeHijriyah}</Text>
                </View>
              </View>
              <View style={styles.ContainerArahKibat}>
                {/* <Text style={styles.Judul_Arah_Kiblat}>Arah Kiblat</Text> */}
                {/* <Text style = {{color:'#fff',marginTop:0,fontSize:10}}>{this.state.qibla}</Text> */}
                {/* <Kompas/> */}
                {/* <Grid>
                    <Row style={{alignItems: "center"}} size={2}>
                     <Text
                        style={{
                          color: "#fff",
                          fontSize: 27,
                          position: "absolute",
                          textAlign: "center",
                          marginLeft:20
                        }}
                      >
                        {this._degree(this.state.magnetometer)}°
                      </Text>
                      <Col style={{alignItems: "center"}}>
                            <Image
                            source={require("../src/assets/kompas.png")}
                            style={{
                                marginRight:20,
                                height: 165,
                                justifyContent: "center",
                                alignItems: "center",
                                resizeMode: "contain",
                                transform: [
                                {rotate: 360 - this.state.magnetometer + "deg"},
                                ],
                            }}
                            />
                      </Col>
                    </Row>
                  </Grid> */}
              </View>
            </View>
          </ImageBackground>
          <View style={styles.ContainerListButton}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Masjid_Terdekat')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Masjid_Terdekat} style={styles.IconStyling} />
                <Text style={styles.IconText}>Masjid Terdekat</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Sadaqah')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Sadaqah} style={styles.IconStyling} />
                <Text style={styles.IconText}>Sadaqah/Donasi</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Info_Kajian')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Info_Kajian} style={styles.IconStyling} />
                <Text style={styles.IconText}>Info Kajian</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Arah_Kiblat', {
                  Qibla: this.state.qibla,
                })
              }>
              <View style={styles.ContainerIconButton}>
                <Image source={Kiblat_Kompas} style={styles.IconStyling} />
                <Text style={styles.IconText}>Arah Kiblat</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Al_Quran')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Al_Quran} style={styles.IconStyling} />
                <Text style={styles.IconText}>Al Quran</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('creatToptab2')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Shalat} style={styles.IconStyling} />
                <Text style={styles.IconText}>Shalat</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('creatToptab1')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Dzikir} style={styles.IconStyling} />
                <Text style={styles.IconText}>Dzikir</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Asmaul_Husna')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Asmaul_Husna} style={styles.IconStyling} />
                <Text style={styles.IconText}>Asmaul_Husna</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Kalender_Hijriyah')
              }>
              <View style={styles.ContainerIconButton}>
                <Image source={Kalender_Hijrah} style={styles.IconStyling} />
                <Text style={styles.IconText}>Kalender Hijriyah</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Kas_Masjid')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Hadist} style={styles.IconStyling} />
                <Text style={styles.IconText}>Hadist</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Penyaluran_Donasi')
              }>
              <View style={styles.ContainerIconButton}>
                <Image source={Penyaluran_Donasi} style={styles.IconStyling} />
                <Text style={styles.IconText}>Gallery Islami</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Buku_Buletin_Muslim')
              }>
              <View style={styles.ContainerIconButton}>
                <Image source={Book_Muslim} style={styles.IconStyling} />
                <Text style={styles.IconText}>Buku/Buletin Muslim</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ContainerSlide}>
            {/* <Slideshow
              dataSource={this.state.dataSource}
              position={this.state.position}
              onPositionChanged={position => this.setState({ position })}
            /> */}
          </View>
          <View style={styles.artikel}>
            <Text style={styles.TextHeader2}>Berita Masa Kini</Text>
          </View>
          <FlatList
            data={this.state.databerita}
            renderItem={this.renderCategory}
            keyExtractor={(item, index) => item.toString()}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#fff',
  },
  artikel: {
    marginBottom: 10,
  },
  Containerheader: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: '#009688',
    alignItems: 'center',
  },
  ContainerheaderIcon: {
    height: 25,
    width: 25,
  },
  SubHeaderImage: {
    marginLeft: 10,
  },
  SubHeaderText: {
    marginLeft: 20,
  },
  TextHeader: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  TextHeader2: {
    fontSize: 22,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
  },
  ContainerSlide: {
    alignItems: 'center',
    marginBottom: 5,
  },
  ContainerWaktuShalat: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ContainerListButton: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  ContainerIconButton: {
    height: 80,
    width: 80,
    margin: 5,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  IconStyling: {
    height: 40,
    width: 40,
  },
  IconText: {
    fontSize: 10,
    textAlign: 'center',
    color: '#000',
  },
  ContainerJamHarian: {
    margin: 5,
  },
  ContainerArahKibat: {
    margin: 5,
    width: 120,
  },
  JudulHeaderShalat: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  HariWaktuShalat: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  JamWaktuShalat: {
    fontSize: 30,
    color: '#fff',
  },
  Time: {
    fontSize: 20,
    color: '#fff',
  },
  Judul_Arah_Kiblat: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  Gbr_Compass: {},
});
export default Dashboard_Public;
