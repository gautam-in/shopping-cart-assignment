import { useContext } from 'react';
import { CategoryContext } from '../contexts/CategoryContext';

export const useCategory = () => {
   
  const ctx = useContext(CategoryContext);

  return {
    ...ctx
  };
};