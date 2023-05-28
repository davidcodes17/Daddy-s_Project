import { Box ,Checkbox} from '@chakra-ui/react'
import React from 'react'

const Checkboxx = () => {
  return (
    <Box>
        <Checkbox defaultChecked bg={'blue.400'} colorScheme={'white'} p={1} borderRadius={5} fontSize={10}></Checkbox>
    </Box>
  )
}

const colors = {
  '#B305FF':'color one',
  '#FFFFFF' : 'color two'
}

export default Checkboxx