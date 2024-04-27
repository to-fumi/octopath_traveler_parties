"use server"

import { EnemyData, EnemyByLevel } from "@/types/Enemy.type"

export async function GET() {
  const result = await fetch('http://localhost:3000/enemies/enemy.json', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const enemies: EnemyData[] = await result.json()

  const enemiesByLevel: EnemyByLevel = {
    enemyGroup: [
      {
        level: 1,
        enemies: [],
      },
      {
        level: 25,
        enemies: [],
      },
      {
        level: 50,
        enemies: [],
      },
      {
        level: 75,
        enemies: [],
      }
    ]
  }

  enemies.forEach((enemy: EnemyData) => {
    switch (enemy.level) {
      case 1:
        enemiesByLevel.enemyGroup[0].enemies.push(enemy)
        break
      case 25:
        enemiesByLevel.enemyGroup[1].enemies.push(enemy)
        break
      case 50:
        enemiesByLevel.enemyGroup[2].enemies.push(enemy)
        break
      case 75:
        enemiesByLevel.enemyGroup[3].enemies.push(enemy)
        break
      default:
        break
    }
  })

  // const { searchParams } = new URL(request.url)
  // var targetId = searchParams.get('id')

  // //Need to implement error-handling
  // const enemy = enemies.filter((enemy: Enemy) => enemy !== null && enemy.id == targetId )[0]

  //This args can switch to show all or single.
  return new Response(JSON.stringify(enemiesByLevel), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })

  // if this return is data, we can see all the enemies.
  // if this return is enemy, we can see single enemy.
}