import React from 'react'
import {View,Text,TextInput,StatusBar,TouchableNativeFeedback,Image,ScrollView,StyleSheet,FlatList} from 'react-native'
import dzkrpetang from './dzkrpetang'


export default class Test extends React.Component{
  state={
   dzkrpetang
  }
 
 render(){
    return(
      <View style={{flex:1}}>
      <StatusBar backgroundColor="#009688" barStyle='light-content'/>
      <View style={{flex:1}}>
      <View >
      <FlatList 
                    data={this.state.dzkrpetang}
                    keyExtractor={(index,item) => toString()}
                    renderItem={({index,item}) => {
                        return(
                          <ScrollView>
                            <View>
                           
                                    <View style={Styles.View1} >
                                    <View style={Styles.View2}>
                                       
                                        <View style={Styles.View3}>
                                        
                                        <View >
                                          <Text style={Styles.View4}>{item.id}</Text>
                                        </View>

                                        <View style={Styles.View5}>


                                        <View style={Styles.View6}>
                                        <Text style={{fontSize:20}}>{item.arab}</Text>
                                        <View style={{paddingTop:20}}>
                                        <Text >{item.artinya}</Text>
                                        </View>
                                        <View style={{paddingTop:15}}>
                                          <Text>
                                            {item.rowi}
                                          </Text>
                                        </View>
                                        </View>

                                        </View>
                                        </View>
                                    </View>    

                                    </View>
                                  
                                   
                                    
                               
                            </View>
                            </ScrollView>
                        )
                    }}
                />
      </View>
      </View>
        
      </View>
    )
  }
}

const Styles= StyleSheet.create({
  
  bag2:{height:45,
    width:45
  },
  bag1:{fontSize:18,
    fontWeight:'bold',
    color:'#fff'},

  bag5:{flex:1,
    backgroundColor:'#b8860b'
  },
  bag6:{height:50,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10
  },
  bag7:{height:50,
    width:'80%',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  bag8:{height:45,
    width:45},
    bag3:{height:50,
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#7fffd4',
      elevation:20
    },
    View1:{
        paddingTop:30
    },
    View2:{
        flexDirection:'column'
    },
    View3:{
        flexDirection:'row',paddingLeft:10
    },
    View4:{
        padding:10,
        backgroundColor:'#009688',
        borderRadius:100,
        height:40,
        width:40,
        textAlign:'center',
        fontWeight:'bold',
        color:'#fff'
    },
    View5:{
        flexDirection:'column',
        paddingLeft:10
    },
    View6:{
        paddingRight:60,
        paddingTop:30
    }
})