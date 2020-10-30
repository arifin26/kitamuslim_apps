import {
    StyleSheet
} from "react-native"

export const styles = StyleSheet.create({
    Maincontainer:{
        flex:1,
    },
    IconStyling:{
        height: 50,
        width: 50
    },
    ContainerIconButton: {
        height: 80,
        width: 80,
        margin: 15,
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
      },
      IconStyling: {
        height: 40,
        width: 40,
      },
      IconText: {
        fontSize: 10,
        textAlign: 'center',
        color: '#000'
      },
      SubContainer:{
          flexDirection:'row',
          flexWrap:'wrap'
      }
}) 