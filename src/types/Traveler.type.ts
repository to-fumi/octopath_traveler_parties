export interface Traveler {
  id: string,
  name: string,
  job: string,
  type: string,
  icon: string,
  buttleAbility: [
    {
      name: string,
      description: string,
    },
  ],
  supportAbility: [
    {
      name: string,
      description: string,
      torch: boolean | undefined,
    },
  ],
  specialParams: [
    {
      name: string,
      description: string,
    },
  ],
  specialWeapon: [
    {
      name: string,
      description: string,
      ex: boolean | undefined,
    },
  ]
}