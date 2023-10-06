'use client'

import { Movimentation } from "../types/MovimentationType";
import React, { Dispatch, createContext, useState } from 'react';

type ListContextType = {
  movimentations: Movimentation[],
  setMovimentations: Dispatch<React.SetStateAction<Movimentation[]>>,
}

export const MovimentationContext = createContext<ListContextType>({} as ListContextType);

export default function MovimentationProvider({ children }: { children: React.ReactNode }) {
  const [movimentations, setMovimentations] = useState<Movimentation[]>([]);

  return (
    <MovimentationContext.Provider value={{ movimentations, setMovimentations }}>
      {children}
    </MovimentationContext.Provider>
  )
}
