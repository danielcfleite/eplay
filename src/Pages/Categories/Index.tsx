import { ProductsList } from '../../components/ProductsList'
import { Game } from '../../models/Game'
import re4 from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: '',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$250,00'],
    image: `${re4}`
  },
  {
    id: 2,
    category: 'Ação',
    description: '',
    title: 'Resident Evil 4',
    system: 'ps4',
    infos: ['5%', 'R$290,00'],
    image: `${re4}`
  },
  {
    id: 3,
    category: 'Ação',
    description: '',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: [],
    image: `${re4}`
  },
  {
    id: 4,
    category: 'Ação',
    description: '',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: [],
    image: `${re4}`
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: '',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: `${diablo}`
  },
  {
    id: 6,
    category: 'RPG',
    description: '',
    title: 'zelda',
    system: 'Windows',
    infos: ['17/05'],
    image: `${zelda}`
  },
  {
    id: 7,
    category: 'RPG',
    description: '',
    title: 'starWars',
    system: 'Windows',
    infos: ['17/05'],
    image: `${starWars}`
  },
  {
    id: 8,
    category: 'RPG',
    description: '',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: `${diablo}`
  }
]

export const Categories = () => {
  return (
    <>
      <ProductsList title="RPG" background="gray" games={promocoes} />
      <ProductsList title="Ação" background="black" games={emBreve} />
      <ProductsList title="Aventura" background="gray" games={emBreve} />
      <ProductsList title="FPS" background="black" games={emBreve} />
    </>
  )
}
