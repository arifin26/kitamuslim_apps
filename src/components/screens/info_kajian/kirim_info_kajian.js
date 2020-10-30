import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    Image
} from "react-native"
import Header from '../../utils/header'
import {styles} from './styles'

const Kirim = require('../../../assets/kirim_info_kajian.png')

class Kirim_Informasi_Kajian extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoding: true,
            tanggal_kajian: '',
            tema_kajian : '',
            pemateri_kajian : '',
            waktu_kajian : '',
            alamat_kajian : '',
            maps_kajian : '',
            info_tambahan_kajian : '',
            kontak_panitia_kajian : '',
            katagori_kajian : [],
            fetch_isLoding: false
         }
    }

    adddata = () => {
        const {tanggal_kajian} = this.state;
        const {tema_kajian} = this.state;
        const {pemateri_kajian} = this.state;
        const {waktu_kajian} = this.state;
        const {alamat_kajian} = this.state;
        const {maps_kajian} = this.state;
        const {info_tambahan_kajian} = this.state;
        const {kontak_panitia_kajian} = this.state;
        const {katagori_kajian} = this.state;      

        fetch('https://masjidindonesia.000webhostapp.com/manajemen_masjid/info_kajian/tes.php',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tanggal_kajian : tanggal_kajian,
                tema_kajian : tema_kajian,
                pemateri_kajian : pemateri_kajian,
                waktu_kajian : waktu_kajian,
                alamat_kajian : alamat_kajian,
                maps_kajian : maps_kajian,
                info_tambahan_kajian : info_tambahan_kajian,
                kontak_panitia_kajian : kontak_panitia_kajian,
                katagori_kajian : katagori_kajian,
              })
        })
        .then((res) => res.json())
        .then((resjson) => {

            if(resjson === 'Data Matched'){
                alert(resjson);
            }else{
                alert(resjson);
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() { 
        return ( 
            <ScrollView>
            <View>
                <Header header='Kirim Informasi Kajian'/>
                <Text style = {styles.judulkiriminfo}>Kirimkan Informasi Kajian Terdekat Anda</Text>
     
                <View style = {styles.formkiriminfokajian}>
                    <View style = { styles.S_Tanggal_Kajian}>
                    <Image source = {Kirim} style = {styles.imgIcon}/>
                    <Text style = { styles.tanggal_kajian}>TANGGAL KAJIAN</Text>
                    </View>
                    <TextInput
                        placeholder = "Masukan Tanggal Pelaksanaan Kajian"
                        onChangeText = { text => this.setState({tanggal_kajian:text})}
                        selectionColor = '#428AF8'
                        underlineColorAndroid = '#428AF8'
                        style = {styles.textInput}
                        maxLength={100000000}
                    />
                    <View style = { styles.S_Tanggal_Kajian}>
                    <Image source = {Kirim} style = {styles.imgIcon}/>
                    <Text style = { styles.tanggal_kajian}>TEMA KAJIAN</Text>
                    </View>
                    <TextInput
                        placeholder = "Masukan Tema Kajian"
                        onChangeText = { text => this.setState({tema_kajian:text})}
                        selectionColor = '#428AF8'
                        underlineColorAndroid = '#428AF8'
                        style = {styles.textInput}
                        maxLength={100000000}
                    />
                    <View style = { styles.S_Tanggal_Kajian}>
                    <Image source = {Kirim} style = {styles.imgIcon}/>
                    <Text style = { styles.tanggal_kajian}>PEMATERI KAJIAN</Text>
                    </View>
                    <TextInput
                        placeholder = "Masukan Pemateri Kajian"
                        onChangeText = { text => this.setState({pemateri_kajian:text})}
                        selectionColor = '#428AF8'
                        underlineColorAndroid = '#428AF8'
                        style = {styles.textInput}
                        maxLength={100000000}
                    />
                    <View style = { styles.S_Tanggal_Kajian}>
                    <Image source = {Kirim} style = {styles.imgIcon}/>
                    <Text style = { styles.tanggal_kajian}>WAKTU KAJIAN</Text>
                    </View>
                    <TextInput
                        placeholder = "Masukan Jam Kegiatan Kajian"
                        onChangeText = { text => this.setState({waktu_kajian:text})}
                        selectionColor = '#428AF8'
                        underlineColorAndroid = '#428AF8'
                        style = {styles.textInput}
                        maxLength={100000000}
                    />
                    <View style = { styles.S_Tanggal_Kajian}>
                    <Image source = {Kirim} style = {styles.imgIcon}/>
                    <Text style = { styles.tanggal_kajian}>ALAMAT KAJIAN</Text>
                    </View>
                    <TextInput
                        placeholder = "Masukan Alamat Kajian"
                        onChangeText = { text => this.setState({alamat_kajian:text})}
                        selectionColor = '#428AF8'
                        underlineColorAndroid = '#428AF8'
                        style = {styles.textInput}
                        maxLength={100000000}
                    />
                    <View style = { styles.S_Tanggal_Kajian}>
                    <Image source = {Kirim} style = {styles.imgIcon}/>
                    <Text style = { styles.tanggal_kajian}>MAPS LOKASI KAJIAN</Text>
                    </View>
                    <TextInput
                        placeholder = "Masukan Link Maps Lokasi Kajian"
                        onChangeText = { text => this.setState({maps_kajian:text})}
                        selectionColor = '#428AF8'
                        underlineColorAndroid = '#428AF8'
                        style = {styles.textInput}
                        maxLength={100000000}
                    />
                    <View style = { styles.S_Tanggal_Kajian}>
                    <Image source = {Kirim} style = {styles.imgIcon}/>
                    <Text style = { styles.tanggal_kajian}>INFORMASI TAMBAHAN KAJIAN</Text>
                    </View>
                    <TextInput
                        placeholder = "Masukan Info Tambahan Atau - +"
                        onChangeText = { text => this.setState({info_tambahan_kajian:text})}
                        selectionColor = '#428AF8'
                        underlineColorAndroid = '#428AF8'
                        style = {styles.textInput}
                        maxLength={100000000}
                    />
                    <View style = { styles.S_Tanggal_Kajian}>
                    <Image source = {Kirim} style = {styles.imgIcon}/>
                    <Text style = { styles.tanggal_kajian}>KONTAK PANITIA KAJIAN</Text>
                    </View>
                    <TextInput
                        placeholder = "Nomor Telepon/WA"
                        onChangeText = { text => this.setState({kontak_panitia_kajian:text})}
                        selectionColor = '#428AF8'
                        underlineColorAndroid = '#428AF8'
                        style = {styles.textInput}
                        maxLength={100000000}
                        keyboardType={"numeric"}
                    />
                    <View style = { styles.S_Tanggal_Kajian}>
                    <Image source = {Kirim} style = {styles.imgIcon}/>
                    <Text style = { styles.tanggal_kajian}>KATAGORI KAJIAN</Text>
                    </View>
                    <TextInput
                        placeholder = "UMUM / IKHWAN / MUSLIMAH"
                        onChangeText = { text => this.setState({katagori_kajian:text})}
                        selectionColor = '#428AF8'
                        underlineColorAndroid = '#428AF8'
                        style = {styles.textInput}
                        maxLength={100000000}
                    />
                </View>
                <View style = {styles.containersubmitkirimjadwalkajian}>
                
                <TouchableOpacity onPress = {this.adddata} style={[styles.buttonContainer, styles.kirimInfoKajianButton]}>
                    <View style={styles.KirimInfoKajianButtonContent}>
                        <Image style={styles.icon} source={Kirim}/>
                        <Text style={styles.loginText}>Kirim Info Kajian</Text>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity >
                    <Text style = { styles.submitKirimInfoKajian}>Kirim Jadwal Kajian</Text>
                </TouchableOpacity> */}
                </View>
            </View>
        </ScrollView>

         );
    }
}
 
export default Kirim_Informasi_Kajian;