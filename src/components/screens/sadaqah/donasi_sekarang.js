import React, { Component } from 'react';
import { 
    View, 
    Text,
    TouchableOpacity,
    Button
} from 'react-native'
import Header from '../../utils/header'
import { styles } from './styles';
import Modal from 'react-native-modalbox';

class DonasiSekarang extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bank : '',
            kode_bank : '', 
            no_rekening : '',
            no_konfirmasi : '',
            contoh_konfirmasi : '',
            rekening_atas_nama : '',
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
         }
    }
    componentDidMount() {
        this.setState({
            bank : this.props.navigation.state.params.BANK,
            kode_bank : this.props.navigation.state.params.KODE_BANK,
            no_rekening : this.props.navigation.state.params.NO_REKENING,
            no_konfirmasi : this.props.navigation.state.params.NO_KONFIRMASI,
            contoh_konfirmasi : this.props.navigation.state.params.CONTOH_KONFIRMASI,
            rekening_atas_nama : this.props.navigation.state.params.REKENING_ATAS_NAMA
        })
    }

    konfirmasiWhatsApp = () => {
        this.props.navigation.navigate('Konfirmasi_Donasi',{
            NO_KONFIRMASIKE1 : this.state.no_konfirmasi,
            CONTOH_KONFIRMASI : this.state.contoh_konfirmasi
        })
    }

    konfirmasiSMS = () => {
        this.props.navigation.navigate('Konfirmasi_SMS',{
            NO_KONFIRMASIKE1 : this.state.no_konfirmasi,
            CONTOH_KONFIRMASI : this.state.contoh_konfirmasi
        })
    }

    render() { 
        return ( 
            <View style = { styles.mainDonasi}>
                <Header header='Ayo Donasi Sekarang'/>
                <Text style = { styles.ban_donasi}> Silakan Tranfser Donasi Terbaik Anda</Text>
                <View style = { styles.Bank}>
                <View style = { styles.ViewDiskripsi}>
                    <View style = { styles.ViewDana}>
                        <Text style = { styles.diskripsi}> Nama Bank  </Text>
                    </View>
                    <Text style = { styles.nilaiAngkaDonasi}> {this.state.bank} </Text>
                </View>
                <View style = { styles.ViewDiskripsi}>
                    <View style = { styles.ViewDana}>
                        <Text style = { styles.diskripsi}> Kode Bank  </Text>
                    </View>
                    <Text style = { styles.nilaiAngkaDonasi}> {this.state.kode_bank} </Text>
                </View>
                <View style = { styles.ViewDiskripsi}>
                    <View style = { styles.ViewDana}>
                        <Text style = { styles.diskripsi}> No. Rekening  </Text>
                    </View>
                    <Text style = { styles.nilaiAngkaDonasi}> {this.state.no_rekening} </Text>
                </View>
                <View style = { styles.ViewDiskripsi}>
                    <View style = { styles.ViewDana}>
                        <Text style = { styles.diskripsi}> Rek. Atas Nama  </Text>
                    </View>
                    <Text style = { styles.nilaiAngkaDonasi}> {this.state.rekening_atas_nama} </Text>
                </View>
                <TouchableOpacity onPress = { () => this.refs.modal4.open()}>
                <View style = { styles.ViewDiskripsi}>
                    <View style = { styles.ViewDana}>
                        <Text style = { styles.diskripsi}> No. Konfirmasi  </Text>
                    </View>
                    <Text style = { styles.nilaiAngkaDonasi}> {this.state.no_konfirmasi} </Text>
                    <Text style = { styles.nilaiAngkaDonasi}> Klik Untuk Konfirmasi </Text>
                </View>
                </TouchableOpacity>
                </View>
                <Modal
                    isOpen={this.state.isOpen}
                    ref={"modal4"} isDisabled={this.state.isDisabled}
                    style={styles.modal3}
                    position={'center'}>
                    <View style ={{flex:1}}>
                        <Header header="Metode Konfirmasi"/>
                            <View style = { styles.ViewModal}>
                            <Text style = {styles.judilModal}>Silakan Pilih Metode Konfirmasi Yang Anda Inginkan</Text>
                                <View style = { styles.ViewDiskripsi}>
                                    <TouchableOpacity onPress = { () => this.konfirmasiWhatsApp()}>
                                        <View style = { styles.ViewDana}>
                                            <Text style = { styles.diskripsi}> WhatsApp </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style = { styles.ViewDiskripsi}>
                                    <TouchableOpacity onPress = { () => this.konfirmasiSMS()}>
                                        <View style = { styles.ViewDana}>
                                            <Text style = { styles.diskripsi}> SMS </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
            </View>
         );
    }
}
 
export default DonasiSekarang;