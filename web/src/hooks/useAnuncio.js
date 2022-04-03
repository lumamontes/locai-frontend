import { useContext } from "react";
import { AnuncioContext } from "../contexts/AnuncioContext";
import React from "react";
export function useAnuncio () {
  const value = useContext(AnuncioContext)
  return value
}