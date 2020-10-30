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

export default class Test extends Component {
  render () {
    return (
      <View style={styles.container}>
       <StatusBar backgroundColor='#009688' />
        <View style={styles.Search}>
          <Text style={{color: '#fff'}}>
            Al-Qur'an
          </Text>
        </View>
        <ScrollView>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الفاتحة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Fatihah</Text>
              <Text style={styles.count}>Pembukaan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_2')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  البقرة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Baqarah</Text>
              <Text style={styles.count}>Sapi Betina</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_3')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  آل عمران
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Ali ‘Imran</Text>
              <Text style={styles.count}>Keluarga ‘Imran</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_4')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  النّساء
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah An-Nisa'</Text>
              <Text style={styles.count}>Wanita</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_5')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  المآئدة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Ma’idah</Text>
              <Text style={styles.count}>Jamuan (Hidangan Makanan)</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_6')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الانعام
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-An’am</Text>
              <Text style={styles.count}>Binatang Ternak</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_7')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الأعراف
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-A’raf</Text>
              <Text style={styles.count}>Tempat Yang Tertinggi</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_8')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الأنفال
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Anfal</Text>
              <Text style={styles.count}>Harta Rampasan Perang</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_9')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  التوبة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah At-Taubah</Text>
              <Text style={styles.count}>Pengampunan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_10')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  ينوس
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Yunus</Text>
              <Text style={styles.count}>Nabi Yunus</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_11')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  هود
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>surah Hud</Text>
              <Text style={styles.count}>Nabi Hud</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_12')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  يسوف
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Yusuf</Text>
              <Text style={styles.count}>Nabi Yusuf</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_13')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الرّعد
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Ar-Ra’d</Text>
              <Text style={styles.count}>Guruh (Petir)</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_14')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  إبراهيم
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Ibrahim</Text>
              <Text style={styles.count}>Nabi Ibrahim</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_15')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الحجر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Hijr</Text>
              <Text style={styles.count}>Al Hijr (Nama Gunung)</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_16')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  النّحل
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah An-Nahl</Text>
              <Text style={styles.count}>Lebah</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_17')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الإسرا
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Isra’</Text>
              <Text style={styles.count}>Memperjalankan Di</Text>
              <Text style={styles.count}>Waktu Malam</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_18')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الكهف
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Kahf</Text>
              <Text style={styles.count}>Penghuni-Penghuni Gua</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_19')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  مريم
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Maryam</Text>
              <Text style={styles.count}>Maryam (Maria)</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_20')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  طه
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Ta Ha</Text>
              <Text style={styles.count}>Ta Ha</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_21')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الأنبياء
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Anbiya</Text>
              <Text style={styles.count}>Nabi-Nabi</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_22')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الحجّ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Hajj</Text>
              <Text style={styles.count}>Haji</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_23')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  المؤمنون
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Mu’minun</Text>
              <Text style={styles.count}>Orang-Orang Mukmin</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_24')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  النّور
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah An-Nur</Text>
              <Text style={styles.count}>Cahaya</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_25')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الفرقان
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Furqan</Text>
              <Text style={styles.count}>Pembeda</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_26')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الشّعراء
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Asy-Syu’ara’</Text>
              <Text style={styles.count}>Penyair</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_27')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  النّمل
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah An-Naml</Text>
              <Text style={styles.count}>Semut</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_28')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  القصص
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Qasas</Text>
              <Text style={styles.count}>Cerita</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_29')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  العنكبوت
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-‘Ankabut</Text>
              <Text style={styles.count}>Laba-Laba</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_30')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الرّوم
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Ar-Rum</Text>
              <Text style={styles.count}>Bangsa Romawi</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_31')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  لقمان
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Luqman</Text>
              <Text style={styles.count}>Keluarga Luqman</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_32')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  السّجدة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah As-Sajdah</Text>
              <Text style={styles.count}>Sajdah</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_33')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الْأحزاب
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Ahzab</Text>
              <Text style={styles.count}>Golongan2 Yang Bersekutu</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_34')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  سبا
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Saba</Text>
              <Text style={styles.count}>Kaum Saba</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_35')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  افاطر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Fatir</Text>
              <Text style={styles.count}>Pencipta</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_36')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  يس
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Ya Sin</Text>
              <Text style={styles.count}>Yaasiin</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_37')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الصّافات
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah As-Saffat</Text>
              <Text style={styles.count}>Barisan-Barisan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_38')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  ص
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Sad</Text>
              <Text style={styles.count}>Shaad</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_39')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الزّمر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Az-Zumar</Text>
              <Text style={styles.count}>Rombongan-Rombongan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_40')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  غافر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Gafir</Text>
              <Text style={styles.count}>Maha Pengampun</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_41')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  فصّلت
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Fussilat</Text>
              <Text style={styles.count}>Yang Dijelaskan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_42')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الشّورى
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Asy-Syura</Text>
              <Text style={styles.count}>Musyawarah</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_43')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الزّخرف
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Az-Zukhruf</Text>
              <Text style={styles.count}>Perhiasan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_44')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الدّخان
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Ad-Dukhan</Text>
              <Text style={styles.count}>Kabut</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_45')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الجاثية
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Jasiyah</Text>
              <Text style={styles.count}>Yang Bertekuk Lutut</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_46')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الَأحقاف
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Ahqaf</Text>
              <Text style={styles.count}>Bukit-Bukit Pasir</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_47')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  محمّد
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Muhammad</Text>
              <Text style={styles.count}>Muhammad</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_48')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الفتح
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Fath</Text>
              <Text style={styles.count}>Kemenangan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_49')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الحجرات
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Hujurat</Text>
              <Text style={styles.count}>Kamar-Kamar</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_50')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  ق
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Qaf</Text>
              <Text style={styles.count}>Qaaf</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_51')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الذّاريات
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Az-Zariyat</Text>
              <Text style={styles.count}>Angin Yang Menerbangkan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_52')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الطّور
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah At-Tur</Text>
              <Text style={styles.count}>Bukit</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_53')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  النّجْم
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah An-Najm</Text>
              <Text style={styles.count}>Bintang</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_54')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  القمر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Qamar</Text>
              <Text style={styles.count}>Bulan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_55')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الرّحْمن
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Ar-Rahman</Text>
              <Text style={styles.count}>Yang Maha Pemurah</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_56')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الواقعه
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Waqi’ah</Text>
              <Text style={styles.count}>Hari Kiamat</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_57')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الحديد
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Hadid</Text>
              <Text style={styles.count}>Besi</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_58')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  المجادلة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Mujadilah</Text>
              <Text style={styles.count}>Wanita Yang </Text>
              <Text style={styles.count}>Mengajukan Gugatan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_59')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الحشْر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Hasyr</Text>
              <Text style={styles.count}>Pengusiran</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_60')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الممتحنة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Mumtahanah</Text>
              <Text style={styles.count}>Wanita Yang Diuji</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_61')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الصّفّ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah As-Saff</Text>
              <Text style={styles.count}>Satu Barisan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_62')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الجمعة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Jumu’ah</Text>
              <Text style={styles.count}>Hari Jum’at</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_63')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  المنافقون
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Munafiqun</Text>
              <Text style={styles.count}>Orang2 Yang Munafik</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_64')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  التّغابن
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah At-Tagabun</Text>
              <Text style={styles.count}>Hari Dinampakkan Kesalahan2</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_65')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الطّلاق
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah At-Talaq</Text>
              <Text style={styles.count}>Talak</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_66')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  التّحريم
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah At-Tahrim</Text>
              <Text style={styles.count}>Mengharamkan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_67')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الملك
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Mulk</Text>
              <Text style={styles.count}>Kerajaan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_68')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  القلم
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Qalam</Text>
              <Text style={styles.count}>Pena</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_69')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  القلم
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Haqqah</Text>
              <Text style={styles.count}>Hari Kiamat</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_70')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  المعارج
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Ma’arij</Text>
              <Text style={styles.count}>Tempat Naik</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_71')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  نوح
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Nuh</Text>
              <Text style={styles.count}>Nuh</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_72')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الجنّ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Jinn</Text>
              <Text style={styles.count}>Jin</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_73')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  المزمّل
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Muzzammil</Text>
              <Text style={styles.count}>Orang Yang Berselimut</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_74')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  المدشّر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Muddassir</Text>
              <Text style={styles.count}>Orang Yang Berkemul</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_75')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  القيمة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Qiyamah</Text>
              <Text style={styles.count}>Hari Kiamat</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_76')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الْاٍنسان
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Insan</Text>
              <Text style={styles.count}>Manusia</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_77')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  المرسلات
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Mursalat</Text>
              <Text style={styles.count}>Malaikat-Malaikat Yang Diutus</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_78')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  النّبا
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah An-Naba’</Text>
              <Text style={styles.count}>Berita Besar</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_79')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  النّازعات
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah An-Nazi’at</Text>
              <Text style={styles.count}>Malaikat2 Yang Mencabut</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_80')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  عبس
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah ‘Abasa</Text>
              <Text style={styles.count}>Ia Bermuka Masam</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_81')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  التّكوير
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah At-Takwir</Text>
              <Text style={styles.count}>Menggulung</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_82')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الانفطار
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Infitar</Text>
              <Text style={styles.count}>Terbelah</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_83')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  المطفّفين
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Tatfifin</Text>
              <Text style={styles.count}>Orang-Orang Yang Curang</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_84')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الانشقاق
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Insyiqaq</Text>
              <Text style={styles.count}>Terbelah</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_85')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  البروج
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Buruj</Text>
              <Text style={styles.count}>Gugusan Bintang</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_86')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الطّارق
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah At-Tariq</Text>
              <Text style={styles.count}>Yang Datang Di Malam Hari</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_87')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الْأعلى
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-A’la</Text>
              <Text style={styles.count}>Yang Paling Tinggi</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_88')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الغاشية
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Gasyiyah</Text>
              <Text style={styles.count}>Hari Pembalasan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_89')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الفجر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Fajr</Text>
              <Text style={styles.count}>Fajar</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_90')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  البلد
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Balad</Text>
              <Text style={styles.count}>Negeri</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_91')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الشّمس
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Asy-Syams</Text>
              <Text style={styles.count}>Matahari</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_92')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الّيل
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Lail</Text>
              <Text style={styles.count}>Malam</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_93')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الضحى
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Ad-Duha</Text>
              <Text style={styles.count}>Waktu (Dhuha)</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_94')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الانشراح
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Insyirah</Text>
              <Text style={styles.count}>Melapangkan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_95')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  التِّينِ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah At-Tin</Text>
              <Text style={styles.count}>Buah Tin</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_96')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  العَلَق
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-‘Alaq</Text>
              <Text style={styles.count}>Segumpal Darah</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_97')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الْقَدْرِ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Qadr</Text>
              <Text style={styles.count}>Kemuliaan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_98')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الْبَيِّنَةُ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Bayyinah</Text>
              <Text style={styles.count}>Pembuktian</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_99')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الزلزلة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Az-Zalzalah</Text>
              <Text style={styles.count}>Kegoncangan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_100')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  العاديات
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-‘Adiyat</Text>
              <Text style={styles.count}>Berlari Kencang</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_101')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  القارعة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Qari’ah</Text>
              <Text style={styles.count}>Hari Kiamat</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_102')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  التكاثر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah At-Takasur</Text>
              <Text style={styles.count}>Bermegah-Megahan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_103')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  العصر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-‘Asr</Text>
              <Text style={styles.count}>Masa/Waktu</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_104')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الهُمَزة
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Humazah</Text>
              <Text style={styles.count}>Pengumpat</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_105')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الْفِيلِ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Fil</Text>
              <Text style={styles.count}>Gajah</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_106')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  قُرَيْشٍ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Quraisy</Text>
              <Text style={styles.count}>Suku Quraisy</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_107')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الْمَاعُونَ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Ma’un</Text>
              <Text style={styles.count}>Barang2 Yang Berguna</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_108')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الكوثر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Kausar</Text>
              <Text style={styles.count}>Nikmat Yang Berlimpah</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_109')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الْكَافِرُونَ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Kafirun</Text>
              <Text style={styles.count}>Orang-Orang Kafir</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_110')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  النصر
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah An-Nasr</Text>
              <Text style={styles.count}>Pertolongan</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_111')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  المسد
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Lahab</Text>
              <Text style={styles.count}>Gejolak Api/ Sabut</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_112')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الإخلاص
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Ikhlas</Text>
              <Text style={styles.count}>Ikhlas</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_113')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  الْفَلَقِ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah Al-Falaq</Text>
              <Text style={styles.count}>Waktu Subuh</Text>

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('persurat_114')}
            style={styles.card}
          >
            <View style={styles.image}>
              <View style={styles.teks}>
                <Text>
                  النَّاسِ
                </Text>
              </View>

            </View>
            <View style={styles.cardContent}>
              <Text style={styles.name}>Surah An-Nas</Text>
              <Text style={styles.count}>Manusia</Text>

            </View>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  teks: {
    alignSelf: 'center',
    marginTop: 33,
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#009688',
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
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'flex-start',
    color: '#009688',
    fontWeight: 'bold',
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'flex-start',
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
  Search: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
    elevation: 20,
  },
});
