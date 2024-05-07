import { S } from './styles';
import { Button } from '@rneui/themed';


type UserButtonProps = {
  content: string;
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
