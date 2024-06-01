import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAquarium } from '../context';
import { Accessory, Pet, Sensor } from '../types';


export const useLoadAquariumDetails = (aquariumId:string) => {
  const { token, aquariumsList, setAquariumsList } = useAquarium();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const headers = { 'Authorization': `${token}` };
    const fetchAquariumDetails = async () => {
      try {
        const [accessoriesResponse, sensorsResponse, petsResponse] = await Promise.all([
          axios.get(`${process.env.BASE_URL}/aquarium/${aquariumId}/accessories`, { headers }),
          axios.get(`${process.env.BASE_URL}/aquarium/${aquariumId}/sensors`, { headers }),
          axios.get(`${process.env.BASE_URL}/aquarium/${aquariumId}/pets`, { headers }),
        ]);

        const aquariumDetails = {
          accessories: accessoriesResponse.data.map((accessory:Accessory) => ({ name: accessory.name })),
          sensors: sensorsResponse.data.map((sensor:Sensor) => ({ name: sensor.name, metric: sensor.metric, current: sensor.current })),
          pets: petsResponse.data.map((pet:Pet) => ({ species: pet.species, quantity: pet.quantity }))
        };

        const updatedAquariumsList = aquariumsList.map(aquarium => (aquarium.id === aquariumId ? { ...aquarium, ...aquariumDetails } : aquarium));
        setAquariumsList(updatedAquariumsList);
        console.log('Aquários atualizados:', updatedAquariumsList);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar detalhes do aquário:', error);
        setLoading(false);
      }
    };

    fetchAquariumDetails();
  }, [aquariumId, token]);

  return { loading };
};
