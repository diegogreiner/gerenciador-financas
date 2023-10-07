'use client'

import { useContext } from 'react';
import { MovimentationContext } from '@/context/Context';
import Link from 'next/link';
import { ButtonBack, ButtonEntrada, ContainerForm, ContainerHeader, Container } from '@/styled/Form';
import Cashier from './Cashier';

export default function Movimentation({ id, entrada }: { id: number, entrada: boolean }) {
  const { movimentations } = useContext(MovimentationContext);

  const currentBr = (n: number) => {
    return parseFloat(n.toFixed(2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  return (
    <>
      <Cashier />
      <Container>
        <ContainerHeader>
          <h2>Dados de {entrada ? 'entrada' : 'saída'} do id {id}:</h2>
          <div>
            <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>X</Link>
          </div>
        </ContainerHeader>
        {movimentations.map((movimentation) => (
          movimentation.id === id && entrada === movimentation.entrada &&
          <ContainerForm key={movimentation.id}>
            <label> Título:
              <input type="text" name='title' value={movimentation.title} disabled />
            </label>
            <label> Valor:
              <input type="text" name='value' value={currentBr(movimentation.value)} disabled />
            </label>
            <label>Descrição:
              <textarea name="description" value={movimentation.description} disabled ></textarea>
            </label>
          </ContainerForm>
          ))
        }
        <ButtonBack>
          <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>Voltar</Link>
        </ButtonBack>
      </Container>
    </>
  );
}