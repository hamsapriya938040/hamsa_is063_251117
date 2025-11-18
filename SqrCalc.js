import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
export default function SqrCalc() {
  const [calcData,setCalcData] = useState({num:0.0,result:null});
  const doCalc = () => {
    if(isNaN(calcData.num)){
      setCalcData({...calcData,result : 'Invalid Number'})
      return;
    }
    const num = calcData.num;
    const sqr = num *num;
    setCalcData({...calcData,result:`Result of ${num} is ${sqr}`})

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Square Calculator App</Text>
      <TextInput value = {calcData.num}keyboardType = 'numeric'
      placeholder = 'Enter number'
      onChangeText = {(data)=>setCalcData({...calcData,num: data})}/>
    <Button title = 'Find Square ' onPress = {doCalc}/>
    <Text>{calcData.result}</Text>
      <StatusBar style = "auto"/>
    </View>
  );
} //mobile app structure

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b5504c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color : '#ebd36aff',
    alignItems: 'flex-start',
    fontSize : 30,
  },
}); //mobile app style
