import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Linking, 
    TextInput, 
    Button,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {styles} from './styles'
import Header from '../../utils/header'

 class Konfirmasi_Donasi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no_konfirmasi: '',
      pesanKonfirmasi: '',
    };
  }
  KirimMelaluiWhatsApp=() => {
    let pesanKonfirmasi = this.state.pesanKonfirmasi;
    let mobile = this.state.no_konfirmasi;
    if(mobile){
      if(pesanKonfirmasi){
        let url = 'whatsapp://send?text=' + this.state.pesanKonfirmasi + '&phone=62' + this.state.no_konfirmasi;
        Linking.openURL(url).then((data) => {
          console.log('WhatsApp Sukses Dibuka');
        }).catch(() => {
          alert('Pastikan Aplikasi WhatsApp Terinstall Di Hanhphone Anda');
        });
      }else{
        alert('Mohon Dimasukan Pesan Konfirmasi');
      }
    }else{
      alert('Mohon Masukan No. Konfirmasi Donasi');
    }
  }

  componentDidMount(){
      this.setState({
          no_konfirmasi : this.props.navigation.state.params.NO_KONFIRMASIKE1,
          pesanKonfirmasi : this.props.navigation.state.params.CONTOH_KONFIRMASI
      })
  }
  render() {
    return (
            <View>
                <ScrollView>
                    <Header header='Konfirmasikan Donasi Anda'/>
                        <View style={styles.container}>
                            <Text style={ styles.subContainerKonfirmasi}>
                            Silakan Anda Edit dibagian Pesan Konfirmasi
                            </Text>
                            <View>
                                <Text style = { styles.JudulInput}>No.Konfirmasi</Text>
                                <Text style = { styles.input}> { this.state.no_konfirmasi}</Text>
                            </View>
                            <View>
                                <Text style = { styles.JudulInput}>Pesan Konfirmasi</Text>
                                <TextInput
                                value={this.state.pesanKonfirmasi}
                                onChangeText={pesanKonfirmasi => this.setState({ pesanKonfirmasi })}
                                placeholder={'Pesan Konfirmasi Donasi'}
                                style={styles.input}
                                />
                            </View>
                            <View style={{marginTop:20}}>
                            <TouchableOpacity onPress = { () => this.KirimMelaluiWhatsApp()}>
                                <View style = { styles.ViewBtn}>
                                    <Text style = { styles.btnKonfirmasi}>Kirim Konfirmasi Donasi </Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                    </View>
                </ScrollView>
        </View>
    );
  }
}
export default Konfirmasi_Donasi;
