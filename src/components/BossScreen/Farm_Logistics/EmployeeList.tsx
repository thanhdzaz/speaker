import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-rn';

type EmployeeListProps = {

}

const EmployeeList: React.FC<EmployeeListProps> = ({

}) => {
    const data = [
        {
            name: 'Tom Hiddleston'
        },
        {
            name: 'Acacia'
        },
        {
            name: 'Adela'
        },
        {
            name: 'Agatha'
        },
        {
            name: 'Alethea'
        }
    ];
    const cloneData = data.slice();
    const dataLength = data.length;
    cloneData.splice(dataLength - 1, 1);

    return (
        <ScrollView>
            <View style={tw('items-center mt-10')}>
                <View style={tw('w-10/12')}>
                    <View style={tw('flex-row')}>
                        <Text style={tw('w-2/12 border p-3 rounded-tl-2xl text-center')}>STT</Text>
                        <Text style={tw('w-10/12 border p-3 border-l-0 rounded-tr-2xl')}>Họ và tên</Text>
                    </View>
                    {cloneData.map((name, index) => (
                        <View style={tw('flex-row')}>
                            <Text style={tw('w-2/12 border p-3 text-center border-t-0')}>{index + 1}</Text>
                            <Text style={tw('w-10/12 border p-3 border-l-0 border-t-0')}>{name.name}</Text>
                        </View>
                    ))}
                    <View style={tw('flex-row')}>
                        <Text style={tw('w-2/12 border p-3 text-center rounded-bl-2xl border-t-0')}>{dataLength}</Text>
                        <Text style={tw('w-10/12 border p-3 border-l-0 rounded-br-2xl border-t-0')}>{data[dataLength - 1].name}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default EmployeeList;
