import { onSnapshot, orderBy, query, where, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../Config/Firebase";
import useGetUserInfo from "./useGetUserInfo";

export default function useGetTransaction() {
  const { userID } = useGetUserInfo();
  const transactionCollectionRef = collection(db, "transactions");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransaction = async () => {
      let unsubscribe;
      try {
        const queryTransaction = query(
          transactionCollectionRef,
          where("userID", "==", userID),
          orderBy("createdAt")
        );
        unsubscribe = onSnapshot(queryTransaction, (snapshot) => {
          let docs = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            const id = doc.id;
            docs.push({ ...data, id });
          });
          setTransactions(docs);
        });
      } catch (error) {
        console.log(error);
      }
      return () => unsubscribe();
    };

    getTransaction();
  }, [userID, transactionCollectionRef]);

  return { transactions };
}
