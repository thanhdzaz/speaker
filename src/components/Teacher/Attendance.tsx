import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { SearchBar, CheckBox, Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import Avatar from 'src/asset/image/CustomerSupport.png';

type AttendanceProps = {

}



const Attendance: React.FC<AttendanceProps> = ({



}) => {
    const { styles } = useStyles(_styles);
    const [search, setSearch] = useState('')

    const data = [
        { "id": 1, "name": "dinh huyen trang", "note": null },
        { "id": 2, "name": "dinh huyen trang2", "note": "Dep trai sat gai" },
        { "id": 3, "name": "dinh huyen trang3", "note": null },
        { "id": 4, "name": "dinh huyen trang4", "note": "Hoc tot Nghich khoe" },
        { "id": 5, "name": "dinh huyen trang5", "note": null },
        { "id": 6, "name": "dinh huyen trang6", "note": null },
        { "id": 7, "name": "dinh huyen trang7", "note": null },
    ]

    const [check1, setcheck1] = useState(false)
    const [check2, setcheck2] = useState(false)
    const [check3, setcheck3] = useState(false)

    const renderItem = ({ item = '' }) => {
        return (
            <View style={tailwind('border p-3 rounded-xl m-3')}>
                <View style={tailwind("flex-row items-center")}>
                    <View style={[{ width: 70, height: 70, backgroundColor: "#7FBDEA" }, tailwind('rounded-xl')]}>
                        <Image source={Avatar} style={[{ width: 70, justifyContent: "center", alignItems: "center" }]}></Image>
                    </View>
                    <View style={tailwind('ml-2')}>
                        <Text style={tailwind('text-base')}>{item.id}. {item.name}</Text>
                        <View style={tailwind('flex-row')}>
                            <CheckBox
                                title='Đi học'
                                checked={check1}
                                onPress={() => setcheck1(!check1)}
                                checkedColor="#07da63"
                                containerStyle={[tailwind('bg-transparent w-5/12 text-base p-0 border-transparent border-0 mr-1')]}
                                textStyle={tailwind('text-base font-semibold')}
                            />
                            <CheckBox
                                title='Không phép'
                                checked={check2}
                                onPress={() => setcheck2(!check2)}
                                checkedColor="#07da63"
                                containerStyle={[tailwind('bg-transparent w-5/12 text-base p-0 border-transparent border-0 mr-1')]}
                                textStyle={tailwind('text-base font-semibold')}
                            />
                        </View>
                        <View style={tailwind('flex-row')}>
                            <CheckBox
                                title='Có phép'
                                checked={check3}
                                onPress={() => setcheck3(!check3)}
                                checkedColor="#07da63"
                                containerStyle={[tailwind('bg-transparent w-5/12 text-base p-0 border-transparent border-0 mr-1')]}
                                textStyle={tailwind('text-base font-semibold')}
                            />
                        </View>
                    </View>
                </View>

                <TextInput defaultValue={item.note} placeholder="Thêm ghi chú..." style={tailwind('w-full text-base p-3 bg-gray-200 rounded-lg')} />

            </View>
        )
    }

    const totalStudent = data.length;
    return (
        <View>
            <View style={tailwind('justify-center')}>
                <View style={tailwind('justify-center')}>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={(text) => setSearch(text)}
                        value={search}
                        containerStyle={tailwind('rounded-2xl bg-white border-white')}
                        inputContainerStyle={[tailwind('bg-gray-200 rounded-xl w-8/12'),]}
                    />
                    <View style={tailwind('w-4/12 flex-row items-center absolute right-0')}>
                        <Icon name="calendar" size={25} style={tailwind('pl-2 pr-1')}></Icon>
                        <Text style={tailwind('pr-2')}>Ngày 4/6/2021</Text>
                    </View>
                </View>

                <Text style={tailwind('text-right px-3 text-base')}>Tổng: <Text style={tailwind('font-bold text-base text-red-600')}>{totalStudent}</Text> em</Text>

                <FlatList
                    data={data}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={item => item.id}
                />

                <Button
                    title="Cập nhập"
                    buttonStyle={tailwind('bg-green-400 py-3')}
                />

            </View>

        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default Attendance;