"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { EnemyData, EnemyGroupByLevel } from '@/types/Enemy.type'

const url = 'http://localhost:3000/api'
const fetcher = (url: string, init?: RequestInit) => fetch(url, init)
  .then(res => res.json())

export default function TraditionalEnemies() {

  const {data, error, isLoading} = useSWR(url, fetcher)

  return (
    <>
      <div id="level-tab-content" className="pt-4">
        {error ? 'ERROR' : isLoading ? 'loading...' :
          data.enemyGroup.map((enemyGroup: EnemyGroupByLevel) => 
            enemyGroup.enemies.map((enemy: EnemyData) =>
              <Link href={`/enemy/${enemy.id}`} key={ enemy.id }>
                <div className="px-6 py-4 text-base mb-2 flex justify-center">{enemy.boss[0].name}</div>
                <div className="rounded overflow-hidden shadow-lg">
                  { enemy.boss[0].icon ? (
                    <Image
                      className="object-contain w-full aspect-square"
                      alt="enemy-image"
                      src={enemy.boss[0].icon}
                      width={ 300 }
                      height={ 300 }
                    />
                  ) : (
                    <div className='object-contain aspect-square flex justify-center items-center'>
                      <span className="material-symbols-outlined image-100">no_photography</span>
                    </div>
                  )}
                </div>
              </Link> 
            )
          )
        }
      </div>
    </>
  )
}