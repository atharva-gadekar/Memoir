import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image } from 'react-native';

export default function SignUpScreen() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSignUp = async () => {
        if (password !== confirmPassword) {
            console.log("Passwords do not match.");
            return;
        }
        // Add sign-up logic here (e.g., API call)
        console.log("Sign-up details:", { username, password });
        router.push('/(tabs)'); // Navigate to main app after sign-up
    };

    const navigateToLogin = () => {

        router.push('/'); // Navigate back to the login screen
    };

    return (
        <>
            <ParallaxScrollView
                headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
                headerImage={
                    <Image
                        source={require('@/assets/images/partial-react-logo.png')}
                    />}
            >
                {/* <View style={styles.container}> */}
                <ThemedText type="title">Sign Up</ThemedText>
                <ThemedTextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />
                <ThemedTextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <ThemedTextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <Button title="Sign Up" onPress={onSignUp} />
                <View style={styles.footer}>
                    <ThemedText>Already have an account? </ThemedText>
                    <TouchableOpacity onPress={navigateToLogin}>
                        <ThemedText type="link">Log In. </ThemedText>
                    </TouchableOpacity>
                </View>
                {/* </View> */}
            </ParallaxScrollView>
        </>
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
    signUpText: {
        fontSize: 16,
        color: "#007BFF",
        fontWeight: "bold",
    },
    iconContainer: {
        //TODO: Add styles for icon container
    },
});
