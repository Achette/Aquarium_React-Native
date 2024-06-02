import { View } from 'react-native';
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
    </View>
  );
};
