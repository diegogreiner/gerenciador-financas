'use client'

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MovimentationContext } from '@/context/Context';
import { ButtonBack, ButtonEntrada, Container, ContainerForm, ContainerHeader } from '@/styled/Form';
import { ParamsAction } from '@/types/ParamsType';
import Link from 'next/link';
import Cashier from '@/components/Cashier';

export default function Form({ params }: { params: ParamsAction }) {
  const { movimentations, setMovimentations } = useContext(MovimentationContext);
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>, entrada: string) => {
    e.preventDefault();
    setMovimentations([
      ...movimentations,
      {
        id: movimentations.length + 1,
        title,
        value: Number(value),
        entrada: entrada === 'entrada' ? true : false,
        date: new Date().toLocaleDateString(),
        description: description,
      },
    ]);
    router.push('/');
  };

  return (
    <>
      <Cashier />
      <Container>
        <ContainerHeader>
          <h2>Insira os dados de {params.action === 'entrada' ? 'entrada' : 'saída'}</h2>
          <div>
            <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>X</Link>
          </div>
        </ContainerHeader>
        <ContainerForm onSubmit={(e) => handleFormSubmit(e, params.action)}>
          <label> Título:
            <input type="text" name='title' placeholder='Insira o título' onChange={e => setTitle(e.target.value)} />
          </label>
          <label> Valor:
            <input type="text" name='value' placeholder='Insira o valor' onChange={e => setValue(e.target.value)} />
          </label>
          <label>Descrição:
            <textarea name="description" placeholder='Insira a descrição' onChange={e => setDescription(e.target.value)}></textarea>
          </label>
          <ButtonEntrada type='submit'>Confirmar</ButtonEntrada>
        </ContainerForm>
        <ButtonBack>
          <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>Voltar</Link>
        </ButtonBack>
      </Container>
    </>
  );
}