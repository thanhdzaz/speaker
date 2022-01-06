import React, { useState } from 'react';
import { View, Image, Text, Platform, TextInput, TouchableHighlight, Alert, TouchableOpacity, Button, ScrollView } from 'react-native';
import tw from 'tailwind-rn';
import ModalDropdown from 'react-native-modal-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

const data = [
    {
        time: 2,
        morning: [
            {
                food: 'Drink milk'
            }
        ],
        noon: [
            {
                food: 'Rice'
            },
            {
                food: 'Eggs'
            },
            {
                food: 'Vegetable'
            },
            {
                food: 'Apple'
            }
        ],
        afterNoon: [
            {
                food: 'Cake'
            }
        ],
    },
    {
        time: 3,
        morning: [
            {
                food: 'Drink milk'
            }
        ],
        noon: [
            {
                food: 'Rice'
            },
            {
                food: 'Eggs'
            },
            {
                food: 'Vegetable'
            },
            {
                food: 'Apple'
            }
        ],
        afterNoon: [
            {
                food: 'Cake'
            }
        ],
    },
    {
        time: 4,
        morning: [
            {
                food: 'Drink milk'
            }
        ],
        noon: [
            {
                food: 'Rice'
            },
            {
                food: 'Eggs'
            },
            {
                food: 'Vegetable'
            },
            {
                food: 'Apple'
            }
        ],
        afterNoon: [
            {
                food: 'Cake'
            }
        ],
    },
    {
        time: 5,
        morning: [
            {
                food: 'Drink milk'
            }
        ],
        noon: [
            {
                food: 'Rice'
            },
            {
                food: 'Eggs'
            },
            {
                food: 'Vegetable'
            },
            {
                food: 'Apple'
            }
        ],
        afterNoon: [
            {
                food: 'Cake'
            }
        ],
    },
    {
        time: 6,
        morning: [
            {
                food: 'Drink milk'
            }
        ],
        noon: [
            {
                food: 'Rice'
            },
            {
                food: 'Eggs'
            },
            {
                food: 'Vegetable'
            },
            {
                food: 'Apple'
            }
        ],
        afterNoon: [
            {
                food: 'Cake'
            }
        ],
    },
    {
        time: 7,
        morning: [
            {
                food: 'Drink milk'
            }
        ],
        noon: [
            {
                food: 'Rice'
            },
            {
                food: 'Eggs'
            },
            {
                food: 'Vegetable'
            },
            {
                food: 'Apple'
            }
        ],
        afterNoon: [
            {
                food: 'Cake'
            }
        ],
    }
]

type EatingServiceProps = {

}

const EatingService: React.FC<EatingServiceProps> = ({

}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [chooseDate, setChooseDate] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setChooseDate(selectedDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <ScrollView>
            <View>
                <View style={tw('mt-6 items-center')}>
                    <View style={tw('flex-row w-10/12')}>
                        <View style={tw('flex-row w-6/12')}>
                            <Text>Chọn lớp: </Text>
                            <ModalDropdown
                                style={tw('border w-7/12 pl-2')}
                                options={['option 1', 'option 2']}
                                dropdownStyle={{ width: 99.7, marginLeft: -9, height: 'auto' }}
                            >
                                <Text>Chọn</Text>
                            </ModalDropdown>
                            <Image style={tw('-left-5 top-2')} source={require('../../../asset/image/dropArrow.png')} />
                        </View>

                        <View style={tw('w-6/12 ml-6 flex-row')}>
                            <TouchableOpacity onPress={showDatepicker} style={tw('items-center w-2/12')}>
                                <Image source={require('../../../asset/image/calendarIcon.png')} />
                            </TouchableOpacity>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onConfirm={onChange}
                                />
                            )}
                            <Text style={tw('ml-1')}>Ngày 4/6/2021</Text>
                        </View>
                    </View>
                    <View style={tw('w-10/12 mt-4')}>
                        <View style={tw('flex-row justify-between')}>
                            <Text style={tw('border w-3/12 p-2 text-center rounded-tl-2xl')}>Time</Text>
                            <Text style={tw('border w-3/12 p-2 text-center border-l-0')}>Sáng</Text>
                            <Text style={tw('border w-3/12 p-2 text-center border-l-0')}>Trưa</Text>
                            <Text style={tw('border w-3/12 p-2 text-center rounded-tr-2xl border-l-0')}>Chiều</Text>
                        </View>
                        {data.map((rs) => (
                            <View style={tw('flex-row justify-between')}>
                                <Text style={tw('border w-3/12 p-1 text-center border-t-0')}>Thứ {rs.time}</Text>
                                <View style={tw('border w-3/12 p-1 border-t-0 border-l-0')}>
                                    {rs.morning.map((mn) => (
                                        <Text>{'-' + mn.food}</Text>
                                    ))}
                                </View>
                                <View style={tw('border w-3/12 p-1 border-t-0 border-l-0')}>
                                    {rs.noon.map((n) => (
                                        <Text>{'-' + n.food}</Text>
                                    ))}
                                </View>
                                <View style={tw('border w-3/12 p-1 border-t-0 border-l-0')}>
                                    {rs.afterNoon.map((an) => (
                                        <Text>{'-' + an.food}</Text>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default EatingService;
