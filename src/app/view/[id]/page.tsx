'use client'

import Movimentation from '@/components/Movimentation';
import React, { useEffect, useState } from 'react';

export default function GetParamsId({ params }: { params: { id: string } }) {
  const [newId, setNewId] = useState(0);
  const [entrada, setEntrada] = useState(false);
  const paramsId = params.id.split('-');

  useEffect(() => {
    if (params && params.id) {
      setEntrada(paramsId[0] === 'true' ? true : false)
      setNewId(Number(paramsId[1]))
    }
  }, []);

  return (
    <>
      <Movimentation id={newId} entrada={entrada} />
    </>
  );
}
