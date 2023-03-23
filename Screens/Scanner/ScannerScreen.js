import { Text, View, StyleSheet, Button, Image, Linking, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
const ScannerScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        Alert.alert(type)
        Linking.openURL(data)
    };
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Clear the QR code when the screen comes into focus
            setQR("");
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={{ backgroundColor: "#ecf2ff", flex: 1 }}>
            {/* User logo */}
            <View style={styles.Avatar}>
                <FontAwesome name="user-circle-o" size={35} color="#ffb573" />
            </View>

            {/* Information Text */}
            <Text style={styles.infoText}>Scan the QR code to continue</Text>

            {/* Barcode Scanner */}
            <View style={styles.container}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
        </View>
    )
}
export default ScannerScreen


const styles = StyleSheet.create({
    Avatar: {
        margin: 10,
        alignItems: 'flex-end'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        marginHorizontal: 20
    },
    infoText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#395365'
    }
});
