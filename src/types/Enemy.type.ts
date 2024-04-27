export interface EnemyData {
  id: string,
  boss: [
    {
      name: string,
      icon: string,
      weakPoint: [
        {
          first: [string],
        },
      ]
    },
  ],
  level: number,
}

export interface EnemyByLevel {
  enemyGroup: [
    {
      level: 1,
      enemies: EnemyData[],
    },
    {
      level: 25,
      enemies: EnemyData[],
    },
    {
      level: 50,
      enemies: EnemyData[],
    },
    {
      level: 75,
      enemies: EnemyData[],
    }
  ]
}

export interface EnemyGroupByLevel {
  level: number,
  enemies: EnemyData[],
}