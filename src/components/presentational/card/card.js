import React from 'react';
import {View , TouchableOpacity , Animated } from 'react-native'

export const Card = (props)=>{
    return(
        <Animated.View disabled={props.disableTouch}>
            <View  style={props.style}>
                {props.children}
            </View>    
        </Animated.View>
        
    )
}