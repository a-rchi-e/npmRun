import { Text, View } from 'react-native';
import styles from './styles';

export default function RunHistory() {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.topdash}>
                <Text style={styles.dashtext}>Your runs.</Text>
            </View>
        </View>
        </>
    );
}