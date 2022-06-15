import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import styles from 'styles/components/navbar/navbar.module.scss'

export const Navbar = () => {
  const { theme } = useTheme()
  return (
    <div
      className={styles.navbar}
      style={{ backgroundColor: theme?.colors.gray900.value }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icon"
        width={70}
        height={70}
      />
      <Text color="white" h1>
        P
      </Text>
      <Text color="white" h2>
        ókemon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white">Favoritos</Text>
    </div>
  )
}
