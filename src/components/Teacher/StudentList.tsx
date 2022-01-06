import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { FlatList } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

type StudentListProps = {
    onPressStudent?: () => void;
}



const StudentList: React.FC<StudentListProps> = ({

    onPressStudent = () => { },

}) => {
    const { styles } = useStyles(_styles);
    const [DropDownValue, setDropDownValue] = useState('')
    const data = [
        { "id": "HS1382", "name": "Nguyen Van A" },
        { "id": "HS1234", "name": "Nguyen Van A1" },
        { "id": "HS1245", "name": "Nguyen Van A2" },
        { "id": "HS7897", "name": "Nguyen Van A3" },
        { "id": "HS0495", "name": "Nguyen Van A4" },
        { "id": "HS1155", "name": "Nguyen Van A5" },
        { "id": "HS9859", "name": "Nguyen Van A6" },
    ]
    const { studentChoose } = useStores();

    const renderItem = ({ item = '' }) => {
        return (
            <TouchableOpacity style={tailwind('flex-row border-b border-black')} onPress={()=> {studentChoose.setStudent(item.name);onPressStudent()}}>
                <Text style={tailwind('text-base w-2/6 border-r p-3')}>{item.id}</Text>
                <Text style={tailwind('text-base w-4/6 p-3')}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    const [Search, setSearch] = useState('')

    return (
        <View>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={(text) => setSearch(text)}
                value={"Search"}
                containerStyle={tailwind('rounded-2xl bg-white border-white')}
                inputContainerStyle={[tailwind('bg-gray-200 rounded-xl w-full mt-2'),]}
            />
            <View style={tailwind('flex-row items-center px-10 py-3')}>
                <Icon name="people" size={30} color="black" style={tailwind('mr-2')}></Icon>
                <Text>Danh sách học sinh - Lớp 1</Text>
            </View>
            <View style={tailwind('w-full px-5')}>
                <View style={tailwind('border-2 border-gray-400 rounded-2xl')}>
                    <View style={tailwind('flex-row border-b border-black')}>
                        <Text style={tailwind('font-bold text-base w-2/6 border-r border-black p-3')}>Mã HS</Text>
                        <Text style={tailwind('font-bold text-base w-4/6 p-3')}>Tên</Text>
                    </View>

                    <FlatList data={data} renderItem={(item) => renderItem(item)} keyExtractor={item => item.id} />

                    <View style={tailwind('flex-row')}>
                        <Text style={tailwind('text-base w-2/6 border-r border-black p-3')}>Notices</Text>
                        <Text style={tailwind('text-base w-4/6 p-3')}>...</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({

})

export default StudentList;