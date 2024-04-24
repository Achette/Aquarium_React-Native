import React from 'react'
import { View, StyleSheet, useWindowDimensions, Animated } from 'react-native'
import { Colors } from '../../theme/Colors';

export const CarouselPaginator = ({ data, scrollX }) => {

  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 15, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.15, 1, 0.15],
          extrapolate: 'clamp',
        });

        return <Animated.View style={[styles.dot, { width:dotWidth, opacity }]} key={i.toString()} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    justifyContent: 'center',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    marginHorizontal: 8,
  }
});
