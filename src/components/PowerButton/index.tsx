import { Button } from '@rneui/themed';
import { PowerButtonProps } from '../../types';
import { S } from './styles';


export const PowerButton = ({size, onPress}:PowerButtonProps) => {
  return (
    <Button 
      type="solid"
      buttonStyle={[S.powerButton, {width: size*2, height: size*2}]}
      icon={{name: 'power', type: 'feather', size: size, color: 'white'}}
      iconContainerStyle={[S.powerIconContainer, {width: size*2, height: size*2}]}
      onPress={onPress}
    />
  );
};
