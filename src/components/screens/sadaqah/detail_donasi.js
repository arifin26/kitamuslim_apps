import React, { Component } from 'react';
import {
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import Header from '../../utils/header'
import { styles } from './styles';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                id: '',
                judul_donasi : '',
                nama_perorangan_lembang : '',
                donasi_dibutuhkan : '',
                lokasi : '',
                bank : '',
                kode_bank : '',
                no_rekening : '', 
                no_konfirmasi : '',
                donasi_terkumpul: '', 
                status_donasi : '',
                image_path : '',
                contoh_konfirmasi : '',
                rekening_atas_nama : ''
         }
    }

    componentDidMount(){
        this.setState({
                id : this.props.navigation.state.params.detil[0],
                judul_donasi : this.props.navigation.state.params.detil[1],
                nama_perorangan_lembang : this.props.navigation.state.params.detil[2],
                donasi_dibutuhkan : this.props.navigation.state.params.detil[3],
                lokasi : this.props.navigation.state.params.detil[4],
                bank : this.props.navigation.state.params.detil[5],
                kode_bank : this.props.navigation.state.params.detil[6],
                no_rekening : this.props.navigation.state.params.detil[7], 
                no_konfirmasi : this.props.navigation.state.params.detil[8], 
                donasi_terkumpul : this.props.navigation.state.params.detil[9], 
                status_donasi : this.props.navigation.state.params.detil[10],
                image_path : this.props.navigation.state.params.detil[11],
                contoh_konfirmasi : this.props.navigation.state.params.detil[12],
                rekening_atas_nama : this.props.navigation.state.params.detil[13],
        })
    }

    donasi_sekarang = () => {
        this.props.navigation.navigate('Donasi_Sekarang', {
            BANK : this.state.bank,
            KODE_BANK : this.state.kode_bank,
            NO_REKENING : this.state.no_rekening,
            NO_KONFIRMASI : this.state.no_konfirmasi,
            CONTOH_KONFIRMASI : this.state.contoh_konfirmasi,
            REKENING_ATAS_NAMA : this.state.rekening_atas_nama
        })
    }
    render() { 
        return ( 
            <View style = { styles.detailcontainer}>
                <Header header='Mari Investasi Akhirat'/>
                    <View style = { styles.ViewJudulDetail}>
                        <Text style = { styles.Judul_Donasi_Detail}>{this.state.judul_donasi}</Text>
                    </View>
                <View style = { styles.ViewGambar}>
                    <Image source = {{ uri:this.state.image_path}} style = {styles.detailImage}/>
                </View>
                <View style = { styles.ViewDiskripsi}>
                    <View style = { styles.ViewDana}>
                        <Text style = { styles.diskripsi}> Dana Dibutuhkan </Text>
                    </View>
                    <Text style = { styles.nilaiAngkaDonasi}> Rp. {this.state.donasi_dibutuhkan} </Text>
                </View>
                <View style = { styles.ViewDiskripsi}>
                    <View style = { styles.ViewDana}>
                        <Text style = { styles.diskripsi}> Dana Terkumpul </Text>
                    </View>
                    <Text style = { styles.nilaiAngkaDonasi}> Rp. {this.state.donasi_terkumpul} </Text>
                </View>
                <TouchableOpacity onPress = {() => this.donasi_sekarang()}>
                    <View style = { styles.ViewDonasiSekarang}>
                        <View style = { styles.ViewDanaSekarang}>
                            <Text style = { styles.donasisekarang}> Donasi Sekarang</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style = { styles.ViewDiskripsi}>
                    <View style = { styles.ViewDana}>
                        <Text style = { styles.diskripsi}> Yayasan / Lembaga </Text>
                    </View>
                    <Text style = { styles.nilaiAngkaDonasi}> Nama   : {this.state.nama_perorangan_lembang} </Text>
                    <Text style = { styles.nilaiAngkaDonasi}> Lokasi : {this.state.lokasi} </Text>
                </View>
            </View>
         );
    }
}
 
export default Test;