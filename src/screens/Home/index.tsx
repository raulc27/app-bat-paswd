import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
} from 'react-native';

import {BatLogo} from '../../components/BatLogo';

import styles from './Style';
import { BatTextInput } from '../../components/BatTextInput';

export default function Home(){
    return(
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>

            <View>
                <BatTextInput />
            </View>
           
    
            <StatusBar style="light" />
        </View>
    )
}

