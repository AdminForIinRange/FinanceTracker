import { doc, deleteDoc } from "firebase/firestore";

import { db } from "../Config/Firebase";

export default function useRemoveTransactions() {
  const removeTransaction = async (transactionId) => {
    try {
      await deleteDoc(doc(db, "transactions", transactionId));
    } catch (error) {
      console.log(error);
    }
  };

  return { removeTransaction };
}
