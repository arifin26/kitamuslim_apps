import {
    StyleSheet
} from "react-native"

export const styles = StyleSheet.create({
    CoreContainer:{
        flex:1,
        backgroundColor: '#ece5dd',
    },
    MainContainer:{
        flex: 1,
        margin: 5,
        alignItems:'center'
    },
    flexList:{
        height:150,
        width:'95%',
        shadowColor: '#00000021',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginTop: 15,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 15,
    },
    katagori:{
        height: 50,
        width: 50,
        backgroundColor:'#34b7f1',
        borderRadius:23,
        justifyContent:'center',
        alignItems:'center',
        marginRight:5 
    },
    katagori_kajian:{
        color:'#fff'
    },
    noteinfokajian:{
        flexDirection:'column'
    },
    tema_kajian:{
        fontSize: 15,
    },
    pemateri_kajian:{
        fontSize: 14
    },
    S_Tanggal_Kajian:{
        flexDirection:'row',
        marginRight:10
    },
    imgIcon:{
        height: 12,
        width: 12,
        marginRight:10,
        marginLeft:10
    },  
    tanggal_kajian:{
        fontSize:12,
        textAlign:'center',
    },
    waktu_kajian:{
        fontSize:12,
        textAlign:'center'

    },
    TouchableOpacity:{
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    Kirim_Info_Kajian:{
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    DetailMainContainer:{
        flex:1,
    },
    DetailTemaKajian:{
        textAlign:'center',
        fontSize:23
    },
    DetailPemateriKajian:{
        textAlign:'center',
        fontSize:15,
        marginBottom:15
    },
    DetailTanggalKajian:{
        width:'95%',
        shadowColor: '#00000021',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginBottom: 15,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 15,
    },
    Sub_MainContainerDetail:{
        alignItems:'center'
    },
    iconTanggalKajian:{
        alignItems:'center',
        justifyContent:'center',
        height: 50,
        width: 50
    },
    imgTanggalKajian:{
        height: 40,
        width: 40,
    },  
    TextTanggalKajian:{
        flexDirection:'column',
        flexWrap:'wrap',
    },
    TextInfoTambahan:{
        flexDirection:'column',
        flexWrap:'wrap',
        width:'85%',
    },
    fontDetail:{
        fontSize: 20
    },
    fontInfoTambahan:{
        fontSize:12
    },
    judulkiriminfo:{
        fontSize:20,
        textAlign:'center'
    },
    formkiriminfokajian:{
        marginRight:10
    },
    kirim:{
        marginLeft:10
    },
    textInput:{
        marginLeft:10,
    },
    containersubmitkirimjadwalkajian:{
        alignItems:'center',
    },
    submitKirimInfoKajian:{
        fontSize:20,
        textAlign: 'center',
        color: '#fff',
        marginTop: 20,
        marginBottom:20,
        backgroundColor: '#428AF8',
        height:30,
        borderRadius: 10
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
      kirimInfoKajianButton: {
        backgroundColor: "#3498db",
      },
      KirimInfoKajianButtonContent:{
        flexDirection: 'row',
        alignItems: 'center', 
        height:45,
        width:250,

      },
      icon:{
        width:25,
        height:25,
        marginLeft:10
      },
      loginText: {
        color: 'white',
        marginLeft:40
      },
})