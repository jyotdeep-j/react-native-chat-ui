import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const Chat = () => {
    const [messages, setMessages] = React.useState([])


    React.useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://picsum.photos/200/300',
                },
            },
            {
                _id: 2,
                text: 'Hi how are you?',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://picsum.photos/200/300',
                },
            },
            {
                _id: 3,
                text: 'I am fine, what about you?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://picsum.photos/200/300',
                },
            },
            {
                _id: 4,
                text: 'I am also good!',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://picsum.photos/200/300',
                },
            },
            {
                _id: 5,
                text: 'Tell me about your work',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://picsum.photos/200/300',
                },
            },
        ])
    }, [])

    const onSend = React.useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])

    return (
        <GiftedChat
            messages={messages?.reverse()}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )
}

export default Chat

const styles = StyleSheet.create({})