import { API_ROUTES } from '../constants';

type TPostOptions = {
  page?: string; // current page
  per_page?: string; // posts per page; '-1' - for get all
};

type TGetAnimals = (options: TPostOptions | undefined) => string;

export const getAnimals: TGetAnimals = (options) => {
  const searchParams = new URLSearchParams(
    typeof options === 'object' ? options : {}
  );

  // If empty search parameters
  if (!searchParams.toString()) {
    return API_ROUTES.ANIMALS;
  }

  return `${API_ROUTES.ANIMALS}?${searchParams}`;
};

