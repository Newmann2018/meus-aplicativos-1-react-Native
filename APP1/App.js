import React  from "react";
import{
  View,
  Text,
  StyleSheet,
  TextImput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
}from 'react-native';
import{Ionicons} from "@yarn/vector-icons";

class app1 extends Comment{
  reader(){
    return(
      <SafeAreaView style = {style.conteiner}>
  
        <StatusBar backgroundColor ='171d31' barStyle='light-content'>
          
          <View style ={Style.content} >
  
            <Text style = {style.Text}>tarefas</Text>
          
          </View>
  
          <TouchableOpacity style = {style.fab}>
            <Ionicons name='ios-add' size ='{35}'color ='#ffffff'/>
          
          </TouchableOpacity>
  
        </StatusBar>
  
      </SafeAreaView>
    )
  }
  
  const = Style = StyleSheet.create({
    conteiner:{
      flex:1,
      backgroundColor: '#171d51'
    },
    title:{
      marginTop:10,
      paddingBottom:10,
      fontSize: 25,
      textAlign:'center',
      color:'#ffffff'
    },
    fab:{
      position:"absolute",
      width: 60,
      height: 60,
      backgroundColor:'#0094FF',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius:30,
      right:25,
      bottom:25,
      elevation:2,
      zIndex:9,
      shadowColor:'#000000',
      shadowOpacity:0.2,
      shadowOffset:{
        width: 1,
        height: 3,
      }
    }
  });
}
export default app1;
  

