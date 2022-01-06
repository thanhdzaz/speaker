import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import tailwind from 'tailwind-rn';
import Bg from 'src/asset/image/weatherBg.jpg';

type WeatherProps = {
}

const Weather: React.FC<WeatherProps> = ({
}) => {
    const { styles } = useStyles(_styles);

    const data = [
        { "time": "00", "temp": "24°", "weather": 1 },
        { "time": "01", "temp": "25°", "weather": 0 },
        { "time": "02", "temp": "30°", "weather": 1 },
        { "time": "03", "temp": "21°", "weather": 2 },
        { "time": "04", "temp": "22°", "weather": 2 },
        { "time": "05", "temp": "19°", "weather": 0 },
        { "time": "06", "temp": "24°", "weather": 0 },
        { "time": "07", "temp": "26°", "weather": 1 },
        { "time": "08", "temp": "27°", "weather": 0 },
        { "time": "09", "temp": "22°", "weather": 0 },
        { "time": "10", "temp": "24°", "weather": 2 },
        { "time": "11", "temp": "25°", "weather": 2 },
        { "time": "12", "temp": "30°", "weather": 2 },
        { "time": "13", "temp": "21°", "weather": 3 },
        { "time": "14", "temp": "22°", "weather": 3 },
        { "time": "15", "temp": "19°", "weather": 3 },
        { "time": "16", "temp": "24°", "weather": 3 },
        { "time": "17", "temp": "26°", "weather": 3 },
        { "time": "18", "temp": "27°", "weather": 0 },
        { "time": "19", "temp": "22°", "weather": 0 },
        { "time": "20", "temp": "24°", "weather": 1 },
        { "time": "21", "temp": "26°", "weather": 1 },
        { "time": "22", "temp": "27°", "weather": 0 },
        { "time": "23", "temp": "22°", "weather": 0 },
    ]

    const data2 = [
        { "date": "thứ bảy", "weather": 0, "tempMin": 20, "tempMax": 30 },
        { "date": "chủ nhật", "weather": 0, "tempMin": 22, "tempMax": 25 },
        { "date": "thứ hai", "weather": 1, "tempMin": 25, "tempMax": 27 },
        { "date": "thứ ba", "weather": 2, "tempMin": 30, "tempMax": 40 },
        { "date": "thứ tư", "weather": 3, "tempMin": 22, "tempMax": 34 },
        { "date": "thứ năm", "weather": 2, "tempMin": 26, "tempMax": 33 },
        { "date": "thứ sáu", "weather": 0, "tempMin": 28, "tempMax": 31 },
    ]

    const renderItem = ({ item = '' }) => {
        return (
            <View style={tailwind('items-center p-5')}>
                <Text style={tailwind('text-white text-lg mb-2')}>{item.time}</Text>
                {item.weather == 0 ?
                    <Icon name="partly-sunny" size={30} color={"white"}></Icon>
                    : item.weather == 1 ?
                        <Icon name="cloud" size={30} color={"white"}></Icon>
                        : item.weather == 2 ?
                            <Icon name="thunderstorm" size={30} color={"white"}></Icon>
                            :
                            <Icon name="cloud" size={30} color={"white"}></Icon>
                }
                <Text style={tailwind('text-white text-lg mt-2')}>{item.temp}</Text>
            </View>
        )
    }

    const renderItem2 = ({ item = '' }) => {
        return (
            <View style={tailwind('flex-row mt-1 px-3')}>
                <Text style={tailwind('uppercase text-white text-lg w-4/12')}>{item.date}</Text>
                {item.weather == 0 ?
                    <Icon name="partly-sunny" size={30} color={"white"} style={tailwind('w-6/12 -ml-4 text-center')}></Icon>
                    : item.weather == 1 ?
                        <Icon name="cloud" size={30} color={"white"} style={tailwind('w-6/12 -ml-4 text-center')}></Icon>
                        : item.weather == 2 ?
                            <Icon name="thunderstorm" size={30} color={"white"} style={tailwind('w-6/12 -ml-4 text-center')}></Icon>
                            :
                            <Icon name="cloud" size={30} color={"white"} style={tailwind('w-6/12 -ml-4 text-center')}></Icon>
                }
                <View style={tailwind('flex-row w-2/12 ml-4')}>
                    <Text style={tailwind('w-1/2 uppercase text-white text-lg text-right')}>{item.tempMin}</Text>
                    <Text style={tailwind('w-1/2 uppercase text-white text-lg text-right')}>{item.tempMax}</Text>
                </View>
            </View>
        )
    }

    // const finall = data;
    // console.log(finall)

    return (

        <View style={[{ flex: 1 }, tailwind('bg-black')]}>
            <Image source={Bg} style={tailwind('absolute')}></Image>
            <Text style={[tailwind('text-white text-center font-semibold'), { fontSize: 100 }]}> 26°</Text>

            <View style={tailwind('flex-row justify-between px-5 border-b border-gray-400')}>
                <Text style={tailwind('text-white text-lg w-3/12 capitalize')}>Thứ Sáu</Text>
                <Text style={tailwind('text-white text-lg w-7/12')}>Hôm nay</Text>

                <Text style={tailwind('text-white text-lg text-right -ml-5 w-1/12')}>31</Text>
                <Text style={tailwind('text-gray-400 text-lg text-right w-1/12')}>24</Text>
            </View>

            <View style={tailwind('-mt-2 border-b border-gray-400')}>
                <FlatList
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false}
                    data={data}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={item => item.time}
                />
            </View>

            <View style={tailwind('mt-2 mb-2')}>
                <FlatList
                    data={data2}
                    renderItem={(item) => renderItem2(item)}
                    keyExtractor={item => item.date}
                />
            </View>
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default Weather;