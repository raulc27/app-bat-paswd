import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
} from 'react-native';
import styles from './Style';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text>
                Home works!!!
            </Text>
            <StatusBar style="auto" />
        </View>
    )
}

