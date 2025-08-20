import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './styles';
import { BatTextInput } from '../BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {
    const [pass, setPass] = React.useState('');

    function handleGenerateButton(){
        let generateToken = generatePass();
        setPass(generateToken);
    }

    return (
        <>

        <BatTextInput
        pass={pass}
        />

            <Pressable
                onPress={handleGenerateButton}
            >
                <Text style={styles.text}>
                    🌩️ GENERATE
                </Text>
            </Pressable>

            <Pressable style={styles.button}
                onPress={() => { console.log("fui pressionado") }}
            >
                <Text style={styles.text}>
                    🌩️ COPY
                </Text>
            </Pressable>
        </>
    );
}