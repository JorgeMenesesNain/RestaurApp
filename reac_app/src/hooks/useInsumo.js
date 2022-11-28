import { useState } from "react";
import { size } from "lodash";
import {
  getInsumoApi,
  addInsumoApi,
  updateInsumoApi,
  deleteInsumoApi,
} from "../api/insumo";
import { useAuth } from "./useAuth";

export function useInsumo() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [insumos, setInsumos] = useState(null);

  const { auth } = useAuth();

  const getInsumos = async () => {
    try {
      setLoading(true);
      const response = await getInsumoApi();
      setLoading(false);
      setInsumos(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const addInsumo = async (data) => {
    try {
      setLoading(true);
      await addInsumoApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const updateInsumo = async (id, data) => {
    try {
      setLoading(true);
      await updateInsumoApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const deleteInsumo = async (id) => {
    try {
      setLoading(true);
      await deleteInsumoApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    loading,
    error,
    insumos,
    getInsumos,
    addInsumo,
    updateInsumo,
    deleteInsumo,
  };
}
