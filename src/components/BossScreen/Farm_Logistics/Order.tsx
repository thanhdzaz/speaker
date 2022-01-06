import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-rn';

type OrderProps = {

}

const Order: React.FC<OrderProps> = ({

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
                   <Text>Kế hoạch</Text>
                </View>
            </View>
        </ScrollView>
    )
};

export default Order;
