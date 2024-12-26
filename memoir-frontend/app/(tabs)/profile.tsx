import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';

export default function ProfileScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>
            <View style={styles.profileContainer}>
                <Image
                    source={require('@/assets/images/react-logo.png')}
                    style={styles.profilePicture}
                />
                <ThemedText type="title" style={styles.name}>
                    Priya Sharma
                </ThemedText>
                <ThemedText type="subtitle" style={styles.email}>
                    priya.sharma@example.com
                </ThemedText>
            </View>

            <View style={styles.detailsSection}>
                <ThemedText type="subtitle" style={styles.sectionTitle}>
                    Personal Information
                </ThemedText>
                <ThemedText>Name: Priya Sharma</ThemedText>
                <ThemedText>Phone: +91-9876543210</ThemedText>
            </View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: -50, // Pulls profile picture up slightly over header
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff',
        marginBottom: 10,
        marginTop: 40,
    },
    name: {
        textAlign: 'center',
        marginBottom: 5,
    },
    email: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
    },
    detailsSection: {
        paddingHorizontal: 20,
    },
    sectionTitle: {
        marginBottom: 10,
    },
});
