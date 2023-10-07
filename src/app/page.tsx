'use client'

import { Home } from "@/components/Home";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  })

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1 style={{ color: '#226F54' }}>Carregando...</h1>
      </div>
    )
  }

  return (
    <Home />
  )
}