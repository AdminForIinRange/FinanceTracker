import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModalAction, hideModalAction } from "../features/modal/modalSlice";




export default function useModalControl() {
  const dispatch = useDispatch()
  const {showModal} = useSelector(state => state.modal);

  const ModalOpen = () => {
    dispatch(showModalAction());
  };
  const ModalClose = () => {
    dispatch(hideModalAction());
  };

  return { ModalOpen, ModalClose, showModal };
}
