import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, Alert, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'tailwind-rn';

// type HeaderShowProps = {
//     onPress1?: () => void;
// }

type NewsProps = {
}

const News: React.FC<NewsProps> = ({
}) => {
    const data = [
        {
            news: 'Diễn biến các bảng vòng loại World Cup 2022: Tuyển Việt Nam còn cách lịch sử một bước chân!'
        },
        {
            news: 'HLV Tan Cheng Hoe khâm phục niềm tin HLV Park Hang-seo dành cho Trọng Hoàng'
        },
        {
            news: 'EURO 2020: Pha đá phản lưới nhà đi vào lịch sử!'
        },
        {
            news: 'Sáng nay thêm 68 bệnh nhân Covid-19, Việt Nam vượt mốc 10.000 ca mắc'
        }
    ]
    return (
        <ScrollView>
            <View style={tw('mt-8 w-10/12 ml-9')}>
                {data.map((news) => (
                    <View style={tw('border p-5 rounded-2xl mb-5')}>
                        <Text>{news.news}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
};

export default News;