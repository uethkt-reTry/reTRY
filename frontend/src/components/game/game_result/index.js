import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Icon, Container } from 'native-base';
import CacheableImage from 'react-native-cacheable-image';
import styles, * as fromStyles from './styles';



class GameResult extends Component {
    constructor() {
        super();
        console.log("init GameResult");
    }
    render() {
        return (
            <Container style={StyleSheet.flatten(styles.container)}>
                <View style={styles.statusBarBackground} />
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Y O U  W I N !</Text>
                </View>
                <View style={styles.playersContainer}>
                    <View style={styles.playerContainer}>
                        <View style={styles.avatarAndScoreContainer}>
                            <Text style={styles.scoreLeftValue}>91</Text>
                            <Image style={styles.userAvatarLeft} source={{ uri: 'http://graph.facebook.com/100002307472131/picture?type=square' }} />
                        </View>

                        <Text style={styles.playerNameLeft}>Trần Minh Tuấn</Text>
                        <Text style={styles.levelLeft}>Level 2</Text>
                    </View>
                    <View style={styles.playerContainer}>
                        <View style={styles.avatarAndScoreContainer}>
                            <Image style={styles.userAvatarRight} source={{ uri: 'http://graph.facebook.com/100002307472131/picture?type=square' }} />
                            <Text style={styles.scoreRightValue}>91</Text>
                        </View>
                        <Text style={styles.playerNameRight}>Trần Minh Tuấn</Text>
                        <Text style={styles.levelRight}>Level 1</Text>
                    </View>
                </View>
            </Container>
        )
    }
}

export default GameResult;