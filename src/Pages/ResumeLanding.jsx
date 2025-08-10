import { Box, Button, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";
import FeaturesSection from "./Featuresection";
import Footer from "./Footer";
import template1 from "../templates/template1.jpeg";
import template2 from "../templates/template2.jpeg";
import template3 from "../templates/template3.jpeg";

const ResumeLanding = () => {
  const navigate = useNavigate();

  // Repeat templates for smooth looping
  const templates = [
    { id: 1, img: template1 },
    { id: 2, img: template2 },
    { id: 3, img: template3 },
    { id: 4, img: template1 },
    { id: 5, img: template2 },
    { id: 6, img: template3 }
  ];

  // Define animation
  const scroll = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  `;

  return (
    <Box bg="black" color="white" minH="100vh">
      {/* Hero Section */}
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={6}
        maxWidth="1400px"
        mx="auto"
      >
        <VStack spacing={6} textAlign="center">
          <Heading size="2xl">Build Your Resume in Minutes</Heading>
          <Text fontSize="lg" color="gray.300" maxW="xl">
            A dynamic resume builder with live preview, theming, and PDF export. Stay in control of your career.
          </Text>
          <Button
            size="lg"
            bg="white"
            color="black"
            onClick={() => navigate("/editor")}
          >
            Build Resume
          </Button>
        </VStack>
      </Box>

      {/* Features Section */}
         <FeaturesSection />

      {/* Templates Section */}
      <Box
        mt={20}
        px={9}
        maxWidth="1400px"
        mx="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left Text */}
        <VStack align="flex-start" spacing={4} maxW="40%">
          <Heading size="xl">Templates</Heading>
          <Text color="gray.400">
            Explore our resume templates and see examples to inspire your own.
            They could also serve as examples to help guide the creation of your next resume.
          </Text>
        </VStack>

        {/* Right Scrolling Templates */}
        <Box overflow="hidden" maxW="60%">
          <Box
            display="flex"
            gap={6}
            animation={`${scroll} 15s linear infinite`}
            w="max-content"
            opacity="90%"
          >
            {templates.map((template) => (
              <Image
                key={template.id}
                src={template.img}
                alt={`Template ${template.id}`}
                borderRadius="md"
                w="300px"
                h="400px"
                objectFit="cover"
                shadow="lg"
              />
            ))}
          </Box>
        </Box>
      </Box>
      {/* Footer */}
    <Footer />
    </Box>
  );
};

export default ResumeLanding;
