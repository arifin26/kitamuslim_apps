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

export default class Persurat_109 extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isLoading: true,
      dataSource: [],
      data1: [],
    };
  }

  test = () => {
    fetch ('https://masjidindonesia.000webhostapp.com/quran-json/109.json')
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
      <View style={{falex: 1}}>

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

              </View>
              <View style={{paddingTop: 10}}>
                <Text style={Styles.tekarti}>Artinya :</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_1}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_2}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_3}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_4}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_5}</Text>
                <Text style={Styles.teksurat}>{text_arti.verse_6}</Text>

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
              الْكَافِرُونَ
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
