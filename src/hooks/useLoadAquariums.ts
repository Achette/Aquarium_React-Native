import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAquarium } from '../context';


export const useLoadAquariums = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const { token, setAquariumsList } = useAquarium();
  const headers = { 'Authorization': `${token}` };

  useEffect(() => {
    const loadAquariums = async () => {
      try {
        const response = await axios.get(`${process.env.BASE_URL}/aquarium`, { headers });

        const aquariumsData = response.data.map((aquarium:any) => ({
          id: aquarium.id,
          name: aquarium.name,
          format_aquarium: aquarium.format_aquarium,
          material: aquarium.material,
          thickness: aquarium.thickness,
          height: aquarium.height,
          voltage: aquarium.voltage,
          capacity: aquarium.capacity,
        }));

        console.log(`Aquarios carregados: ${aquariumsData.length} - ${JSON.stringify(aquariumsData)}`);
        setAquariumsList(aquariumsData);
      } catch (e) {
        console.log(`Erro ao carregar aquários: ${e}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadAquariums();
  }, [token]);

  return { isLoading };
};
