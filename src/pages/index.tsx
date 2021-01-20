import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

const Index = () => (
  <>
    <NextSeo title='Landing Page' titleTemplate='%s' />
    <SimpleGrid columns={2} minH='100vh'>
      <Box px={20} py={10} bg='#ECF0F4'>
        <Image src='/logo.png' w='40px' h='40px' />
        <Stack mt={8}>
          <Heading fontSize='2xl'>Log In and Learn The Report</Heading>
          <Text color='gray.400'>
            We provide variant data that you can use it in order to get the
            better perfomance at sales
          </Text>
        </Stack>
        <Stack spacing={4} my={8} bg='white' borderRadius='lg' py={4} px={10}>
          <FormControl id='email'>
            <FormLabel>Email Address</FormLabel>
            <Input type='email' />
          </FormControl>
          <FormControl id='email'>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
          </FormControl>
          <FormControl>
            <FormLabel>Account Type</FormLabel>
            <Select placeholder='- Select the type -'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </FormControl>
          <Button colorScheme='blue'>Sign In</Button>
          <Button colorScheme='blue' variant='link'>
            Create New Account
          </Button>
        </Stack>
      </Box>
      <Box d='grid' placeItems='center' bg='#4424A7' minH='100vh'>
        <Box align='center'>
          <Image src='/illustration.png' h='246px' objectFit='cover' />
          <Box maxW='xs' color='white'>
            <Text fontWeight='bold' fontSize='lg'>
              Simple is Key
            </Text>
            <Text color='gray.400'>
              Generate busines model with no hustle and headache
            </Text>
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  </>
)

export default Index
