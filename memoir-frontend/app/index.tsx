import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter, Stack } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const onLocalSignIn = async () => {
        // Perform authentication logic here
        router.push('/(tabs)');
    };

    const navigateToSignUp = () => {
        router.push('/signup');
    };

    return (

        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>

            <ThemedText type='title' >Sign In</ThemedText>
            <ThemedTextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <ThemedTextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={isPasswordVisible}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.iconContainer}>
                <Ionicons
                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                    size={20}
                    color="#aaa"
                />
            </TouchableOpacity>
            <Button title="Sign In" onPress={onLocalSignIn} />
            <View style={styles.footer}>
                <ThemedText>Don't have an account?</ThemedText>
                <TouchableOpacity onPress={navigateToSignUp}>
                    <ThemedText type="link" > Sign Up. </ThemedText>
                </TouchableOpacity>
            </View>

        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "bold",
    },
    input: {
        width: "100%",
        height: 48,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 4,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
    footer: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    footerText: {
        fontSize: 16,
        color: "#555",
    },

    iconContainer: {
        //TODO: Add styles for icon container
    },
});
