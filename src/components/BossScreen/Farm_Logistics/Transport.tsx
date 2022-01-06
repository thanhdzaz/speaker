import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-rn';

type EmployeeListProps = {

}

const EmployeeList: React.FC<EmployeeListProps> = ({

}) => {
    // const data = [
    //     {
    //         name: 'Tom Hiddleston'
    //     },
    //     {
    //         name: 'Acacia'
    //     },
    //     {
    //         name: 'Adela'
    //     },
    //     {
    //         name: 'Agatha'
    //     },
    //     {
    //         name: 'Alethea'
    //     }
    // ];
    // const cloneData = data.slice();
    // const dataLength = data.length;
    // cloneData.splice(dataLength - 1, 1);

    return (
        <ScrollView>
            <View style={tw('items-center mt-10')}>
                <View style={tw('w-10/12')}>
                   <Text>Vận chuyển</Text>
                </View>
            </View>
        </ScrollView>
    )
};

export default EmployeeList;
