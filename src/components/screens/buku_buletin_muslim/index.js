import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import Header from '../../utils/header';
import {styles} from './styles';

const Buku = require('../../../assets/buku_muslim.png');

class Test extends Component {
  render() {
    return (
      <View style={styles.Maincontainer}>
        <StatusBar backgroundColor="#009688" />
        <Header header="Buku Buletin Muslim" />
        <ScrollView>
          <View style={styles.SubContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_1')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>
                  Buku-Buletin Gratis Rumaysho
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_2')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>Naskah Khutbah Jumat</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_3')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>Buletin Jumat Rumaysho</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_4')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>Buletin Umum Berbagai Tema</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_5')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>
                  Buletin Remaja Berbagai Tema
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_6')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>Buletin Tema Muslimah</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_7')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>
                  Dzikir dan Fikih(Riyadhus Sholihin&Kitab Manhajus Salikin)
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_8')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>Riyadhus Sholihin-Adab</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_9')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>
                  Tafsir Surah Yasin & Riyadhus Sholihin Fadhilah Amal
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_10')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>Riyadhus Sholihin- Dzikir</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_11')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>Hadits Arbain An-Nawawiyah</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_12')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>Tafsir Surah An-Nur</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_13')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>
                  Sirah Nabawiyah & Berbagai Amalan
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_14')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>
                  Syarhus Sunnah Karya Imam Al-Muzani Asy-Syafi'i
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_15')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>
                  Safinatun Najah - Fikih Dasar Syafi'i
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_16')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>Bulughul Maram-Shalat</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_17')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>Bulughul Maram-Adab</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_18')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>
                  Parenting(Tarbiyah Al-Awlad fi Al-Islam
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_19')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>
                  Dosa Besar(Al-Kabair Karya Imam Adz-Dzahabi)
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Rumaysho_20')}>
              <View style={styles.ContainerIconButton}>
                <Image source={Buku} style={styles.IconStyling} />
                <Text style={styles.IconText}>Buletin Cara Shalat Nabi</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Test;
