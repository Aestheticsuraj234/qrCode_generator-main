import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext ,useState} from 'react'
import QRCodeComponent from '../../../Components/QRCodeComponent'
import { QrCodeContext } from '../../../context/QrCodeContext'

const Patterns = () => {
    const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

    const { clearQRCode,

        saveQRCode,
        QR,
        setQRref,
        qrCodeSize,
        qrCodeBackgroundColor,
        qrCodeLogo,
        qrCodeLogoSize,
        setQRCodeLogoSize,
        qrCodeLogoBackgroundColor,

        qrCodeLogoMargin,
        setQRCodeLogoMargin,
        qrCodeLogoBorderRadius,
        setQRCodeLogoBorderRadius,
        qrCodeQuietZone,
        setQRCodeQuietZone,
        qrCodeEnableLinearGradient,
        setQRCodeEnableLinearGradient,
        qrCodeGradientDirection,
        setQRCodeGradientDirection,
        qrCodeLinearGradient,
        setQRCodeLinearGradient, } = useContext(QrCodeContext)




    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            {/* Card for giving multiple patterns we have */}
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}>Patterns</Text>
            <View style={styles.PatternsBox}>
                {/* Need to run loop of how many design patterns we have */}

            </View>
            {/* QRCODE Components */}
            <View style={styles.qr}>
                <Pressable onPress={saveQRCode}>
                    {QR && <QRCodeComponent
                        size={qrCodeSize}
                        logo={qrCodeLogo}
                        logoSize={qrCodeLogoSize}
                        qrCodeValue={QR}
                        getRef={setQRref}
                        backgroundColor={qrCodeBackgroundColor}
                        logoBackgroundColor={qrCodeLogoBackgroundColor}
                        logoMargin={qrCodeLogoMargin}
                        logoBorderRadius={qrCodeLogoBorderRadius}
                        enableLinearGradient={qrCodeEnableLinearGradient}
                        gradientDirection={qrCodeGradientDirection}
                        linearGradient={qrCodeLinearGradient}
                    />}
                </Pressable>
            </View>
            {QR && <Text style={styles.instraction}>Click The <Text style={styles.instraicon}>QR</Text> Code to save it</Text>}
        </View>

    )
}

export default Patterns

const styles = StyleSheet.create({
    PatternsBox: {
        height: 108,
        alignItems: 'center',
        justifyContent: 'center',
        width: 320,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 7,
    },

    qr: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        width: 250,
    },

    instraction: {
        marginTop: 40,
        color: "#adadad"
    },

    instraicon: {
        color: "#bf88f3"
    },
})