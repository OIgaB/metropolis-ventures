import { useSelector } from 'react-redux';
import {
    selectAuth,
    selectAllObjects,
    selectObjectsPerPage,
    selectObjectById,
    selectisLoading,
    selectError,
    selectFavoriteObjects,
    selectFilterLocation,
    selectInvestmentValue,
    selectSharePrice,
    selectYield,
} from '../../redux/selectors';


export const useAllSelectors = () => {
  const auth = useSelector(selectAuth);
  const allObjects = useSelector(selectAllObjects);
  const objectsForPage = useSelector(selectObjectsPerPage);
  const objectById = useSelector(selectObjectById);
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);
  const favoriteObjects = useSelector(selectFavoriteObjects);
  const filterLocation = useSelector(selectFilterLocation);
  const investmentValue = useSelector(selectInvestmentValue);
  const sharePrice = useSelector(selectSharePrice);
  const anualYield = useSelector(selectYield);

  return {
    auth,
    allObjects,
    objectsForPage,
    objectById,
    isLoading,
    error,
    favoriteObjects,
    filterLocation,
    investmentValue,
    sharePrice,
    anualYield,
  };
};

