import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {observer} from 'mobx-react';
import {screens} from 'src/services/navigation/screens';
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import {services} from 'src/services';
import {PieChart} from 'react-native-chart-kit';
import tw from 'tailwind-rn';
import {useStores} from 'src/stores';
import Icons from 'react-native-vector-icons/Ionicons';
import StudentList from 'src/components/Class/StudentList';
import people from 'src/asset/image/peoples.png';
import { Button } from 'react-native-elements/dist/buttons/Button';


const ClassDetailsScreen: NavigationFunctionComponent = observer(
  ({componentId}) => {
    const {schoolName} = useStores();
    const [secletValue,setValue] = useState('');
    return (
      <View>
        <Header
          name={'Nguyen Ngoc'}
          staff={'giam doc'}
          backButton={true}
          title={'Danh sách học sinh'}
          onPressBack={() => navigation.pop(componentId)}
        />
        <View style={tw('p-4')}>
        <View style={tw('flex-row items-center px-4 bg-gray-200 rounded-xl')}>
          <Text><Icons name='search-outline' color='gray' size={25}/></Text>
          <TextInput placeholder="Tìm kiếm..."></TextInput>
        </View>
        </View>

        <View style={tw('flex p-4 flex-row')}>
        <View style={tw('p-4')}>
            <View style={tw('flex flex-row p-2')}>
                <Text>Chọn lớp: </Text>
        <ModalDropdown
                    defaultValue="1..."
                    options={['1A', '1B', '1C','1D']}
                    textStyle={tw('text-center text-base')}
                    dropdownTextStyle={tw('text-base')}
                    onSelect={(index = '', value = '')=>{setValue(value)}}
                    style={[tw('border text-base justify-center items-center'), { width: 100, height: 23 }]} /></View>
        </View>
        <View style={tw('items-center flex-row ml-5')}><Image source={people} /><Text style={tw('ml-2')}>Tổng số : 28</Text></View>
        </View>
        <StudentList cId={componentId}/>
        
      </View>
    );
  },
);

ClassDetailsScreen.options = (props) => screens.classdetails.options();

export default ClassDetailsScreen;
