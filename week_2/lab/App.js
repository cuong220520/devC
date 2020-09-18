import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Constants from 'expo-constants'

export default function App() {
    const data = [
        { posterName: 'DinhCuongNguyen', avatarUrl: '', imageUrl: '' },
        { posterName: 'ThaiSonPham', avatarUrl: '', imageUrl: '' },
        { posterName: 'GiangNguyenDuc', avatarUrl: '', imageUrl: '' },
    ]
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{
                        uri:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',
                    }}
                    resizeMode='contain'
                />

                <Feather size={27} color='black' />
            </View>

            <View>
                <View style={styles.avatarWrapper}>
                    <Image
                        source={require('./assets/icon.png')}
                        style={styles.posterAvatar}
                    />
                    <Text style={styles.posterName}>CuongND</Text>
                </View>

                <View style={styles.imageWrapper}>
                    <Image style={styles.posterImage}></Image>
                </View>
            </View>

            <View>
                {data.map((item) => (
                    <View>
                        <View style={styles.avatarWrapper}>
                            <Image
                                source={require(`${item.avatarUrl}`)}
                                style={styles.posterAvatar}
                            />
                            <Text style={styles.posterName}>{item.posterName}</Text>
                        </View>

                        <View style={styles.imageWrapper}>
                            <Image style={styles.posterImage}></Image>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginTop: Constants.statusBarHeight,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#f3f6fa',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        flex: 1,
        height: 40,
        width: null,
    },
    avatarWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 12,
    },
    posterAvatar: {
        width: 46,
        height: 46,
        borderRadius: 23,
    },
    posterName: {
        fontSize: 15,
        fontWeight: '500',
    },
    imageWrapper: {
        flex: 1,
        width: null,
        height: null,
    },
    posterImage: {
        height: 300,
    },
})
