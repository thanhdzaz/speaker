import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { observer } from 'mobx-react';
import { screens } from 'src/services/navigation/screens';

import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import tw from 'tailwind-rn';
import Header from 'src/components/HeaderShow';
import navigation from 'src/services/navigation';

const data = [
    {
        name: "13-24 tuổi",
        number: 47,
        color: "#55D8FE",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "25-36 tuổi",
        number: 52,
        color: "#FF8373",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "3-4 tuổi",
        number: 80,
        color: "#FDC072",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "4-5 tuổi",
        number: 80,
        color: "#A3A0FB",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "5-6 tuổi",
        number: 84,
        color: "#5FE3A1",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];

const screenWidth = Dimensions.get("window").width;

const SchoolInformation: NavigationFunctionComponent = observer(({
    componentId,
}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <Header
                        name={'Nguyen Ngoc'}
                        staff={'giam doc'}
                        backButton={true}
                        title={'Thông tin trường học'}
                        onPressBack={() => navigation.pop(componentId)}
                    />
                    <View style={tw('mt-3 ml-6 mr-6')}>
                        <Text style={tw('text-base mb-4 ml-2')}>Hiệu trưởng: Chrish Brwon</Text>
                        <View style={tw('flex-row mb-2 ')}>
                            <TouchableOpacity style={tw('w-6/12 bg-pink-300 p-1.5')}>
                                <Text style={tw('text-center text-base font-bold')}>Tổng số học sinh</Text>
                                <Text style={tw('text-base text-white font-bold left-9')}>347</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={tw('w-6/12 bg-green-400 p-1.5 ml-2')} onPress={() => navigation.pushTeacherListScreen(componentId)}>
                                <Text style={tw('text-center text-base font-bold')}>Tổng số giáo viên</Text>
                                <Text style={tw('text-base text-white font-bold left-9')}>36</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tw('mb-16')}>
                            <TouchableOpacity style={tw('w-6/12 bg-red-400 p-1.5')} onPress={() => navigation.pushClassList(componentId)}>
                                <Text style={tw('text-center text-base font-bold')}>Tổng số lớp học</Text>
                                <Text style={tw('text-base text-white font-bold left-9')}>36</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tw('border border-gray-500 pb-4')}>
                            <View style={tw('-mt-4 -mb-4')}>
                                <PieChart
                                    data={data}
                                    width={screenWidth}
                                    height={150}
                                    chartConfig={{
                                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    }}
                                    accessor={"number"}
                                    backgroundColor={"transparent"}
                                    paddingLeft={"-30"}
                                    center={[0, 8]}
                                // absolute 
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
});

SchoolInformation.options = props => screens.schoolInformation.options();

export default SchoolInformation;