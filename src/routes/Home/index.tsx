import { S } from './styles';
import { View } from 'react-native';
import { PrimaryButton, SecondaryButton } from '../../components/HomeButtons';
import { HomeBanner } from '../../components/HomeBanner';
import { AquariumImage } from '../../components/AquariumImage';
import { HomeCarousel } from '../../components/HomeCarousel';


function Home({navigation}:any) {
  return (
    <View style={S.page}>
      <View style={S.buttons}>
        <SecondaryButton
          content='Cadastrar'
          onPress={() => navigation.navigate('SignUp')}
        />
        <PrimaryButton
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

export default Home;
