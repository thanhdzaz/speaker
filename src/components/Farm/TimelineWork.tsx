import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import ModalDropdown from 'react-native-modal-dropdown';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

type TimeLineProps = {
    onPressTimeLine?: () => void;
}



const TimeLine: React.FC<TimeLineProps> = ({

    onPressTimeLine = () => { },

}) => {
    const { styles } = useStyles(_styles);

    const data = [
        { "id": 0, "lo": "Lô 2", "action": "Phun nước", "plant": "Ổi", "time": "4/6/2021", "status": 1 },
        { "id": 1, "lo": "Lô 3", "action": "Phun nước", "plant": "Bưởi", "time": "4/6/2021", "status": 0 },
        { "id": 2, "lo": "Lô 4", "action": "Phun nước", "plant": "Táo", "time": "4/6/2021", "status": 2 },
        { "id": 3, "lo": "Lô 5", "action": "Phun nước", "plant": "Vải", "time": "4/6/2021", "status": 1 },
        { "id": 0, "lo": "Lô 2", "action": "Phun nước", "plant": "Ổi", "time": "4/6/2021", "status": 1 },
        { "id": 1, "lo": "Lô 3", "action": "Phun nước", "plant": "Bưởi", "time": "4/6/2021", "status": 0 },
        { "id": 2, "lo": "Lô 4", "action": "Phun nước", "plant": "Táo", "time": "4/6/2021", "status": 2 },
        { "id": 3, "lo": "Lô 5", "action": "Phun nước", "plant": "Vải", "time": "4/6/2021", "status": 1 },
    ]
    const renderItem = ({ item = '' }) => {
        return (
            <View>
                <Text style={[tailwind(' text-base py-1 pl-2'),{backgroundColor:"#3770A6"}]}>{item.lo}</Text>
                <View style={[tailwind('flex-row')]}>
                    <View style={tailwind('py-2 pl-5 w-5/12 flex-row items-center')}>
                        {item.status == 0 ?
                            <View style={[tailwind("bg-yellow-300 rounded-full mr-2"), { width: 20, height: 20 }]}></View>
                            : item.status == 1 ?
                                <View style={[tailwind("bg-gray-500 rounded-full mr-2"), { width: 20, height: 20 }]}></View>
                                : item.status == 2 ? <View style={[tailwind("bg-red-500 rounded-full mr-2"), { width: 20, height: 20 }]}></View>
                                    : null
                        }

                        <Text style={[tailwind('text-base')]}>{item.action}</Text>
                    </View>
                    <Text style={[tailwind(' text-center text-base py-2 w-3/12')]}>{item.plant}</Text>
                    <Text style={[tailwind(' text-center text-base py-2 w-4/12')]}>{item.time}</Text>
                </View></View>
        )
    }

    return (
        <View style={tailwind('w-full ')}>
            <Text style={[tailwind('text-lg py-2 px-4 font-bold'), { backgroundColor: "#EA7F99" }]}>Chú thích</Text>
            <View style={tailwind("flex-row border-b border-gray-200 p-5 justify-between")}>
                <View style={tailwind("flex-row items-center")}>
                    <View style={[tailwind("bg-yellow-300 rounded-full mr-2"), { width: 20, height: 20 }]}></View>
                    <Text style={tailwind('text-base')}>Chờ nghiệm thu</Text>
                </View>
                <View style={tailwind("flex-row items-center")}>
                    <View style={[tailwind("bg-gray-500 rounded-full mr-2"), { width: 20, height: 20 }]}></View>
                    <Text style={tailwind('text-base')}>Đã nghiệm thu</Text>
                </View>
            </View>
            <View style={tailwind("flex-row border-b border-gray-200 p-5 justify-between")}>
                <View style={tailwind("flex-row items-center")}>
                    <View style={[tailwind("bg-red-500 rounded-full mr-2"), { width: 20, height: 20 }]}></View>
                    <Text style={tailwind('text-base')}>Không nghiệm thu</Text>
                </View>
            </View>
            <View style={[{ backgroundColor: "#EA7F99" }, tailwind('flex-row')]}>
                <Text style={[tailwind(' text-center text-lg py-2 font-bold w-5/12')]}>Tên công việc</Text>
                <Text style={[tailwind(' text-center text-lg py-2 font-bold w-3/12')]}>Cây trồng</Text>
                <Text style={[tailwind(' text-center text-lg py-2 font-bold w-4/12')]}>Thời gian</Text>
            </View>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default TimeLine;