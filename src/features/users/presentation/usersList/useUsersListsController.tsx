import { useState } from 'react';

const userFilters = { ALL: 0, DISCENTE: 1, DOCENTE: 2 };

export const useUsersListController = () => {
  const [filter, setFilter] = useState(userFilters.ALL);

  const handleChangeFilter = (newValue: number) => {
    setFilter(newValue);
  };

  return { filter, handleChangeFilter };
};
