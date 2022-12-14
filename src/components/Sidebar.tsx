import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import {RiDashboardLine, RiContactsLine, RiInputMethodFill, RiGitMergeLine} from 'react-icons/ri'


export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.300" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Dashboard</Text>
            </Link>
            <Link display="flex" alignItems="center" >
              <Icon as={RiContactsLine} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Usuários</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.300" fontSize="small">
            Automação
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center" >
              <Icon as={RiInputMethodFill} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Formulários</Text>
            </Link>
            <Link display="flex" alignItems="center" >
              <Icon as={RiGitMergeLine} fontSize="20"/>
              <Text ml="4" fontWeight="medium">Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
