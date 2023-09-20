import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Chat from '../../components/Chat';

const ChatScreen: React.FC = () => {
    return (
        <>
            <Chat />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#fff",
    },
})

export default ChatScreen;