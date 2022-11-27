import { useState } from "react";
import { size } from "lodash";
import { getInsumoApi } from "../api/insumo";
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

  return {
    loading,
    error,
    insumos,
    getInsumos,
  };
}
