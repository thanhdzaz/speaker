import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { observer } from 'mobx-react';
import { screens } from 'src/services/navigation/screens';
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';
import { services } from 'src/services';
import { PieChart } from 'react-native-chart-kit';
import tw from 'tailwind-rn';
import { useStores } from 'src/stores';
import Sc from 'src/asset/image/Union.png';

const ClassListScreen: NavigationFunctionComponent = observer(
  ({ componentId }) => {
    const { schoolName } = useStores();
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Header
              name={'Nguyen Ngoc'}
              staff={'giam doc'}
              backButton={true}
              title={'Danh sách lớp học'}
              onPressBack={() => navigation.pop(componentId)}
            />

            <View style={tw('p-4 flex-row')}>
              <Image source={Sc} style={tw('ml-3')}></Image>
              <Text style={tw('ml-3')}>{schoolName.School}</Text>
            </View>
            <ScrollView style={tw('mt-3 ml-6 mr-6 border rounded-2xl h-72 py-2')}>
              <TouchableOpacity style={tw('h-10 border-b p-2')}>
                <Text
                  style={tw('text-center')}
                  onPress={() => navigation.pushClassDetails(componentId)}>
                  Lop 1 2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw('h-10 border-b p-2')}>
                <Text
                  style={tw('text-center')}
                  onPress={() => navigation.pushClassDetails(componentId)}>
                  Lop 2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw('h-10 border-b p-2')}>
                <Text
                  style={tw('text-center')}
                  onPress={() => navigation.pushClassDetails(componentId)}>
                  Lop 3
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw('h-10 border-b p-2')}>
                <Text
                  style={tw('text-center')}
                  onPress={() => navigation.pushClassDetails(componentId)}>
                  Lop 4
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  },
);

ClassListScreen.options = (props) => screens.classlist.options();

export default ClassListScreen;
