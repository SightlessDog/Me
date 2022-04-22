import * as React from 'react';
import { collection, query, getDocs} from 'firebase/firestore'

import { projectFirestore } from '../../firebase/config';


const useFirestore = (col) => {
  let snaps = [];

  React.useEffect(async () => {
    const unsub = query(collection(projectFirestore, col))

    const querySnapshot = await getDocs(unsub);

    querySnapshot.forEach(doc => snaps.push(doc.data()))

    return () => querySnapshot();
  }, [collection]);

  return { snaps };
};

export default useFirestore;
