import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Al_Quran from '../components/screens/al_quran';
import Arah_Kiblat from '../components/screens/arah_kiblat';
import Artikel_Muslim from '../components/screens/artikels';
import Asmaul_Husna from '../components/screens/asmaul_husna';
import Buku_Buletin_Muslim from '../components/screens/buku_buletin_muslim';
import Dzikir from '../components/screens/dzikir';
import Info_Kajian from '../components/screens/info_kajian';
import Kalender_Hijriyah from '../components/screens/kalender_hijriyah';
import Kas_Masjid from '../components/screens/kas_masjid';
import masjid_terdekat from '../components/screens/masjid_terdekat/index';
import CategoriesScreen from '../components/screens/galeri islami';
import Sadaqah from '../components/screens/sadaqah';
import Dashboard_Umum from '../../src/';
import Petang from '../components/screens/dzikir/petang';
import Pagi from '../components/screens/dzikir/pagi';
import Tatacarasholat from '../components/screens/shalat/tatacarasholat';
import Doasetelahsholat from '../components/screens/shalat/doasetelahsholat';
import DetailInfoKajian from '../components/screens/info_kajian/detail_info_kajian';
import KirimInfoKajian from '../components/screens/info_kajian/kirim_info_kajian';

import Rumaysho_1 from '../components/screens/buku_buletin_muslim/pages/buku_buletin_gratis_rumaysho';
import Rumaysho_2 from '../components/screens/buku_buletin_muslim/pages/naskah_khutbah_jumat';
import Rumaysho_3 from '../components/screens/buku_buletin_muslim/pages/buletin_jumat_rumaysho';
import Rumaysho_4 from '../components/screens/buku_buletin_muslim/pages/buletin_umum_berbagai_tema';
import Rumaysho_5 from '../components/screens/buku_buletin_muslim/pages/buletin_remaja_berbagai_tema';
import Rumaysho_6 from '../components/screens/buku_buletin_muslim/pages/buletin_tema_muslimah';
import Rumaysho_7 from '../components/screens/buku_buletin_muslim/pages/dzikir_fikih_riyadhussholihin_manhajus_salikin';
import Rumaysho_8 from '../components/screens/buku_buletin_muslim/pages/riyadhussholihin_adab';
import Rumaysho_9 from '../components/screens/buku_buletin_muslim/pages/tafsir_surah_yasin_riyadhus_sholihin_fadhilah_amal';
import Rumaysho_10 from '../components/screens/buku_buletin_muslim/pages/riyadhus_sholihin_dzikir';
import Rumaysho_11 from '../components/screens/buku_buletin_muslim/pages/hadits_arbain_an_nawawiyah';
import Rumaysho_12 from '../components/screens/buku_buletin_muslim/pages/tafsir_surah_an_nur';
import Rumaysho_13 from '../components/screens/buku_buletin_muslim/pages/sirah_nabawiyah';
import Rumaysho_14 from '../components/screens/buku_buletin_muslim/pages/syarhus_sunnah';
import Rumaysho_15 from '../components/screens/buku_buletin_muslim/pages/safinatun_najah';
import Rumaysho_16 from '../components/screens/buku_buletin_muslim/pages/bulughul_maram_shalat';
import Rumaysho_17 from '../components/screens/buku_buletin_muslim/pages/bulughul_maram_adab';
import Rumaysho_18 from '../components/screens/buku_buletin_muslim/pages/parenting';
import Rumaysho_19 from '../components/screens/buku_buletin_muslim/pages/dosa_besar';
import Rumaysho_20 from '../components/screens/buku_buletin_muslim/pages/cara_shalat_nabi';
import Detail_Donasi from '../components/screens/sadaqah/detail_donasi';
import Donasi_Sekarang from '../components/screens/sadaqah/donasi_sekarang';
import Konfirmasi_Donasi from '../components/screens/sadaqah/konfirmasi_donasi';
import Konfirmasi_SMS from '../components/screens/sadaqah/konfirmasi_sms';
import persurat from '../components/screens/al_quran/persurat/screen_1';
import persurat_2 from '../components/screens/al_quran/persurat/screen_2';
import persurat_3 from '../components/screens/al_quran/persurat/screen_3';
import persurat_4 from '../components/screens/al_quran/persurat/screen_4';
import persurat_5 from '../components/screens/al_quran/persurat/screen_5';
import persurat_6 from '../components/screens/al_quran/persurat/screen_6';
import persurat_7 from '../components/screens/al_quran/persurat/screen_7';
import persurat_8 from '../components/screens/al_quran/persurat/screen_8';
import persurat_9 from '../components/screens/al_quran/persurat/screen_9';
import persurat_10 from '../components/screens/al_quran/persurat/screen_10';
import persurat_11 from '../components/screens/al_quran/persurat/screen_11';
import persurat_12 from '../components/screens/al_quran/persurat/screen_12';
import persurat_13 from '../components/screens/al_quran/persurat/screen_13';
import persurat_14 from '../components/screens/al_quran/persurat/screen_14';
import persurat_15 from '../components/screens/al_quran/persurat/screen_15';
import persurat_16 from '../components/screens/al_quran/persurat/screen_16';
import persurat_17 from '../components/screens/al_quran/persurat/screen_17';
import persurat_18 from '../components/screens/al_quran/persurat/screen_18';
import persurat_19 from '../components/screens/al_quran/persurat/screen_19';
import persurat_20 from '../components/screens/al_quran/persurat/screen_20';
import persurat_21 from '../components/screens/al_quran/persurat/screen_21';
import persurat_22 from '../components/screens/al_quran/persurat/screen_22';
import persurat_23 from '../components/screens/al_quran/persurat/screen_23';
import persurat_24 from '../components/screens/al_quran/persurat/screen_24';
import persurat_25 from '../components/screens/al_quran/persurat/screen_25';
import persurat_26 from '../components/screens/al_quran/persurat/screen_26';
import persurat_27 from '../components/screens/al_quran/persurat/screen_27';
import persurat_28 from '../components/screens/al_quran/persurat/screen_28';
import persurat_29 from '../components/screens/al_quran/persurat/screen_29';
import persurat_30 from '../components/screens/al_quran/persurat/screen_30';
import persurat_31 from '../components/screens/al_quran/persurat/screen_31';
import persurat_32 from '../components/screens/al_quran/persurat/screen_32';
import persurat_33 from '../components/screens/al_quran/persurat/screen_33';
import persurat_34 from '../components/screens/al_quran/persurat/screen_34';
import persurat_35 from '../components/screens/al_quran/persurat/screen_35';
import persurat_36 from '../components/screens/al_quran/persurat/screen_36';
import persurat_37 from '../components/screens/al_quran/persurat/screen_37';
import persurat_38 from '../components/screens/al_quran/persurat/screen_38';
import persurat_39 from '../components/screens/al_quran/persurat/screen_39';
import persurat_40 from '../components/screens/al_quran/persurat/screen_40';
import persurat_41 from '../components/screens/al_quran/persurat/screen_41';
import persurat_42 from '../components/screens/al_quran/persurat/screen_42';
import persurat_43 from '../components/screens/al_quran/persurat/screen_43';
import persurat_44 from '../components/screens/al_quran/persurat/screen_44';
import persurat_45 from '../components/screens/al_quran/persurat/screen_45';
import persurat_46 from '../components/screens/al_quran/persurat/screen_46';
import persurat_47 from '../components/screens/al_quran/persurat/screen_47';
import persurat_48 from '../components/screens/al_quran/persurat/screen_48';
import persurat_49 from '../components/screens/al_quran/persurat/screen_49';
import persurat_50 from '../components/screens/al_quran/persurat/screen_50';
import persurat_51 from '../components/screens/al_quran/persurat/screen_51';
import persurat_52 from '../components/screens/al_quran/persurat/screen_52';
import persurat_53 from '../components/screens/al_quran/persurat/screen_53';
import persurat_54 from '../components/screens/al_quran/persurat/screen_54';
import persurat_55 from '../components/screens/al_quran/persurat/screen_55';
import persurat_56 from '../components/screens/al_quran/persurat/screen_56';
import persurat_57 from '../components/screens/al_quran/persurat/screen_57';
import persurat_58 from '../components/screens/al_quran/persurat/screen_58';
import persurat_59 from '../components/screens/al_quran/persurat/screen_59';
import persurat_60 from '../components/screens/al_quran/persurat/screen_60';
import persurat_61 from '../components/screens/al_quran/persurat/screen_61';
import persurat_62 from '../components/screens/al_quran/persurat/screen_62';
import persurat_63 from '../components/screens/al_quran/persurat/screen_63';
import persurat_64 from '../components/screens/al_quran/persurat/screen_64';
import persurat_65 from '../components/screens/al_quran/persurat/screen_65';
import persurat_66 from '../components/screens/al_quran/persurat/screen_66';
import persurat_67 from '../components/screens/al_quran/persurat/screen_67';
import persurat_68 from '../components/screens/al_quran/persurat/screen_68';
import persurat_69 from '../components/screens/al_quran/persurat/screen_69';
import persurat_70 from '../components/screens/al_quran/persurat/screen_70';
import persurat_71 from '../components/screens/al_quran/persurat/screen_71';
import persurat_72 from '../components/screens/al_quran/persurat/screen_72';
import persurat_73 from '../components/screens/al_quran/persurat/screen_73';
import persurat_74 from '../components/screens/al_quran/persurat/screen_74';
import persurat_75 from '../components/screens/al_quran/persurat/screen_75';
import persurat_76 from '../components/screens/al_quran/persurat/screen_76';
import persurat_77 from '../components/screens/al_quran/persurat/screen_77';
import persurat_78 from '../components/screens/al_quran/persurat/screen_78';
import persurat_79 from '../components/screens/al_quran/persurat/screen_79';
import persurat_80 from '../components/screens/al_quran/persurat/screen_80';
import persurat_81 from '../components/screens/al_quran/persurat/screen_81';
import persurat_82 from '../components/screens/al_quran/persurat/screen_82';
import persurat_83 from '../components/screens/al_quran/persurat/screen_83';
import persurat_84 from '../components/screens/al_quran/persurat/screen_84';
import persurat_85 from '../components/screens/al_quran/persurat/screen_85';
import persurat_86 from '../components/screens/al_quran/persurat/screen_86';
import persurat_87 from '../components/screens/al_quran/persurat/screen_87';
import persurat_88 from '../components/screens/al_quran/persurat/screen_88';
import persurat_89 from '../components/screens/al_quran/persurat/screen_89';
import persurat_90 from '../components/screens/al_quran/persurat/screen_90';
import persurat_91 from '../components/screens/al_quran/persurat/screen_91';
import persurat_92 from '../components/screens/al_quran/persurat/screen_92';
import persurat_93 from '../components/screens/al_quran/persurat/screen_93';
import persurat_94 from '../components/screens/al_quran/persurat/screen_94';
import persurat_95 from '../components/screens/al_quran/persurat/screen_95';
import persurat_96 from '../components/screens/al_quran/persurat/screen_96';
import persurat_97 from '../components/screens/al_quran/persurat/screen_97';
import persurat_98 from '../components/screens/al_quran/persurat/screen_98';
import persurat_99 from '../components/screens/al_quran/persurat/screen_99';
import persurat_100 from '../components/screens/al_quran/persurat/screen_100';
import persurat_101 from '../components/screens/al_quran/persurat/screen_101';
import persurat_102 from '../components/screens/al_quran/persurat/screen_102';
import persurat_103 from '../components/screens/al_quran/persurat/screen_103';
import persurat_104 from '../components/screens/al_quran/persurat/screen_104';
import persurat_105 from '../components/screens/al_quran/persurat/screen_105';
import persurat_106 from '../components/screens/al_quran/persurat/screen_106';
import persurat_107 from '../components/screens/al_quran/persurat/screen_107';
import persurat_108 from '../components/screens/al_quran/persurat/screen_108';
import persurat_109 from '../components/screens/al_quran/persurat/screen_109';
import persurat_110 from '../components/screens/al_quran/persurat/screen_110';
import persurat_111 from '../components/screens/al_quran/persurat/screen_111';
import persurat_112 from '../components/screens/al_quran/persurat/screen_112';
import persurat_113 from '../components/screens/al_quran/persurat/screen_113';
import persurat_114 from '../components/screens/al_quran/persurat/screen_114';
import Persurat_1 from '../components/screens/al_quran/persurat/screen_1';

