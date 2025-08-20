import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
} from 'react-native';

import {BatLogo} from '../../components/BatLogo';

import styles from './Style';

export default function Home(){
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
            
            <Text>
                Home works!!!
            </Text>
            <StatusBar style="auto" />
        </View>
    )
}

