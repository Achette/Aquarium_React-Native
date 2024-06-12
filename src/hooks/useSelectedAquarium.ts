import { useState, useEffect } from 'react';
import { useAquarium } from '../context';


export const useSelectedAquarium = (aquariumId:string) => {
  const { aquariumsList } = useAquarium();
  const [ selectedAquarium, setSelectedAquarium ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const aquariumData = aquariumsList.find(a => a.id === aquariumId);
    if (aquariumData) {
      console.log('Aquário selecionado:', aquariumData);
      setSelectedAquarium(aquariumData);
      setIsLoading(false);
    }
  }, [aquariumsList, aquariumId]);

  return { selectedAquarium, isLoading };
};
