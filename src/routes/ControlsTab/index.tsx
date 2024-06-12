import { View, Text } from 'react-native';
import { TopBar, ItemControlButton } from '../../components';
import { useAquariumControls } from '../../hooks';
import { Icons } from '../../theme';
import { S } from './styles';


export default function ControlsTab() {
  const { isLoading, selectedAquarium, controls } = useAquariumControls();
  if (isLoading || !selectedAquarium) return null;

  return (
    <View style={S.container}>
      <TopBar 
        title='Controles'
        icon={Icons.controlTabBar}
      />

      {controls.length === 0 ? (
        <View style={S.noAccessories}>
          <Text style={S.noAccessoriesText}>Não há acessórios cadastrado neste aquário</Text>
        </View>
      ) : (
        <View style={S.controlsButtonsContainer}>
        {controls.map((item:any, index:any) => (
          <ItemControlButton 
          key={index}
          icon={item.icon} 
          title={item.title} 
          onPress={item.onPress} 
          isSelected={item.isSelected}
          />
        ))}
        </View>
      )}
    </View>
  );
};
