import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { services } from 'src/services';
import {screens} from 'src/services/navigation/screens';
import tailwind from 'tailwind-rn';
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { useStores } from 'src/stores';


const SchoolsScreen: NavigationFunctionComponent = observer(({componentId}) => {
  const { schoolName } = useStores();
  return (
    <SafeAreaView>
      <Header
        name={'Nguyen Ngoc'}
        staff={'giam doc'}
        backButton={true}
        title={'Danh sách trường học'}
        onPressBack={() => navigation.pop(componentId)}
      />
      <View>
        <TextInput
          style={tailwind('m-3 mx-4 px-4 rounded-xl border')}
          placeholder="Tìm kiếm......"></TextInput>
      </View>
      <View>
        <Text style={tailwind('px-4 py-2')}>Trường học:</Text>
      </View>
      <ScrollView style={tailwind('m-4 p-3 h-72 border rounded-xl')}>
        <TouchableOpacity style={tailwind('border p-2 mt-2 rounded-xl h-10')} onPress={()=>{schoolName.setSchool('Trường Lê Quý Đôn') ;navigation.AfterChooseSchool(componentId)}}>
          <Text style={tailwind('text-center')}>Trường Lê Quý Đôn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind('border p-2 mt-2 rounded-xl h-10')} onPress={()=>{schoolName.setSchool('Trường Tạ Quang Bửu') ;navigation.AfterChooseSchool(componentId)}}>
          <Text style={tailwind('text-center')}>Trường Tạ Quang Bửu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind('border p-2 mt-2 rounded-xl h-10')} onPress={()=>{schoolName.setSchool('Trường Chu Văn An') ;navigation.AfterChooseSchool(componentId)}}>
          <Text style={tailwind('text-center')}>Trường Chu Văn An</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind('border p-2 mt-2 rounded-xl h-10')} onPress={()=>{schoolName.setSchool('Trường Nguyễn Bỉnh Khiêm') ;navigation.AfterChooseSchool(componentId)}}>
          <Text style={tailwind('text-center')}>Trường Nguyễn Bỉnh Khiêm</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
});

const _styles = (theme: ThemeType) => StyleSheet.create({});

SchoolsScreen.options = (props) => screens.schools.options();

export default SchoolsScreen;
