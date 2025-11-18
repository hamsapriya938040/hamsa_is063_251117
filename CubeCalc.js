import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
export default function CubeCalc() {
  const [calcData,setCalcData] = useState({num:0.0,result:null});
  const doCalc = () => {
    if(isNaN(calcData.num)){
      setCalcData({...calcData,result : 'Invalid Number'})
      return;
    }
    const num = calcData.num;
    const cube = num *num*num;
    setCalcData({...calcData,result:`Result of ${num} is ${cube}`})

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cube Calculator App</Text>
      <TextInput value = {calcData.num}keyboardType = 'numeric'
      placeholder = 'Enter number'
      onChangeText = {(data)=>setCalcData({...calcData,num: data})}/>
    <Button title = 'Find Cube ' onPress = {doCalc}/>
    <Text>{calcData.result}</Text>
      <StatusBar style = "auto"/>
    </View>
  );
} //mobile app structure

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#553504c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color : '#ebd36aff',
    alignItems: 'flex-start',
    fontSize : 30,
  },
}); //mobile app style
