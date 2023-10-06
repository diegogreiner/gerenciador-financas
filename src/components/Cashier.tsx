'use client'

import React, { useContext, useState, useEffect } from 'react';
import { MovimentationContext } from '../context/Context';
import { Container } from '@/styled/Cashier';
import { Entrada, Saida } from '@/styled/Table';

export default function Cashier() {
  const ctx = useContext(MovimentationContext);

  const movimentationValue = [
    { title: 'Entrada', entrada: true },
    { title: 'Saída', entrada: false },
    { title: 'Total', entrada: undefined },
  ];

  const currentBr = (n: number) => {
    return parseFloat(n.toFixed(2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  let totalEntrada = 0;
  let totalSaida = 0;

  ctx?.movimentations.forEach((movimentation) => {
    if (movimentation.entrada === true) {
      totalEntrada += movimentation.value;
    } else if (movimentation.entrada === false) {
      totalSaida += movimentation.value;
    }
  });

  return (
    <Container>
      {movimentationValue.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <div>
            <p>
              {
                item.title === 'Entrada' ? currentBr(totalEntrada) : 
                item.title === 'Saída' ? currentBr(totalSaida) : 
                (totalEntrada - totalSaida) > 0 ? <Entrada>{currentBr(totalEntrada - totalSaida)}</Entrada> : 
                <Saida>{currentBr(totalSaida - totalEntrada)}</Saida>}
            </p>
          </div>
        </div>
      ))}
    </Container>
  );
};