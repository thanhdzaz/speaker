import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert } from 'react-native';
import { useStores } from 'src/stores';
import { USER_KEY } from 'src/config';
import { services } from 'src/services';
import axios from '../utils/axios/axios';
import { SIGN_IN } from '../utils/axios/URL';
import tw from 'tailwind-rn';
export const LoginScreen = () => {
   const { ui, counter, keyApi } = useStores();
   const [userName, setUserName] = useState('');
   const [passWord, setPassWord] = useState('');
   const handleSubmit = async (userName = '', passWord = '') => {
      // console.log(2);
         axios({
            method: 'POST',
            url: SIGN_IN,
            data: {
               "username": userName,
               "password": passWord
            }
         }).then((res) => {
            if (res.status == 200) {
                  keyApi.setKeyApi(res.data);
                  AsyncStorage.setItem(USER_KEY, userName);
                  services.nav.startApp();
            } else {
               console.log(1)
               Alert.alert('Lỗi !!!', 'Sai tên đăng nhập hoặc mật khẩu.')
            }
         }).catch((e) => {
            Alert.alert('Lỗi 2', 'Sai tên đăng nhập hoặc mật khẩu.')
         });
      }
      return (
         <View style={tw('items-center mt-8')}>
            <View>
               <Image style={tw('mt-20')} source={require('../asset/image/Ellipse.png')} />
            </View>
            <View>
               <Text style={tw('font-bold mt-5 text-2xl')}> Hệ thống quản lý trường học </Text>
            </View>
            <View style={tw('w-full mt-10 items-center')}>
               <View style={tw('relative')}>
                  <TextInput defaultValue={userName} onChangeText={userName => setUserName(userName)} placeholder="Tên đăng nhập (*)" style={tw('pl-11 pr-4 border w-80 border-gray-300 rounded-full')} />
               <Image style={tw('absolute top-4 left-4')} source={require('../asset/image/Phone.png')} />
               </View>
               <View style={tw('relative mt-3')}>
                  <TextInput secureTextEntry={true} defaultValue={passWord} onChangeText={passWord => setPassWord(passWord)} placeholder="Mật khẩu (*)" style={tw('pl-11 pr-4 border w-80 border-gray-300 rounded-full')} />
                  <Image style={tw('absolute top-4 left-4')} source={require('../asset/image/Lock.png')} />
               </View>
               <View>
                  <Text style={tw('font-bold mt-2')}>Quên mật khẩu?</Text>
               </View>
               <View style={tw('mt-4')}>
                  <TouchableHighlight
                     underlayColor='#7FBDEA'
                     onPress={()=> handleSubmit(userName, passWord)}
                  >
                     <Text style={tw('w-40 rounded-full border text-center py-4 bg-blue-300 border-blue-300 font-bold')}>Đăng nhập</Text>
                  </TouchableHighlight>
               </View>
            </View>
         </View>
      )
   }