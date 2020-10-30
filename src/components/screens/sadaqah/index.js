import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from "react-native"
import Header from '../../utils/header'
import {styles} from './styles'
import {isEmpty} from 'lodash'

const Logo = require('../../../assets/sadaqah.png')


class Donasi extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      isLoding :  true,
      refreshing: false ,
      total_berlangsung: '',
      total_selesai: ''
     }
  }

  List_Donasi = () =>{
    return fetch('https://masjidindonesia.000webhostapp.com/manajemen_masjid/donasi/list_donasi.php')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          isLoding:false,
          data: responseJson,
        })
      })
  }

  componentDidMount(){
    this.List_Donasi()
  }
  
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
        }}
      />
    );
  }
  _onRefresh(){
    this.setState({refreshing: true}) ;
     this.List_Donasi().then(() => {
       this.setState({
         refreshing: false
       })
     })
  }

 Detail_Donasi = (detailItems) => {
  this.props.navigation.navigate('Detail_Donasi',{detil:detailItems})   
 }

  renderItems = ({ item }) => {
    const {id,judul_donasi, nama_perorangan_lembang, donasi_dibutuhkan, lokasi, bank, kode_bank, no_rekening, no_konfirmasi, donasi_terkumpul,status_donasi, image_path, contoh_konfirmasi, rekening_atas_nama}=item
    return(
    <TouchableOpacity onPress={ () => this.Detail_Donasi([
      `${id}`,
      `${judul_donasi}`,
      `${nama_perorangan_lembang}`,
      `${donasi_dibutuhkan}`,
      `${lokasi}`,
      `${bank}`,
      `${kode_bank}`,
      `${no_rekening}`,
      `${no_konfirmasi}`,
      `${donasi_terkumpul}`,
      `${status_donasi}`,
      `${image_path}`,
      `${contoh_konfirmasi}`,
      `${rekening_atas_nama}`])}>
      <View style = { styles.containerList}>
        <View style = {styles.conGambar}>
          <Image source =  {{ uri:image_path }}  style = { styles.gmbrDonasi}/>
        </View>
        <View style = { styles.note}>
        <Text style = { styles.judul_donasi}>{judul_donasi}</Text>
        <Text style = { styles.textDonasi}>Dibutuhkan : Rp. {donasi_dibutuhkan}</Text>
        <Text style = { styles.textDonasi}>Terkumpul : Rp. {donasi_terkumpul}</Text>
        <Text style = { styles.textDonasi}>Status Donasi : {status_donasi}</Text>
        </View>
      </View>
     </TouchableOpacity>
    )
 }

 ListEmptyView = (isLoading = this.state.isLoading) => {
  if (isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator size='large'/>
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
    const Total_Berlangsung = isEmpty(this.state.data) ? 'Loding...' : this.state.data.map((Items) => ( <Text style = { styles.angka}>{Items.total_berlangsung}</Text>))
    const Total_Selesai = isEmpty(this.state.data) ? 'Loding...' : this.state.data.map((Items) => ( <Text style = { styles.angka}>{Items.total_selesai}</Text>))
    return ( 
      <View style = { styles.Maincontainer}>
      <StatusBar backgroundColor='#009688' />
        <Header header='Donasi/Sadaqah'/>
        <View style = { styles.SubMain1}>
          <View style = { styles.banner}>
            <View style = { styles.logo}>
              <Image source ={Logo} style = {styles.sizeimage}/>
              <View>
                <Text style = { styles.donasi}> Donasi/Sadaqah</Text>
                <Text  style = { styles.textDonasi}> Galang Dana Untuk Membantu Saudara Muslim </Text>
              </View>
            </View>
            <View style = { styles.informasi}>
              <View style = { styles.traffic}>
                <Text style = { styles.judulTraffic}>Berlangsung</Text>
               <Text style = { styles.angka}> { Total_Berlangsung } </Text>
              </View>
              <View style = { styles.traffic}>
                <Text style = { styles.judulTraffic}>Telah Selesai</Text>
                <Text style = { styles.angka}> { Total_Selesai } </Text>
              </View>
            </View>
          </View>
          <View style = { styles.quis}> 
            <Text style = { styles.textQuis}>Siap Memberikan Bantuan ?</Text>
            <Text style = { styles.SubtextQuis}>Mari Manfaatkan Harta  anda Di Jalan Allah</Text>
          </View>
        </View>
        <View style = { styles.MainFlatlist}>
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
      </View>
     );
  }
}
 
export default Donasi;