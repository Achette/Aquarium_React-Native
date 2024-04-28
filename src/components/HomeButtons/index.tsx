import { S } from './styles';
import { Button } from '@rneui/themed';


type ButtonProps = {
  content: string;
  onPress: any;
};

export const PrimaryButton = ({content, onPress}:ButtonProps) => {
  return (
    <Button 
      title={content}
      buttonStyle={S.button}
      containerStyle={S.container}
      onPress={onPress}
    />
  );
};

export const SecondaryButton = ({content, onPress}:ButtonProps) => {
  return (
    <Button 
      title={content}
      type="outline"
      titleStyle={S.title}
      buttonStyle={[S.button, S.secondaryButton]}
      containerStyle={S.container}
      onPress={onPress}
    />
  );
};
