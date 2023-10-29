import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const MenuCard = ({ title, description, price }) => {
    const handlePress = () => {
        Alert.alert('Ausgewählt!', `${title} wurde zum Warenkorb hinzugefügt.`);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.cardTouchable}>
            <View style={styles.card}>
                <View style={styles.leftContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.price}>{price} LEI</Text>
                    <TouchableOpacity onPress={handlePress} style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardTouchable: {
        margin: 10,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3
    },
    leftContainer: {
        flex: 3
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        marginTop: 8,
        fontSize: 14,
        color: '#888'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    addButton: {
        marginTop: 5,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#C5E1A5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        fontSize: 20,
        color: '#4E7C5B'
    }
});

export default MenuCard;
