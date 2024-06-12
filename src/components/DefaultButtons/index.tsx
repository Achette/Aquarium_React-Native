import { Button } from '@rneui/themed';
import { ButtonProps } from '../../types';
import { S } from './styles';


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
