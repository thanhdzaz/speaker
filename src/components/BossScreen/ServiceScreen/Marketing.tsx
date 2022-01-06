import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'tailwind-rn';

const data = [
    {
        content: 'Xây dựng thương hiệu chuyên sâu',
    },
    {
        content: 'Xây dựng web trường',
    },
    {
        content: '',
    },
    {
        content: '',
    },
    {
        content: '',
    },
    {
        content: '',
    }

]

type MarketingProps = {

}

const Marketing: React.FC<MarketingProps> = ({

}) => {
    return (
        <ScrollView>
            <View>
                <View style={tw('items-center mt-10')}>
                    <View style={tw('flex-row w-10/12')}>
                        <View style={tw('w-2/12 border rounded-tl-2xl p-3')}>
                            <Text style={tw('text-center')}>STT</Text>
                        </View>
                        <View style={tw('w-10/12 border rounded-tr-2xl border-l-0 p-3')}>
                            <Text style={tw('text-center')}>Nội dung</Text>
                        </View>
                    </View>
                    {data.map((content, index) => (
                        <View style={tw('flex-row w-10/12')}>
                            <View style={tw('w-2/12 border p-3 border-t-0')}>
                                <Text style={tw('text-center')}>{index + 1}</Text>
                            </View>
                            <View style={tw('w-10/12 border border-l-0 p-3 border-t-0')}>
                                <Text style={tw('text-center')}>{content.content}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
};

export default Marketing;