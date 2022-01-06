import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Alert,
  TouchableOpacity,Dimensions 
} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {observer} from 'mobx-react';
import {screens} from 'src/services/navigation/screens';
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import {LineChart} from 'react-native-chart-kit';
import tw from 'tailwind-rn';
import {useStores} from 'src/stores';
import student from 'src/asset/image/studentimg.png';
import { Extrapolate } from 'react-native-reanimated';
const StudentDetailsScreen: NavigationFunctionComponent = observer(
  ({componentId}) => {
    const {StudentData} = useStores();
    const [secletValue,setValue] = useState('');
    return (
      <View>
        <Header
          name={'Nguyen Ngoc'}
          staff={'giam doc'}
          backButton={true}
          title={'Xem thông tin học sinh'}
          onPressBack={() => navigation.pop(componentId)}
        />
        <View style={tw('p-4 flex-row')}>
            <Text>Học sinh {StudentData.StudentData.name} - Lớp ...</Text>
            <View style={tw('w-32')}><Text style={tw('text-right')}>{StudentData.StudentData.id}</Text></View>
       </View>
       <View style={tw('flex-row p-3')}>
           <View>
               <Image source={student}></Image>
           </View>
           <View style={tw('border rounded-xl ml-2 p-3')}>
           <View style={tw('flex-row ')}>
                   <View style={tw('flex-row w-32')}>
                       <Text>Ngày sinh: </Text>
                       <Text style={tw('text-blue-400')}>1/2/2013</Text>
                   </View>
                   <View style={tw('flex-row ml-4')}>
                       <Text>Ăn: </Text>
                       <Text style={tw('text-blue-400')}>Bình thường</Text>
                   </View>
               </View>
               <View style={tw('flex-row mt-1')}>
                   <View style={tw('flex-row w-32')}>
                       <Text>Cân nặng: </Text>
                       <Text style={tw('text-blue-400')}>30 kg</Text>
                   </View>
                   <View style={tw('flex-row ml-4')}>
                       <Text>Ngủ: </Text>
                       <Text style={tw('text-blue-400')}>Tốt</Text>
                   </View>
               </View>
               <View style={tw('flex-row mt-1')}>
                   <View style={tw('flex-row w-32')}>
                       <Text style={tw('text-blue-400 font-bold')}>🔺Chiều cao: </Text>
                       <Text style={tw('text-blue-400')}>120 cm</Text>
                   </View>
                   <View style={tw('flex-row ml-4')}>
                       <Text>Vận động: </Text>
                       <Text style={tw('text-blue-400')}>Tốt</Text>
                   </View>
               </View>
               <View style={tw('flex-row mt-1')}>
                   <View style={tw('flex-row w-32')}>
                       <Text>Học tập: </Text>
                       <Text style={tw('text-blue-400')}>Tốt</Text>
                   </View>
                   <View style={tw('flex-row ml-4')}>
                       <Text>Giải trí: </Text>
                       <Text style={tw('text-blue-400')}>Tốt</Text>
                   </View>
               </View>
               <View style={tw('flex-row mt-1')}>
                   <View style={tw('flex-row w-32')}>
                       <Text>Y tế: </Text>
                       <Text style={tw('text-blue-400')}>Tốt</Text>
                   </View>
                   
               </View>
           </View>
       </View>

       <View style={tw('p-4')}>
  <Text>Biểu đồ chiều cao theo tháng</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width-50} // from react-native
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#ffffff",
      backgroundGradientFrom: "#ffffff",
      backgroundGradientTo: "#ffffff",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(55, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={tw('border rounded-xl mt-3')}
  />
</View>

      </View>
    );
  },
);

StudentDetailsScreen.options = (props) => screens.studentdetails.options();

export default StudentDetailsScreen;