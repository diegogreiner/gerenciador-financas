'use client'

import { ButtonBack, Container } from '@/styled/NotFound'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <Container>
      <h1>Essa página não existe {`:(`}</h1>
      <ButtonBack>
        <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>Voltar para Página inicial
        </Link>
      </ButtonBack>
    </Container>
  )
}