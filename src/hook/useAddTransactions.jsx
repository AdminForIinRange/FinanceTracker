import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Config/Firebase";
import useGetUserInfo from "./useGetUserInfo";

export default function useAddTransaction() {
  const { userID } = useGetUserInfo();
  const transactionCollectionRef = collection(db, "transactions");

  const addTransaction = async ({ category, title, amount, depiction, icon }) => {
    try {
      await addDoc(transactionCollectionRef, {
        userID,
        category,
        title,
        amount,
        depiction,
        icon,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error adding transaction: ", error);
    }
  };

  return { addTransaction };
}
