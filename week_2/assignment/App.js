import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import Constants from 'expo-constants'

export default function App() {
    const imgData = [
        { id: 1, imgSource: require('./assets/1.jpg') },
        { id: 2, imgSource: require('./assets/2.jpg') },
        { id: 3, imgSource: require('./assets/3.jpg') },
        { id: 4, imgSource: require('./assets/4.jpg') },
        { id: 5, imgSource: require('./assets/5.jpg') },
        { id: 6, imgSource: require('./assets/6.jpg') },
    ]

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <AntDesign name='left' size={24} color='black' />
                <AntDesign name='appstore1' size={24} color='black' />
            </View>

            <View style={styles.avatarWrapper}>
                <Image
                    source={require('./assets/avatar.jpg')}
                    style={styles.posterAvatar}
                />

                <View>
                    <Text style={styles.textBold}>CuongND</Text>
                    <Text style={styles.textLight}>Developer</Text>

                    <View style={styles.activityButton}>
                        <TouchableOpacity style={styles.followButton}>
                            <Text
                                style={{
                                    color: '#fff',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Follow
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.directedMessageButton}>
                            <FontAwesome name='send' size={19} color='#fff' />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.operatingStatus}>
                <View>
                    <Text style={styles.textBold}>222</Text>
                    <Text style={styles.textLightSmall}>Photos</Text>
                </View>

                <View>
                    <Text style={styles.textBold}>15k</Text>
                    <Text style={styles.textLightSmall}>Followers</Text>
                </View>

                <View>
                    <Text style={styles.textBold}>612</Text>
                    <Text style={styles.textLightSmall}>Following</Text>
                </View>
            </View>

            <View style={styles.posterGallery}>
                <View style={styles.galleryColumn}>
                    {imgData.slice(0, imgData.length / 2).map((img) => (
                        <Image
                            source={img.imgSource}
                            style={styles.posterImage}
                            key={img.id}
                        />
                    ))}
                </View>

                <View style={styles.galleryColumn}>
                    {imgData.slice(imgData.length / 2).map((img) => (
                        <Image
                            source={img.imgSource}
                            style={styles.posterImage}
                            key={img.id}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 12,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatarWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 24,
    },
    posterAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    textBold: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
    },
    textLight: {
        fontSize: 14,
        fontWeight: '300',
        color: '#606060',
    },
    textLightSmall: {
        fontSize: 12,
        fontWeight: '300',
        color: '#606060',
        textAlign: 'center',
    },
    activityButton: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    followButton: {
        backgroundColor: '#2979ff',
        color: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginRight: 12,
    },
    directedMessageButton: {
        backgroundColor: '#33eaff',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    operatingStatus: {
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    posterGallery: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    galleryColumn: {
        flexDirection: 'column',
    },
    posterImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginTop: 18,
    },
})
