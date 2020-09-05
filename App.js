import React from "react";
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component {
  constructor(){
    super();
    this.state={
      hasCameraPermissions:null,
      scanned:false,
      scannedData:""
    }
  }
    getCameraPermissions=async()=>{
      const {status}= await Permissions.askAsync(Permissions.CAMERA)
      this.setState({
       hasCameraPermissions:status==="granted"
      })
    }
    render() {
      const hasCameraPermissions=this.state.hasCameraPermissions
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style ={styles.text}>{
            hasCameraPermissions===true ?this.state.scannedData:"RequestCameraPermissions"
          }</Text>
          <TouchableOpacity onPress={this.getCameraPermissions} 
          style ={styles.scanButton}>
          <Text style ={styles.text}>ScanQR Code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    scanButton:{
      backgroundColor:"blue",
      width:90,
      height:50,
    },
    text:{
      textAlign:"center",
      fontSize:20,
      textDecorationLine:"underline"
    }
  })