import React from "react"
import  {StyleSheet,TextInput, View} from  'react-native'
import colors from "../utils/colors";

export default function Form (){
    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
            <TextInput
            placeholder="Cantidad a pedir"
            keyboardType="numeric"
            style={styles.input}
            />
             <TextInput
            placeholder="Interes %"
            keyboardType="numeric"
            style={[styles.input,{width:"45%"}]}
            />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm:{
      position:'absolute',
      bottom:-90,
      width:"85%",
      paddingHorizontal:50,
      backgroundColor:colors.PRIMARY_COLOR_DARK,
      borderRadius:30,
      height:180,
      justifyContent:'center',
      alignItems:'center'
    },
    viewInputs:{
        flexDirection:'row',

    },
    input:{
        height:50,
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:colors.PRIMARY_COLOR,
        borderRadius:5,
        width:"70%",
        marginRight:5,
        marginLeft:-5,
        marginBottom:10,
        color:'#000',
        paddingHorizontal:20

    }
  });