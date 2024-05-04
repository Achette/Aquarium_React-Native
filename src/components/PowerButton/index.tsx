import { S } from './styles';
import { Button } from '@rneui/themed';


type PowerButtonProps = {
  size: number;
  onPress: any;
};

export const PowerButton = ({size, onPress}:PowerButtonProps) => {
  return (
    <Button 
      type="solid"
      buttonStyle={S.powerButton}
      icon={{name: 'power', type: 'feather', size: size, color: 'white'}}
      iconContainerStyle={S.powerIconContainer}
      onPress={onPress}
    />
  );
};
