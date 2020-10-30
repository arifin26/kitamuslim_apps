import React, { Component } from 'react';
import {
  BackHandler,
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { WebView } from 'react-native-webview';

class Buletin extends Component {

constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
    this.state={
       role:true
    }
}

componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton = ()=>{
   this.WEBVIEW_REF.current.goBack();
   return true;
}

onNavigationStateChange(navState) {
  this.setState({
    canGoBack: navState.canGoBack
  });
}

render(){
  setTimeout(()=>{
    this.setState({
        role:false
    })
} ,10000)
if (this.state.role) {
    return (
      <View style={styles.MainSplash}>
        <ActivityIndicator size='large' />
        <View style={styles.copyright} >
              <Text style = {styles.textcopyright}>Sedang Loding...</Text>
        </View>
      </View>
    );
    
  }
   return (
    <WebView
        source={{ uri: "https://www.dropbox.com/sh/yf5ithxmh2mje0j/AABPv4BCSNfD_wkLcLjftBZca?dl=0" }}
        ref={this.WEBVIEW_REF}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
     />
    )

 }
}

const styles = StyleSheet.create({
 MainSplash:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center',
    backgroundColor: '#fff'
  },
  
  ContainerView:{
    flex:1
  },
  
  LogoSplash:{
    height:80, 
    width: 80
  }
})
export default Buletin