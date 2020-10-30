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
import asmaulhusna from './asmaulhusna.json';

export default class Test extends Component {
  state = {
    asmaulhusna,
  };

  clickEventListener = item => {
    Alert.alert ('nomor', 'urutannya: ' + item.urutan);
  };

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009688'/>
        <View style={styles.Header}>
          <Text style={{color: '#fff',fontSize:20}}>
            Asma'ul-Husna
          </Text>
        </View>
        <FlatList
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.asmaulhusna}
          keyExtractor={(index, item) => toString ()}
          renderItem={({index, item}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => {
                  this.clickEventListener (item);
                }}
              >
                <View style={styles.image}>
                  <Text style={styles.teks}>{item.arab}</Text>
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.name}>{item.latin}</Text>
                  <Text style={styles.count}>{item.arti}</Text>
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
    // marginTop: 20,
    backgroundColor: '#ebf0f7',
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#009688',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  teks: {
    alignSelf: 'center',
    marginTop: 15,
  },
  Header: {
    height: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#009688'
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
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,

    color: '#3399ff',
    fontWeight: 'bold',
  },
  count: {
    fontSize: 14,
    flex: 1,

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
