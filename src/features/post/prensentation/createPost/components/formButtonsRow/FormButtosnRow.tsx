import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
    handleSave: () => void;
    handleGoBack: () => void;
    loading: boolean;
};

export default function FormButtonsRow({ handleSave, handleGoBack, loading }: Props) {
    return (
        <View style={styles.buttonRow}>
            <TouchableOpacity
                style={[styles.button, styles.backButton]}
                onPress={handleGoBack}
                disabled={loading}
            >
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            {loading ? (
                <ActivityIndicator size="small" color="#FFA500" />
            ) : (
                <TouchableOpacity
                    style={[styles.button, styles.saveButton]}
                    onPress={handleSave}
                >
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    buttonRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        gap: 30
    },
    button: {
        flex: 1,
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: '#FFA500',
    },
    saveButton: {
        backgroundColor: '#FFA500',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
