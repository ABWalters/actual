import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useActions } from './useActions';

export default function useTags() {
  const { getTags } = useActions();

  const tags = useSelector(state => state.queries.tags);

  useEffect(() => {
    if (tags === null) {
      getTags();
    }
  }, []);

  return useSelector(state => state.queries.tags);
}
