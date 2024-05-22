import { Box, Container, Flex, Heading, Text, VStack, Image, Link, SimpleGrid, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Image src="/images/featured-product.jpg" alt="Featured Product" mx="auto" mb={4} />
        <Text fontSize="lg">Check out our latest deals and promotions!</Text>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Heading size="xl" textAlign="center" mb={10}>Our Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box bg="white" p={5} shadow="md" borderWidth="1px">
            <Image src="/images/product1.jpg" alt="Product 1" mb={4} />
            <Heading size="md" mb={2}>Product 1</Heading>
            <Text>$299.99</Text>
          </Box>
          <Box bg="white" p={5} shadow="md" borderWidth="1px">
            <Image src="/images/product2.jpg" alt="Product 2" mb={4} />
            <Heading size="md" mb={2}>Product 2</Heading>
            <Text>$399.99</Text>
          </Box>
          <Box bg="white" p={5} shadow="md" borderWidth="1px">
            <Image src="/images/product3.jpg" alt="Product 3" mb={4} />
            <Heading size="md" mb={2}>Product 3</Heading>
            <Text>$499.99</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact us: info@electroshop.com</Text>
          <HStack spacing={4}>
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;