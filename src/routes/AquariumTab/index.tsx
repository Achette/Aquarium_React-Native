import { View, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useSelectedAquarium, useAquariumData } from '../../hooks';
import { TopBar, ConfigDisplay, DataDisplay, ActionButton } from '../../components';
import { Icons } from '../../theme';
import { S } from './styles';


export default function AquariumTab({navigation}:any) {
  const route = useRoute();
  const { aquarium }:any = route.params;
  
  const { selectedAquarium, isLoading } = useSelectedAquarium(aquarium.id);
  if (!aquarium || isLoading || !selectedAquarium) return null;

  const { icon, title, configs, data }:any = useAquariumData(selectedAquarium);

  return (
    <View style={S.container}>
      <TopBar 
        title={title}
        icon={icon}
        hasBackButton={true}
        navigation={navigation}
      />

      <View style={S.configsDisplay}>
        {configs.map((config:any, index:any) => (
          <ConfigDisplay
            key={index}
            content={config.content}
            icon={config.icon}
          />
        ))}
      </View>

      <View style={S.dataDisplay}>
        {data.map((data:any, index:any) => (
          <DataDisplay
            key={index}
            title={data.title}
            value={data.value}
            icon={data.icon}
          />
        ))}
      </View>

      <View style={S.buttonsBar}>
        <ActionButton
          icon={Icons.cleanButton}
          title='Limpar'
          onPress={() => {Alert.alert('Limpar', 'Pronto, limpou os cocô tudo')}}
        />
        <ActionButton
          icon={Icons.foodButton}
          title='Alimentar'
          onPress={() => {Alert.alert('Alimentar', 'Pronto, deu comida pros peixinho')}}
        />
      </View>
  </View>
  );
};