// import Detail_Laporan_Keuangan_Donasi from '../components/screens/penyaluran_donasi/detail_laporan_donasi'

const Stack = createStackNavigator();
// const drawer = createDrawerNavigator();
const materialToptab = createMaterialTopTabNavigator();

export default class Route extends React.Component {
  render() {
    creatToptab1 = () => {
      return (
        <materialToptab.Navigator>
          <materialToptab.Screen
            name="Pagi"
            component={Pagi}
            TabBarOptions={{
              headerStyle: {
                backgroundColor: '#009688',
              },
            }}
          />
          <materialToptab.Screen
            name="Petang"
            component={Petang}
            options={{
              headerStyle: {
                backgroundColor: '#009688',
              },
            }}
          />
        </materialToptab.Navigator>
      );
    };
    creatToptab2 = () => {
      return (
        <materialToptab.Navigator>
          <materialToptab.Screen
            name="Tata cara shalat"
            component={Tatacarasholat}
            TabBarOptions={{
              headerStyle: {
                backgroundColor: '#009688',
              },
            }}
          />
          <materialToptab.Screen
            name="Dzikir Setelah Shalat"
            component={Doasetelahsholat}
            options={{
              headerStyle: {
                backgroundColor: '#009688',
              },
            }}
          />
        </materialToptab.Navigator>
      );
    };

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard_Umum"
            component={Dashboard_Umum}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Al_Quran"
            component={Al_Quran}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Arah_Kiblat"
            component={Arah_Kiblat}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Artikel_Muslim"
            component={Artikel_Muslim}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Asmaul_Husna"
            component={Asmaul_Husna}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Buku_Buletin_Muslim"
            component={Buku_Buletin_Muslim}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Dzikir"
            component={Dzikir}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Info_Kajian"
            component={Info_Kajian}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Kas_Masjid"
            component={Kas_Masjid}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Masjid_Terdekat"
            component={masjid_terdekat}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Penyaluran_Donasi"
            component={CategoriesScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Sadaqah"
            component={Sadaqah}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name="Shalat"
            component={Shalat}
            options={{
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="Kalender_Hijriyah"
            component={Kalender_Hijriyah}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DetailInfoKajian"
            component={DetailInfoKajian}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="KirimInfoKajian"
            component={KirimInfoKajian}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_1"
            component={Rumaysho_1}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_2"
            component={Rumaysho_2}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_3"
            component={Rumaysho_3}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_4"
            component={Rumaysho_4}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_5"
            component={Rumaysho_5}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_6"
            component={Rumaysho_6}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_7"
            component={Rumaysho_7}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_8"
            component={Rumaysho_8}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_9"
            component={Rumaysho_9}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_10"
            component={Rumaysho_10}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_11"
            component={Rumaysho_11}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_12"
            component={Rumaysho_12}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_13"
            component={Rumaysho_13}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_14"
            component={Rumaysho_14}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_15"
            component={Rumaysho_15}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_16"
            component={Rumaysho_16}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_17"
            component={Rumaysho_17}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_18"
            component={Rumaysho_18}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_19"
            component={Rumaysho_19}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Rumaysho_20"
            component={Rumaysho_20}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Detail_Donasi"
            component={Detail_Donasi}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Donasi_Sekarang"
            component={Donasi_Sekarang}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Konfirmasi_Donasi"
            component={Konfirmasi_Donasi}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Konfirmasi_SMS"
            component={Konfirmasi_SMS}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat"
            component={persurat}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_1"
            component={Persurat_1}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_2"
            component={persurat_2}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_3"
            component={persurat_3}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_4"
            component={persurat_4}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_5"
            component={persurat_5}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_6"
            component={persurat_6}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_7"
            component={persurat_7}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_8"
            component={persurat_8}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_9"
            component={persurat_9}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_10"
            component={persurat_10}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_11"
            component={persurat_11}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_12"
            component={persurat_12}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_13"
            component={persurat_13}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_14"
            component={persurat_14}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_15"
            component={persurat_15}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_16"
            component={persurat_16}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_17"
            component={persurat_17}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_18"
            component={persurat_18}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_19"
            component={persurat_19}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_20"
            component={persurat_20}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_21"
            component={persurat_21}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_22"
            component={persurat_22}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_23"
            component={persurat_23}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_24"
            component={persurat_24}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_25"
            component={persurat_25}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_26"
            component={persurat_26}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_27"
            component={persurat_27}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_28"
            component={persurat_28}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_29"
            component={persurat_29}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_30"
            component={persurat_30}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_31"
            component={persurat_31}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_32"
            component={persurat_32}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_33"
            component={persurat_33}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_34"
            component={persurat_34}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_35"
            component={persurat_35}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_36"
            component={persurat_36}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_37"
            component={persurat_37}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_38"
            component={persurat_38}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_39"
            component={persurat_39}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_40"
            component={persurat_40}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_41"
            component={persurat_41}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_42"
            component={persurat_42}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_43"
            component={persurat_43}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_44"
            component={persurat_44}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_45"
            component={persurat_45}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_46"
            component={persurat_46}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_47"
            component={persurat_47}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_48"
            component={persurat_48}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_49"
            component={persurat_49}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_50"
            component={persurat_50}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_51"
            component={persurat_51}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_52"
            component={persurat_52}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_53"
            component={persurat_53}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_54"
            component={persurat_54}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_55"
            component={persurat_55}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_56"
            component={persurat_56}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_57"
            component={persurat_57}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_58"
            component={persurat_58}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_59"
            component={persurat_59}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_60"
            component={persurat_60}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name=""
            component={persurat_61}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_62}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_63}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_64}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_65}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_66}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_67}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_68}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_69}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_70}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_71}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_72}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_73}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_74}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_75}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_76}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_77}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_78}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_79}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_80}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_81}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_82}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_83}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_84}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_"
            component={persurat_85}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_"
            component={persurat_86}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_"
            component={persurat_87}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_"
            component={persurat_88}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_89"
            component={persurat_89}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_90"
            component={persurat_90}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="persurat_91"
            component={persurat_91}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_92}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_93}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_94}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_95}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_96}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_97}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_98}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_99}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_100}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_101}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_102}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_103}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_104}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_105}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_106}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_107}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_108}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_109}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_110}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_111}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_112}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_113}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name=""
            component={persurat_114}
            options={{
              headerShown: false,
            }} */}
          {/* /> */}
          <Stack.Screen
            name="creatToptab1"
            children={creatToptab1}
            options={{
              headerShown: true,
              headerTitle: 'Dzikir pagi & petang',
              headerLeft: null,
              activeTintColor: '#000',
              inactiveTintColor: '#F8F8F8',
              headerStyle: {
                elevation: null,
                shadowOpacity: 0.9,
                height: 40,
              },
            }}
          />
          <Stack.Screen
            name="creatToptab2"
            children={creatToptab2}
            options={{
              headerShown: true,
              headerTitle: 'Shalat',
              headerLeft: null,
              activeTintColor: '#000',
              inactiveTintColor: '#F8F8F8',
              headerStyle: {
                elevation: null,
                shadowOpacity: 0.9,
                height: 40,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// const Route = createStackNavigator({
//   : {
//     screen: ,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   : {
//     screen: Al_Quran,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   : {
//     screen: Arah_Kiblat,
//     navigationOptions: () => ({
//       title: 'Arah Kiblat',
//     }),
//   },
//   : {
//     screen: Artikel_Muslim,
//     //  navigationOptions: () => ({
//     //         header: null,
//     //       }),
//   },
//   : {
//     screen: Asmaul_Husna,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   : {
//     screen: Buku_Buletin_Muslim,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   : {
//     screen: ,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   Info_Kajian: {
//     screen: Info_Kajian,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   : {
//     screen: Kas_Masjid,
//     //  navigationOptions: () => ({
//     //         header: null,
//     //       }),
//   },
//   : {
//     screen: Masjid_Terdekat,
//     //  navigationOptions: () => ({
//     //         header: null,
//     //       }),
//   },
//   : {
//     screen: CategoriesScreen,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   : {
//     screen: Sadaqah,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   Shalat: {
//     screen: Shalat_Tab,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   Kalender_Hijriyah: {
//     screen: Kalender_Hijriyah,
//     //  navigationOptions: () => ({
//     //         header: null,
//     //       }),
//   },
//   DetailInfoKajian: {
//     screen: DetailInfoKajian,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   KirimInfoKajian: {
//     screen: KirimInfoKajian,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   Rumaysho_1: {
//     screen: Rumaysho_1,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_2: {
//     screen: Rumaysho_2,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_3: {
//     screen: Rumaysho_3,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_4: {
//     screen: Rumaysho_4,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_5: {
//     screen: Rumaysho_5,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_6: {
//     screen: Rumaysho_6,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_7: {
//     screen: Rumaysho_7,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_8: {
//     screen: Rumaysho_8,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_9: {
//     screen: Rumaysho_9,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_10: {
//     screen: Rumaysho_10,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_11: {
//     screen: Rumaysho_11,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_12: {
//     screen: Rumaysho_12,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_13: {
//     screen: Rumaysho_13,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_14: {
//     screen: Rumaysho_14,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_15: {
//     screen: Rumaysho_15,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_16: {
//     screen: Rumaysho_16,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_17: {
//     screen: Rumaysho_17,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_18: {
//     screen: Rumaysho_18,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_19: {
//     screen: Rumaysho_19,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Rumaysho_20: {
//     screen: Rumaysho_20,
//     navigationOptions: () => ({
//       title: 'Daftar Buku Buletin',
//     }),
//   },
//   Detail_Donasi: {
//     screen: Detail_Donasi,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   Donasi_Sekarang: {
//     screen: Donasi_Sekarang,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   Konfirmasi_Donasi: {
//     screen: Konfirmasi_Donasi,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   Konfirmasi_SMS: {
//     screen: Konfirmasi_SMS,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   //Al QURAN
//   persurat: {
//     screen: persurat,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_2: {
//     screen: persurat_2,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_3: {
//     screen: persurat_3,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_4: {
//     screen: persurat_4,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_5: {
//     screen: persurat_5,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_6: {
//     screen: persurat_6,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_7: {
//     screen: persurat_7,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_8: {
//     screen: persurat_8,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_9: {
//     screen: persurat_9,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_10: {
//     screen: persurat_10,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_11: {
//     screen: persurat_11,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_12: {
//     screen: persurat_12,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_13: {
//     screen: persurat_13,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_14: {
//     screen: persurat_14,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_15: {
//     screen: persurat_15,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_16: {
//     screen: persurat_16,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_17: {
//     screen: persurat_17,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_18: {
//     screen: persurat_18,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_19: {
//     screen: persurat_19,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_20: {
//     screen: persurat_20,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_21: {
//     screen: persurat_21,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_22: {
//     screen: persurat_22,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_23: {
//     screen: persurat_23,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_24: {
//     screen: persurat_24,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_25: {
//     screen: persurat_25,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_26: {
//     screen: persurat_26,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_27: {
//     screen: persurat_27,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_28: {
//     screen: persurat_28,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_29: {
//     screen: persurat_29,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_30: {
//     screen: persurat_30,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_31: {
//     screen: persurat_31,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_32: {
//     screen: persurat_32,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_33: {
//     screen: persurat_33,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_34: {
//     screen: persurat_34,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_35: {
//     screen: persurat_35,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_36: {
//     screen: persurat_36,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_37: {
//     screen: persurat_37,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_38: {
//     screen: persurat_38,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_39: {
//     screen: persurat_39,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_40: {
//     screen: persurat_40,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_41: {
//     screen: persurat_41,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_42: {
//     screen: persurat_42,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_43: {
//     screen: persurat_43,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_44: {
//     screen: persurat_44,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_45: {
//     screen: persurat_45,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_46: {
//     screen: persurat_46,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_47: {
//     screen: persurat_47,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_48: {
//     screen: persurat_48,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_49: {
//     screen: persurat_49,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_50: {
//     screen: persurat_50,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_51: {
//     screen: persurat_51,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_52: {
//     screen: persurat_52,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_53: {
//     screen: persurat_53,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_54: {
//     screen: persurat_54,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_55: {
//     screen: persurat_55,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_56: {
//     screen: persurat_56,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_57: {
//     screen: persurat_57,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_58: {
//     screen: persurat_58,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_59: {
//     screen: persurat_59,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_60: {
//     screen: persurat_60,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_61: {
//     screen: persurat_61,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_62: {
//     screen: persurat_62,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_63: {
//     screen: persurat_63,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_64: {
//     screen: persurat_64,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_65: {
//     screen: persurat_65,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_66: {
//     screen: persurat_66,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_67: {
//     screen: persurat_67,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_68: {
//     screen: persurat_68,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_69: {
//     screen: persurat_69,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_70: {
//     screen: persurat_70,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_71: {
//     screen: persurat_71,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_72: {
//     screen: persurat_72,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_73: {
//     screen: persurat_73,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_74: {
//     screen: persurat_74,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_75: {
//     screen: persurat_75,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_76: {
//     screen: persurat_76,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_77: {
//     screen: persurat_77,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_78: {
//     screen: persurat_78,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_79: {
//     screen: persurat_79,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_80: {
//     screen: persurat_80,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_81: {
//     screen: persurat_81,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_82: {
//     screen: persurat_82,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_83: {
//     screen: persurat_83,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_84: {
//     screen: persurat_84,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_85: {
//     screen: persurat_85,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_86: {
//     screen: persurat_86,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_87: {
//     screen: persurat_87,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_88: {
//     screen: persurat_88,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_89: {
//     screen: persurat_89,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_90: {
//     screen: persurat_90,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_91: {
//     screen: persurat_91,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_92: {
//     screen: persurat_92,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_93: {
//     screen: persurat_93,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_94: {
//     screen: persurat_94,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_95: {
//     screen: persurat_95,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_96: {
//     screen: persurat_96,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_97: {
//     screen: persurat_97,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_98: {
//     screen: persurat_98,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_99: {
//     screen: persurat_99,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_100: {
//     screen: persurat_100,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_101: {
//     screen: persurat_101,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_102: {
//     screen: persurat_102,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_103: {
//     screen: persurat_103,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_104: {
//     screen: persurat_104,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_105: {
//     screen: persurat_105,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_106: {
//     screen: persurat_106,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_107: {
//     screen: persurat_107,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_108: {
//     screen: persurat_108,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_109: {
//     screen: persurat_109,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_110: {
//     screen: persurat_110,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_111: {
//     screen: persurat_111,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_112: {
//     screen: persurat_112,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_113: {
//     screen: persurat_113,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   persurat_114: {
//     screen: persurat_114,
//     navigationOptions: () => ({
//       header: null,
//     }),
//   },
//   // Detail_Laporan_Keuangan_Donasi:{
//   // 	screen: Detail_Laporan_Keuangan_Donasi,
//   // 	 navigationOptions: () => ({
//   //             header: null
//   //           })
//   // },
// });
