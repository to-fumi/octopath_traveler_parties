"use client"

import React from 'react'
import TraditionalEnemies from '@/dashboard/TraditionalEnemies'

export default function Home() {
  return (
    <main>
      <p className="mainTitle">ボス一覧</p>
      <TraditionalEnemies/>
    </main>
  )
}
