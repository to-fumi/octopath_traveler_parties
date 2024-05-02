"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { EnemyData, EnemyGroupByLevel } from '@/types/Enemy.type'

type TabIdentifier = 1 | 25 | 50 | 75;

const url = 'http://localhost:3000/api'
const fetcher = (url: string, init?: RequestInit) => fetch(url, init)
  .then(res => res.json())

export default function TraditionalEnemies() {
  const [activeTab, setActiveTab] = useState<TabIdentifier>(1);
  const levels: TabIdentifier[] = [1, 25, 50, 75];

  const {data, error, isLoading} = useSWR(url, fetcher)

  const switchTab = (newTab: TabIdentifier) => {
    setActiveTab(newTab);
  };

  return (
    <>
      <div className="border-b border-slate-200">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
          { levels.map((level) => (
            <li key={ level } className="me-2" role="presentation">
              <button
                className={ `inline-block p-4 border-b-2 rounded-t-lg ${activeTab === level ? 'text-slate-700 border-slate-700' : 'hover:text-slate-400 hover:border-slate-400'}` }
                onClick={ () => switchTab(level) }
                role="tab"
                aria-selected={ activeTab === level }
              >
                { `Lv.${level}~` }
              </button>
            </li>
          )) }
        </ul>
      </div>
      <div id="level-tab-content" className="pt-4">
        { levels.map((level) => (
          <div
            key={ level }
            className={ `p-8 grid gap-8 grid-cols-3 rounded-lg ${activeTab === level ? 'bg-slate-100' : 'hidden bg-slate-50'}` }
            role="tabpanel"
            aria-labelledby={ `${level}-tab` }
          >
            {error ? 'ERROR' : isLoading ? 'loading...' :
              data.enemyGroup.map((enemyGroup: EnemyGroupByLevel) => 
                enemyGroup.level == level 
                ? enemyGroup.enemies.map((enemy: EnemyData) =>
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
                ) : ""
              )
            }
            </div>
        )) }
      </div>
    </>
  )
}