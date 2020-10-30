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

export default class Persurat_42 extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isLoading: true,
      dataSource: [],
      data1: [],
    };
  }

  test = () => {
    fetch ('https://masjidindonesia.000webhostapp.com/quran-json/42.json')
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
              الشّورى
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
