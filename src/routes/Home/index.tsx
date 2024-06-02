import { View } from 'react-native';
import { HomePrimaryButton, HomeSecondaryButton, HomeBanner, AquariumImage, HomeCarousel } from '../../components';
import { S } from './styles';


export default function Home({navigation}:any) {
  return (
    <View style={S.page}>
      <View style={S.buttons}>
        <HomeSecondaryButton
          content='Cadastrar'
          onPress={() => navigation.navigate('SignUp')}
        />
        <HomePrimaryButton
          content='Entrar'
          onPress={() => navigation.navigate('LogIn')}
        />
      </View>
      <HomeBanner />
      <AquariumImage />
      <HomeCarousel />
    </View>
  );
};
