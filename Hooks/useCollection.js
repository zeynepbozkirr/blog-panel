import { useState, useEffect } from "react";

import { db } from "../config/config";

import { collection, onSnapshot } from "firebase/firestore";

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      setDocuments(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  return { documents };
};
