import React from 'react';
import {
    Dimensions,
    PixelRatio
} from 'react-native'

const {width, height} = Dimensions.get('window');

export const getHeight = (heightB) => {
    return Math.round(PixelRatio.roundToNearestPixel((heightB / 812) * height))
}

export const getWidth = (widthB) => {
    return Math.round(PixelRatio.roundToNearestPixel((widthB / 375) * width))
}
