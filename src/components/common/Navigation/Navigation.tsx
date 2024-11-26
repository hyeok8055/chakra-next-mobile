'use client'
import {
  Box,
} from '@chakra-ui/react'
import { BottomNav } from './BottomNav'

export const Navigation = () => {

  return (
    <>
    <Box display={['unset', 'unset', 'none']}>
        <BottomNav />
    </Box>
    </>
  )
}

