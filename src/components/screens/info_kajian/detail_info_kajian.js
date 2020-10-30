import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Linking,
    TouchableOpacity
} from "react-native"
import Header from '../../utils/header'
import {styles} from './styles'
import ImgTanggalKajian from '../../../assets/tanggal_kajian.png'
import ImgWaktuKajian from '../../../assets/waktu_kajian.png'
import ImgAlamatKajian from '../../../assets/alamat_kajian.png'
import ImgInfoTambahan from '../../../assets/InfoTambahan.png'
import ImgKontakPanitiaKajian from '../../../assets/kontak_panitia_kajian.png'
import ImgKatagoriKajian from '../../../assets/katagori_kajian.png'

class Detail_Info_Kajian extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                id : '',
                tanggal_kajian : '',
                tema_kajian : '',
                pemateri_kajian : '',
                waktu_kajian : '',
                alamat_kajian : '',
                maps_kajian : '',
                info_tambahan_kajian : '',
                kontak_panitia_kajian : '',
                katagori_kajian : ''
         }
    }
    componentDidMount(){
        this.setState({
                id : this.props.navigation.state.params.ID,
                tanggal_kajian : this.props.navigation.state.params.TANGGAL_KAJIAN,
                tema_kajian : this.props.navigation.state.params.TEMA_KAJIAN,
                pemateri_kajian : this.props.navigation.state.params.PEMATERI_KAJIAN,
                waktu_kajian : this.props.navigation.state.params.WAKTU_KAJIAN,
                alamat_kajian : this.props.navigation.state.params.ALAMAT_KAJIAN,
                maps_kajian : this.props.navigation.state.params.MAPS_KAJIAN,
                info_tambahan_kajian : this.props.navigation.state.params.INFO_TAMBAHAN_KAJIAN,
                kontak_panitia_kajian : this.props.navigation.state.params.KONTAK_PANITIA_KAJIAN,
                katagori_kajian : this.props.navigation.state.params.KATAGORI_KAJIAN
        })
    }
    render() { 
        return ( 
            
                    <View style = { styles.DetailMainContainer}>
                    <ScrollView>
                        <Header header='DETAIL INFORMASI KAJIAN'/>
                        <Text style = { styles.DetailTemaKajian}>{this.state.tema_kajian}</Text>
                        <Text style = { styles.DetailPemateriKajian}>{this.state.pemateri_kajian}</Text>
                        <View style = { styles.Sub_MainContainerDetail}>
                            <View style = {styles.DetailTanggalKajian}>
                                <View style = { styles.iconTanggalKajian}>
                                    <Image source = {ImgTanggalKajian} style = { styles.imgTanggalKajian}/>
                                </View>
                                <View style = {styles.TextTanggalKajian}>
                                    <Text style = {styles.fontDetail}>{this.state.tanggal_kajian}</Text>
                                </View>
                            </View>
                            <View style = {styles.DetailTanggalKajian}>
                                <View style = { styles.iconTanggalKajian}>
                                    <Image source = {ImgWaktuKajian} style = { styles.imgTanggalKajian}/>
                                </View>
                                <View style = {styles.TextTanggalKajian}>
                                    <Text style = {styles.fontDetail}>{this.state.waktu_kajian}</Text>
                                </View>
                            </View>
                            <View style = {styles.DetailTanggalKajian}>
                                <View style = { styles.iconTanggalKajian}>
                                    <Image source = {ImgAlamatKajian} style = { styles.imgTanggalKajian}/>
                                </View>
                                <View style = {styles.TextTanggalKajian}>
                                    <TouchableOpacity onPress={() => {Linking.openURL(this.state.maps_kajian)}}>
                                        <Text style = {styles.fontDetail}>{this.state.alamat_kajian}</Text>
                                        <Text>Klik Lihat Peta</Text>
                                    </TouchableOpacity>                   
                                </View>
                            </View>
                            <View style = {styles.DetailTanggalKajian}>
                                <View style = { styles.iconTanggalKajian}>
                                    <Image source = {ImgInfoTambahan} style = { styles.imgTanggalKajian}/>
                                </View>
                                <View style = {styles.TextInfoTambahan}>
                                    <Text style = {styles.fontDetail}>Info Tambahan</Text>
                                    <View>
                                        <Text style = {styles.fontInfoTambahan}>{this.state.info_tambahan_kajian}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {styles.DetailTanggalKajian}>
                                <View style = { styles.iconTanggalKajian}>
                                    <Image source = {ImgKontakPanitiaKajian} style = { styles.imgTanggalKajian}/>
                                </View>
                                <View style = {styles.TextInfoTambahan}>
                                    <Text style = {styles.fontDetail}>Kontak Panitia Kajian</Text>
                                    <Text style = {styles.fontInfoTambahan}>{this.state.kontak_panitia_kajian}</Text>
                                </View>
                            </View>
                            <View style = {styles.DetailTanggalKajian}>
                                <View style = { styles.iconTanggalKajian}>
                                    <Image source = {ImgKatagoriKajian} style = { styles.imgTanggalKajian}/>
                                </View>
                                <View style = {styles.TextInfoTambahan}>
                                    <Text style = {styles.fontDetail}>Kajian Khusus</Text>
                                    <Text style = {styles.fontInfoTambahan}>{this.state.katagori_kajian}</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
         );
    }
}
 
export default Detail_Info_Kajian;