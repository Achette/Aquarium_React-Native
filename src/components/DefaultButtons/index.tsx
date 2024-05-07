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
      type="solid"
      buttonStyle={S.primaryButton}
      titleStyle={S.primaryButtonTitle}
      containerStyle={S.primaryButtoncontainer}
      onPress={onPress}
    />
  );
};

export const SecondaryButton = ({content, onPress}:ButtonProps) => {
  return (
    <Button 
      title={content}
      type="outline"
      buttonStyle={S.secondaryButton}
      titleStyle={S.secondaryButtonTitle}
      containerStyle={S.secondaryButtoncontainer}
      onPress={onPress}
    />
  );
}

export const TextButton = ({content, onPress}:ButtonProps) => {
  return (
    <Button 
      title={content}
      type="clear"
      titleStyle={S.textButtonTitle}
      onPress={onPress}
    />
  );
};
