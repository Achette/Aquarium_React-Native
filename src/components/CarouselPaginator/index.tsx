import { S } from './styles';
import { View, useWindowDimensions, Animated } from 'react-native'


type CarouselPaginatorProps = {
  data: any;
  scrollX: any;
};

export const CarouselPaginator = ({ data, scrollX }:CarouselPaginatorProps) => {

  const { width } = useWindowDimensions();

  return (
    <View style={S.container}>
      {data.map((_:any, i:any) => {
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

        return <Animated.View style={[S.dot, { width:dotWidth, opacity }]} key={i.toString()} />;
      })}
    </View>
  );
};
