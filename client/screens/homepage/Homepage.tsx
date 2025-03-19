import React, { useEffect, useState } from 'react';
import { Text, View, PermissionsAndroid, Platform, TouchableOpacity, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import BottomDash from '../../components/BottomDash';
import styles from './styles';

export default function Homepage() {
    return (
    <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.topdash}>
                <Text style={styles.dashtext}>Great day for a run.</Text>
            </View>
            <View style={styles.mapcontainer}>
                <MapView style={styles.mapview}>
                    <TouchableOpacity style={styles.startbtn}>
                        <View style={{transform: [{ rotate: '-45deg' }]}}>
                        <Text style={styles.startbtntext}>Start</Text>
                        </View>
                    </TouchableOpacity>
                </MapView>
            </View>
            <View style={styles.bottomdash}>
                <BottomDash />
            </View>
        </View>
     </SafeAreaView>
    );
}