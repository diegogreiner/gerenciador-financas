import { Container, ContainerButton } from '@/styled/Buttons'
import Link from 'next/link'
import React from 'react'

export default function Buttons() {
  return (
    <>
      <Container>
        <h2>Table:</h2>
        <ContainerButton>
          <div>
            <Link href="/add/entrada" style={{ color: 'white', textDecoration: 'none' }}>Adicionar Entrada</Link>
          </div>
          <div>
            <Link href="/add/saida" style={{ color: 'white', textDecoration: 'none' }}>Adicionar Saída</Link>
          </div>
        </ContainerButton>
      </Container> 
    </>
  )
}