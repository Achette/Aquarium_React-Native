import { Button } from '@rneui/themed';
import { UserButtonProps } from '../../types';
import { S } from './styles';


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
