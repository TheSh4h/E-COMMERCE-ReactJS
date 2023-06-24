import { Box, Container, Heading, Text, filter } from "@chakra-ui/react";

function App() {

  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    m: "10px",
    textAlign: "center",
    filter: "blur(2px)",
    ':hover': {
      color: 'black',
      bg: 'blue.200'
    }
  }

  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <Heading my="30px" p="10px">Chakra UI Components</Heading>
      <Text ml="30px">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptatibus.</Text>
      <Text ml="30px" color="blue.500" fontWeight="bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, voluptatibus.</Text>

      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a box</Text>
      </Box>

      <Box sx={boxStyles}>
        Hello, Boyas
      </Box>

    </Container>
  );
}

export default App;
