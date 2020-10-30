import React from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableNativeFeedback,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';

export default class Persurat_11 extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isLoading: true,
      dataSource: [],
      data1: [],
    };
  }

  test = () => {
    fetch ('https://masjidindonesia.000webhostapp.com/quran-json/11.json')
      .then (response => response.json ())
      .then (responseJson => {
        console.log (responseJson);
        this.setState ({isLoading: false, dataSource: responseJson});
      })
      .catch (err => console.log (err));
  };
  componentDidMount () {
    this.test ();
  }
  _itemComponent = ({item}) => {
    const {urutan, latin, arab, text_arab, text_arti, arti} = item;
    return (
      <View style={{flex: 1}}>

        <View style={Styles.View1}>

          <View style={Styles.View2}>

            <View style={Styles.View5}>

              <View style={Styles.View6}>

                <Text style={Styles.teksurat}>{text_arab.verse_01}</Text>
                <Text style={Styles.teksurat}>{text_arab.verse_02}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_03}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_04}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_05}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_06}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_07}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_08}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_09}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_010}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_011}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_012}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_013}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_014}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_015}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_016}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_017}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_018}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_019}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_020}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_021}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_022}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_023}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_024}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_025}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_026}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_027}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_028}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_029}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_030}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_031}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_032}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_033}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_034}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_035}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_036}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_037}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_038}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_039}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_040}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_041}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_042}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_043}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_044}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_045}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_046}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_047}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_048}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_049}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_050}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_051}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_052}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_053}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_054}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_055}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_056}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_057}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_058}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_059}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_060}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_061}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_062}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_063}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_064}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_065}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_066}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_067}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_068}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_069}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_070}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_071}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_072}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_073}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_074}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_075}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_076}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_077}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_078}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_079}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_080}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_081}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_082}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_083}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_084}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_085}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_086}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_087}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_088}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_089}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_090}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_091}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_092}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_093}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_094}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_095}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_096}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_097}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_098}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_099}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0100}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0101}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0102}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0103}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0104}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0105}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0106}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0107}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0108}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0109}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0110}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0111}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0112}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0113}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0114}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0115}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0116}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0117}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0118}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0119}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0120}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0121}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0122}</Text>
<Text style={Styles.teksurat}>{text_arab.verse_0123}</Text>

              </View>
              <View style={{paddingTop: 10}}>
                <Text style={Styles.tekarti}>Artinya :</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_1}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_2}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_3}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_4}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_5}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_6}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_7}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_8}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_9}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_10}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_11}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_12}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_13}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_14}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_15}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_16}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_17}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_18}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_19}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_20}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_21}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_22}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_23}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_24}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_25}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_26}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_27}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_28}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_29}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_30}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_31}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_32}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_33}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_34}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_35}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_36}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_37}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_38}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_39}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_40}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_41}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_42}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_43}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_44}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_45}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_46}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_47}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_48}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_49}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_50}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_51}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_52}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_53}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_54}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_55}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_56}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_57}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_58}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_59}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_60}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_61}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_62}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_63}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_64}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_65}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_66}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_67}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_68}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_69}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_70}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_71}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_72}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_73}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_74}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_75}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_76}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_77}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_78}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_79}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_80}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_81}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_82}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_83}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_84}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_85}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_86}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_87}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_88}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_89}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_90}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_91}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_92}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_93}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_94}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_95}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_96}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_97}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_98}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_99}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_100}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_101}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_102}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_103}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_104}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_105}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_106}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_107}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_108}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_109}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_110}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_111}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_112}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_113}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_114}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_115}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_116}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_117}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_118}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_119}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_120}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_121}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_122}</Text>
<Text style={Styles.teksurat}>{text_arti.verse_123}</Text>


              </View>

            </View>

          </View>

        </View>

      </View>
    );
  };

  render () {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#009688" barStyle="light-content" />
        <View style={{flex: 1}}>
          <View style={Styles.Search}>
            <Text style={{color: '#fff'}}>
            هود
            </Text>
          </View>
          <View>
            <FlatList
              data={this.state.dataSource}
              renderItem={this._itemComponent}
              keyExtractor={(item, index) => item.toString ()}
              onRefresh={this.test}
              refreshing={this.state.isLoading}
            />
          </View>
        </View>

      </View>
    );
  }
}

const Styles = StyleSheet.create ({
  bag2: {
    height: 45,
    width: 45,
  },
  teksurat: {
    fontSize: 20,
    padding: 10,
  },
  tekarti: {
    fontSize: 10,
    padding: 5,
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
  bag1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  bag5: {
    flex: 1,
    backgroundColor: '#b8860b',
  },
  bag6: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  bag7: {
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  bag8: {
    height: 45,
    width: 45,
  },
  bag3: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7fffd4',
    elevation: 20,
  },
  View1: {
    paddingTop: 10,
  },
  View2: {
    flexDirection: 'column',
  },
  View3: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  View4: {
    padding: 10,
    backgroundColor: '#009688',
    borderRadius: 100,
    height: 40,
    width: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  View5: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
  View6: {
    paddingRight: 20,
  },
});
