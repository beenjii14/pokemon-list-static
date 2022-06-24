import Image from 'next/image'
import NextLink from 'next/link'
import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
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
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h1>
            P
          </Text>
          <Text color="white" h2>
            ókemon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href={'/favorites'} passHref>
        <Link>
          <Text color="white" css={{ cursor: 'pointer' }}>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  )
}
