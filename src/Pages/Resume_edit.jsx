import { Box, SimpleGrid, Text, Icon, Image } from "@chakra-ui/react";
import { AddIcon, DownloadIcon } from "@chakra-ui/icons";
import template1 from "../templates/Loginpageimg.jpeg"; // adjust path
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  
  const navigate = useNavigate();

  return (
    <Box p={8} bg="black" minH="100vh" color="white">
      <Text fontSize="5xl" fontWeight="bold" mb={6}>
        Resumes
      </Text>

      {/* Grid Layout */}
      <SimpleGrid columns={{ base: 0, md: 3 }}  minChildWidth="280px" spacing="20px"  >
        
        {/* Create New Resume */}
        <Box
          bg="gray.900"
          borderRadius="xl"
          p={6}
          h="350px"
          maxW="280px"
          display="flex"
          flexDir="column"
          alignItems="center"
          cursor="pointer"
          _hover={{ bg: "gray.700" }}
          onClick={() => navigate("/Resumeform")}
        >
          <Box flex="1" display="flex" alignItems="center" justifyContent="center">
            <Icon as={AddIcon} boxSize={10} />
          </Box>
          <Box mt="auto" textAlign="center">
            <Text fontWeight="bold">Create a new resume</Text>
            <Text fontSize="sm" color="gray.400">
              Start building from scratch
            </Text>
          </Box>
        </Box>

        {/* Import Resume */}
        <Box
          bg="gray.900"
          borderRadius="xl"
          p={6}
          h="350px"
          maxW="280px"
          display="flex"
          flexDir="column"
          alignItems="center"
          cursor="pointer"
          _hover={{ bg: "gray.800" }}
        >
          <Box flex="1" display="flex" alignItems="center" justifyContent="center">
            <Icon as={DownloadIcon} boxSize={10} />
          </Box>
          <Box mt="auto" textAlign="center">
            <Text fontWeight="bold">Import an existing resume</Text>
            <Text fontSize="sm" color="gray.400">
              LinkedIn, JSON Resume, etc.
            </Text>
          </Box>
        </Box>

        {/* Resume Preview */}
        <Box
          bg="gray.800"
          borderRadius="xl"
          overflow="hidden"
          cursor="pointer"
          h="350px"
          maxW="280px"
          display="flex"
          flexDir="column"
          _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
        >
          {/* Image should take available space but leave room for footer */}
          <Box flex="1">
            <Image
              src={template1}
              alt="Resume Preview"
              objectfit="cover"
              w="100%"
              h="100%"
            />
          </Box>
          {/* Footer info */}
          <Box p={3} bg="blackAlpha.700">
            <Text fontWeight="bold">Front-end Dev</Text>
            <Text fontSize="sm" color="gray.400">
              Last updated 12 days ago
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
