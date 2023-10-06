import { MovimentationContext } from '@/context/Context';
import { Container, RemoveButton, Entrada, Saida, ViewMore } from '@/styled/Table';
import Link from 'next/link';
import React, { useContext } from 'react'

export default function Table() {
  const ctx = useContext(MovimentationContext);

  const currentBr = (n: number) => {
    return parseFloat(n.toFixed(2)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  return (
    <Container>
      {ctx?.movimentations &&
        <table>
          <thead>
            <tr>
              <th>Valor</th>
              <th>Título</th>
              <th>Tipo</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ctx?.movimentations.map((movimentation) => {
              return (
                <tr key={movimentation.id}>
                  <td>{currentBr(movimentation.value)}</td>
                  <td>{movimentation.title}</td>
                  <td>{movimentation.entrada ? <Entrada>Entrada</Entrada> : <Saida>Saída</Saida>}</td>
                  <td>{movimentation.date}</td>
                  <td>
                    <RemoveButton 
                      onClick={() => 
                        ctx?.setMovimentations(ctx.movimentations.filter((item) => 
                        item.id !== movimentation.id))
                      }
                    >Remover</RemoveButton>
                    <ViewMore>
                      <Link href={`/view/${movimentation.entrada}-${movimentation.id}`} style={{ textDecoration: 'none', color: '#fff' }}>Ver mais</Link>
                    </ViewMore>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    </Container>
  )
}