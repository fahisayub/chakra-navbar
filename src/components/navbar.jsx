import { Button, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

const navbar = () => {
  const Navlink = [
    { name: 'Inspiration' },
    { name: 'Find Work' },
    { name: 'Learn Design' },
    { name: 'Hire Designer' },
  ];
  return (
    <Flex padding="15px" justifyContent="space-between" bg='white' color='black'>
      <Flex width="40%" justifyContent="space-between" border='1px solid white'>
        <Text fontSize="20px" fontWeight="bold">
          Logo
        </Text>
        <Flex width="90%" justify="space-between" border='1px solid white' color='gray' >
          {Navlink.map(({ name }, i) => {
            return <Link key={i} _hover={{
                textDecoration:'none',
                textColor:'black'}} _active={{border:'2px solid lightblue'}}>{name}</Link>;
          })}
        </Flex>
      </Flex>
      <Flex width="10%">
          <Button _hover={{textDecoration:"underline"}}>Sign In</Button>
        <Button   bgColor='pink'  _hover={{
               
                bgColor:'lightpink'}} _active={{border:'2px solid lightblue'}}>SignUp</Button>
        
      </Flex>
    </Flex>
  );
};

export default navbar;
