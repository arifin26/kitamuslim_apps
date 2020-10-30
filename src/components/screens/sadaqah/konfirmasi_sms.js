import React, {Component} from 'react';

import { 
        Alert,
        StyleSheet,
        Text,
        View,
        TouchableOpacity 
    } from 'react-native';
import SendSMS from 'react-native-sms'
import Header from '../../utils/header'

class Konfirmasi_SMS extends Component {

    constructor(props) {
        super(props);
        this.state = {
          no_konfirmasi: '',
          pesanKonfirmasi: '',
        };
      }
  smsSendFunction = () => {
    SendSMS.send({
        body: this.state.pesanKonfirmasi,
        recipients: [`${this.state.no_konfirmasi}`],
        successTypes: ['sent', 'queued'],
        allowAndroidSendWithoutReadPermission: true
    }, (completed, cancelled, error) => {
        if(completed){
            Alert.alert('Konfirmasi Terkirim.')
        }else if(cancelled){
            Alert.alert('Konfirmasi Dibatalkan.');
        }else if(error){
          console.log('Terjadi Error Konfirmasi Donasi');
        }
    });
  }

  componentDidMount(){
      this.setState({
          no_konfirmasi : this.props.navigation.state.params.NO_KONFIRMASIKE1,
          pesanKonfirmasi : this.props.navigation.state.params.CONTOH_KONFIRMASI

      })
  }
  render() {
    return (
            <View style = {{ flex:1}}>
                <Header header='Konfirmasikan Donasi Anda'/>
                    <View style={styles.MainContainer}>
                        <TouchableOpacity onPress={this.smsSendFunction} activeOpacity={0.6} style={styles.button} >
                            <Text style={styles.TextStyle}>Kirim Konfirmasi Donasi</Text>
                        </TouchableOpacity>
                        <Text>Silakan Diedit Pesan Konfirmasi, Kemudian Kirim.</Text>
                    </View>
            </View>
        );
    }
}
export default Konfirmasi_SMS;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  button: {
    width: '100%',
    paddingTop:12,
    paddingBottom:12,
    backgroundColor: '#00BCD4',
    borderRadius:7,
  },
   
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20
  }

});