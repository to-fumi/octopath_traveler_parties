"use client"

import React, { useState } from "react"
import GameBoardEnemies from "@/app/dashboard/GameBoardEnemies/page"
import HighDifficultyEnemies from "@/app/dashboard/HighDifficultyEnemies/page"
import RushEnemies from "@/app/dashboard/RushEnemies/page"
import TowerOfChallengesEnemies from "@/app/dashboard/TowerOfChallengesEnemies/page"
import TraditionalEnemies from "@/app/dashboard/TraditionalEnemies/page"

type TabIdentifier = "宿敵の写記" | "波闘の写記" | "高難度NPC" | "試練の塔" | "遊技盤"

export default function EnemyBoard() {
  const [activeTab, setActiveTab] = useState<TabIdentifier>("宿敵の写記")
  const enemyGenre: TabIdentifier[] = ["宿敵の写記", "波闘の写記", "高難度NPC", "試練の塔", "遊技盤"]

  const switchTab = (newTab: TabIdentifier) => {
    setActiveTab(newTab)
  }

  return (
    <>
      <p className="mainTitle">ボス一覧</p>
      <div className="border-b border-slate-200">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
          { enemyGenre.map((genre) => (
            <li key={ genre } className="me-2" role="presentation">
              <button
                className={ `inline-block p-4 border-b-2 rounded-t-lg ${activeTab === genre ? 'text-slate-700 border-slate-700' : 'hover:text-slate-400 hover:border-slate-400'}` }
                onClick={ () => switchTab(genre) }
                role="tab"
                aria-selected={ activeTab === genre }
              >
                { `${genre}` }
              </button>
            </li>
          )) }
        </ul>
      </div>
      { activeTab == enemyGenre[0]
        ? <TraditionalEnemies /> : 
        activeTab == enemyGenre[1]
        ? <RushEnemies /> : 
        activeTab == enemyGenre[2]
        ? <HighDifficultyEnemies /> :
        activeTab == enemyGenre[3]
        ? <TowerOfChallengesEnemies /> : 
        activeTab == enemyGenre[4]
        ? <GameBoardEnemies /> : ""
      }
    </>
  )
}