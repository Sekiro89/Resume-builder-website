import { Box, Text, HStack, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="black" color="gray.400" py={6} mt={16}>
      <Box maxW="1200px" mx="auto" px={8}>
        <HStack justify="space-between" flexWrap="wrap">
          <Text fontSize="sm">
            © {new Date().getFullYear()} Resume Builder. All rights reserved.
          </Text>
          <HStack spacing={4}>
            <Link href="#" _hover={{ color: "white" }}>
              Privacy Policy
            </Link>
            <Link href="#" _hover={{ color: "white" }}>
              Terms of Service
            </Link>
            <Link href="#" _hover={{ color: "white" }}>
              Contact
            </Link>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}
