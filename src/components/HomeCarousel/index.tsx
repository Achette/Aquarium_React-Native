import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Text, FlatList, View, Dimensions, Animated } from 'react-native';
import { CarouselPaginator } from '../';
import { S } from './styles';


export const HomeCarousel = () => {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const scrollX = useRef(new Animated.Value(0)).current;
  const dataRef = useRef(0);

  const data = [
    { id: '1', content: 'Gerencie seu aquário com nossa plataforma completa de controle e monitoramento.' },
    { id: '2', content: 'Cadastre seu aquário, adicione sensores, monitore dados em tempo real e controle dispositivos, tudo em um só lugar.' },
    { id: '3', content: 'Dados de sensores, dashboards personalizados e notificações em tempo real.' },
    { id: '4', content: 'Cadastre-se agora para começar a explorar todas as funcionalidades que oferecemos!' },
  ];

  const viewableItemsChanged = useRef(({ viewableItems }:any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  useLayoutEffect(() => {
    dataRef.current.scrollToIndex({ index: 0, animated: false });
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % data.length;
      dataRef.current.scrollToIndex({ index: newIndex, animated: true });
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={[S.itemContainer, {width: screenWidth}]}>
              <Text style={S.text}>{item.content}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={dataRef}
        />
      </View>
      <CarouselPaginator data={data} scrollX={scrollX}/>
    </View>
  );
};
