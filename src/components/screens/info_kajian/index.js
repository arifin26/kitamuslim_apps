import React, { Component } from 'react';
import { 
    View,
    Text,
    FlatList,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native'
import Header from '../../utils/header'
import {styles} from '../info_kajian/styles'

const Tanggal_Kajian = require('../../../assets/tanggal_kajian.png')
const Waktu_Kajian = require('../../../assets/waktu_kajian.png')
const Alamat_Kajian = require('../../../assets/alamat_kajian.png')
const Kirim_Info_Kajian = require('../../../assets/kirim_info_kajian.png')

class Info_Kajian extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            isLoding: true,
            refreshing: false
         }
    }

    List_Info_Kajian = () =>{
      return fetch('https://masjidindonesia.000webhostapp.com/manajemen_masjid/info_kajian/list_info_kajian.php')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
          this.setState({
            isLoding:false,
            data: responseJson
          })
        })
    }

    componentDidMount(){
      this.List_Info_Kajian()
    }
    
    FlatListItemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }
    _onRefresh(){
      this.setState({refreshing: true}) ;
       this.List_Info_Kajian().then(() => {
         this.setState({
           refreshing: false
         })
       })
    }
   
    DetailInfoKajian = (id,tanggal_kajian, tema_kajian, pemateri_kajian, waktu_kajian, alamat_kajian, maps_kajian, info_tambahan_kajian, kontak_panitia_kajian, katagori_kajian) => {
      this.props.navigation.navigate('DetailInfoKajian',{ID:id,TANGGAL_KAJIAN:tanggal_kajian, TEMA_KAJIAN:tema_kajian, PEMATERI_KAJIAN:pemateri_kajian, WAKTU_KAJIAN:waktu_kajian, ALAMAT_KAJIAN:alamat_kajian, MAPS_KAJIAN:maps_kajian, INFO_TAMBAHAN_KAJIAN:info_tambahan_kajian, KONTAK_PANITIA_KAJIAN:kontak_panitia_kajian, KATAGORI_KAJIAN:katagori_kajian})
    }
    
      renderItems = ({ item, index }) => {
        const {id,tanggal_kajian, tema_kajian, pemateri_kajian, waktu_kajian, alamat_kajian, maps_kajian, info_tambahan_kajian, kontak_panitia_kajian, katagori_kajian}=item
        return(
        <TouchableOpacity onPress={this.DetailInfoKajian.bind(this,id,tanggal_kajian, tema_kajian, pemateri_kajian, waktu_kajian, alamat_kajian, maps_kajian, info_tambahan_kajian, kontak_panitia_kajian, katagori_kajian)}>
          <View style = { styles.MainContainer}>
            <View style = { styles.flexList}>
              <View style = { styles.katagori}>
                <Text style = { styles.katagori_kajian}>{katagori_kajian}</Text>
              </View>
              <View style = {styles.noteinfokajian}>
                  <Text style = { styles.tema_kajian}>{tema_kajian}</Text>
                  <Text style = { styles.pemateri_kajian}>{pemateri_kajian}</Text>
                <View style = { styles.S_Tanggal_Kajian}>
                  <Image source = {Tanggal_Kajian} style = {styles.imgIcon}/>
                  <Text style = { styles.tanggal_kajian}>{tanggal_kajian}</Text>
                </View>
                <View style = { styles.S_Tanggal_Kajian}>
                  <Image source = {Waktu_Kajian} style = {styles.imgIcon}/>
                  <Text style = { styles.waktu_kajian}>{waktu_kajian}</Text>
                </View>
                <View style = { styles.S_Tanggal_Kajian}>
                  <Image source = {Alamat_Kajian} style = {styles.imgIcon}/>
                  <Text style = { styles.alamat_kajian}>{alamat_kajian}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        )
     }
    
     ListEmptyView = (isLoading = this.state.isLoading) => {
      if (isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }else{
        return (
          <View>
            <Text style={{textAlign: 'center'}}> Tidak Ada Data.</Text>
          </View>
      );
    }
  }
    render() { 
        return ( 
            <View style = { styles.CoreContainer}>
            <StatusBar backgroundColor='#009688' />
              <Header header='INFORMASI KAJIAN'/>
              <View>
              <FlatList
                   data={this.state.data}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                   keyExtractor={item => item.toString()}
                   renderItem={this.renderItems}
                   ListEmptyComponent={this.ListEmptyView}
                     refreshControl={
                      <RefreshControl refreshing = {this.state.refreshing}
                        onRefresh  = {this._onRefresh.bind(this)}
                        />
                    }

                   />
              </View>
              <TouchableOpacity onPress = { () => this.props.navigation.navigate('KirimInfoKajian')} style = {styles.TouchableOpacity}>
              <Image source = { Kirim_Info_Kajian }  style = { styles.Kirim_Info_Kajian}/>
            </TouchableOpacity>
            </View>
         );
    }
}
 
export default Info_Kajian;