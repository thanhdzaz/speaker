import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';


type ChatProps = {
    ownerChat: string;
    onPressChatBox?: () => void;
}

const Chat: React.FC<ChatProps> = ({
    ownerChat,
    onPressChatBox = () => { },
}) => {
    const { styles } = useStyles(_styles);

    return (
        <View style={tailwind('w-full pt-2 px-3 my-5 justify-between')}>
            <View style={tailwind('w-full flex-row justify-between mb-5')}>
                <TouchableOpacity style={styles.boxFocus}>
                    <Icon
                        name="bonfire"
                        size={25}
                        color="red"
                        style={{ marginRight: 10 }}
                    ></Icon>
                    <View>
                        <Text style={tailwind("text-red-600 text-base font-semibold")}>Cắm trại</Text>
                        <Text>22/06/2021</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.boxFocus]}>
                    <Icon
                        name="body"
                        size={25}
                        color="blue"
                        style={{ marginRight: 10 }}
                    ></Icon>
                    <View>
                        <Text style={tailwind("text-blue-900 text-base font-semibold")}>Thể chất</Text>
                        <Text>24/07/2021</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={tailwind('w-full flex-row justify-between mb-5')}>
                <TouchableOpacity style={styles.boxFocus}>
                    <Icon
                        name="leaf"
                        size={25}
                        color="green"
                        style={{ marginRight: 10 }}
                    ></Icon>
                    <View>
                        <Text style={tailwind("text-green-700 text-base font-semibold")}>Trồng cây</Text>
                        <Text>24/06/2021</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.boxFocus]}>
                    <Icon
                        name="brush"
                        size={25}
                        color="orange"
                        style={{ marginRight: 10 }}
                    ></Icon>
                    <View>
                        <Text style={tailwind("text-yellow-600 text-base font-semibold")}>Hội hoạ</Text>
                        <Text>24/07/2021</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({
    conflexrow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }, boxFocus: {
        display: "flex",
        flexDirection: "row",
        // borderWidth: 1,
        borderRadius: 10,
        // borderColor: "black",
        width: "47%",
        backgroundColor: "white",
        padding: 14,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})

export default Chat;