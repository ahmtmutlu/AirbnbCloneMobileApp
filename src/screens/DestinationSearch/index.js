import React, { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable } from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

const DestinationSearchScreen = () => {
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* input component */}
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />
            {/* list of destination */}
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('Guest')} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default DestinationSearchScreen;