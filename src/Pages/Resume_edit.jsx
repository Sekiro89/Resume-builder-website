import { Box, Heading, Button, VStack, HStack, Text, SimpleGrid, Image } from "@chakra-ui/react";
import { AddIcon, DownloadIcon, TimeIcon } from "@chakra-ui/icons";

const Dashboard = () => {
  // Placeholder history data
  const history = [
    { id: 1, title: "Frontend Developer Resume", lastEdited: "2 days ago", img: "/templates/template1.jpeg" },
    { id: 2, title: "UI/UX Designer Resume", lastEdited: "5 days ago", img: "/templates/template2.jpeg" },
    { id: 3, title: "Backend Engineer Resume", lastEdited: "1 week ago", img: "/templates/template3.jpeg" },
  ];

  return (
    <Box bg="black" color="white" minH="100vh" px={8} py={10}>
      <Heading size="xl" mb={8}>
        Dashboard
      </Heading>

      {/* Action Buttons */}
      <HStack spacing={4} mb={10}>
        <Button leftIcon={<AddIcon />} colorScheme="teal">
          Create New Resume
        </Button>
        <Button leftIcon={<DownloadIcon />} colorScheme="blue">
          Import Resume
        </Button>
      </HStack>

      {/* History Section */}
      <Heading size="lg" mb={4}>
        Recent Activity
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {history.map((item) => (
          <Box
            key={item.id}
            bg="gray.900"
            borderRadius="md"
            overflow="hidden"
            shadow="md"
            _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
          >
            <Image src={item.img} alt={item.title} h="200px" w="full" objectFit="cover" />
            <Box p={4}>
              <Heading size="md" mb={2}>
                {item.title}
              </Heading>
              <HStack>
                <TimeIcon color="gray.400" />
                <Text fontSize="sm" color="gray.400">
                  Last edited {item.lastEdited}
                </Text>
              </HStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;

