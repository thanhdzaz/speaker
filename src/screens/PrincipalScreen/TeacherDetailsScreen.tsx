import React, {useState} from 'react';
import {View, Image, Text,SafeAreaView} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {observer} from 'mobx-react';
import {screens} from 'src/services/navigation/screens';
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import tw from 'tailwind-rn';
import {useStores} from 'src/stores';
import Plus from 'src/asset/image/plus.png';
import tc from 'src/asset/image/gv_avt.png';
import phone from 'src/asset/image/Phone.png';
import email from 'src/asset/image/email.png';
import home from 'src/asset/image/home.png';
const TeacherDetailsScreen: NavigationFunctionComponent = observer(
  ({componentId}) => {
    const {TeacherData} = useStores();
    return (
      <SafeAreaView style={{flex:1}}>

      <View>
        <Header
          name={'Nguyen Ngoc'}
          staff={'giam doc'}
          backButton={true}
          title={'Xem thông tin giáo viên'}
          onPressBack={() => navigation.pop(componentId)}
        />
        <View style={tw('p-4')}>
          <Text>Giáo viên {TeacherData.TeacherData.name}</Text>
          <Text style={tw('pl-1 pt-2')}>{TeacherData.TeacherData.id}</Text>
        </View>
        <View>
          <View style={tw('flex-row p-3')}>
            <View>
              <Image source={tc}></Image>
            </View>
            <View>
              <View style={tw('ml-2 px-3 flex-row')}>
                <Text style={tw('font-bold')}>Thông tin liên hệ:</Text>
                <View style={tw('items-center w-64')}>
                  <Image source={Plus}></Image>
                </View>
              </View>

              <View style={tw('flex-row items-center m-2 pl-4')}>
                <Image source={phone} style={tw('mr-2')}></Image>
                <Text>Số điện thoại:</Text>
              </View>
              <View style={tw('flex-row items-center m-2 pl-4')}>
                <Image source={email} style={tw('mr-2')}></Image>
                <Text>Email:</Text>
              </View>
              <View style={tw('flex-row items-center m-2 pl-4')}>
                <Image source={home} style={tw('mr-2')}></Image>
                <Text>Địa chỉ:</Text>
              </View>
            </View>
          </View>
          <View>
            {/* <Text style={tw('px-3 text-base')}>TT.chung | Pháp lý | Tài chính | Quản trị | Nghiên cứu | Công việc | Tiêu dùng</Text> */}
            <View style={tw('pl-5')}>
              <Text style={tw('mt-3 font-bold')}>Thông tin chi tiết</Text>
              <Text style={tw('mt-3')}>Ngày sinh:</Text>
              <Text style={tw('mt-3')}>Dân tộc:</Text>
              <Text style={tw('mt-3')}>Số hiệu:</Text>
              <Text style={tw('mt-3')}>Biên chế:</Text>
              <Text style={tw('mt-3')}>Chức vụ/Chức danh:</Text>
              <Text style={tw('mt-3')}>Phòng ban:</Text>
              <Text style={tw('mt-3')}>Trình độ chuyên môn:</Text>
              <Text style={tw('mt-3')}>Loại hợp đồng:</Text>
              <Text style={tw('mt-3')}>Thuộc biên chế:</Text>
            </View>
          </View>
        </View>
      </View>
      </SafeAreaView>

    );
  },
);

TeacherDetailsScreen.options = (props) => screens.teacherdetails.options();

export default TeacherDetailsScreen;
