import { S } from './styles';
import { Button } from '@rneui/themed';


type UserButtonProps = {
  content: string;
  onPress: any;
};

type LogOffButtonProps = {
  onPress: any;
};

export const UserButton = ({content, onPress}:UserButtonProps) => {
  return (
    <Button 
      title={content}
      type="solid"
      buttonStyle={S.userButton}
      titleStyle={S.userButtonTitle}
      onPress={onPress}
    />
  );
};

export const LogOffButton = ({onPress}:LogOffButtonProps) => {
  return (
    <Button 
      type="solid"
      buttonStyle={S.logOffButton}
      icon={{name: 'power', type: 'feather', size: 15, color: 'white'}}
      iconContainerStyle={S.logOffIconContainer}
      onPress={onPress}
    />
  );
};
