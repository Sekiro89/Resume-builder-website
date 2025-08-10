import {Box,Heading,Input,Button,VStack,Text,Link,HStack,Divider,Flex,Image} from "@chakra-ui/react"
import {FaGoogle,FaGithub} from "react-icons/fa"
import Loginpageimg from "../templates/Loginpageimg.jpeg"; 

const Login=()=> {
    return (
         <Flex
            bg="black"
            color="white"
            minH="100vh"
        >
        <Box
        bg="black"
        color="white"
        minH="100vh"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        px={4}
        >
            <Box
            bg="black"
            p={8}
            borderRadius="lg"
            shadow="lg"
            w={{base:"100%", sm:"400px"}}
            >
                <Box>
                <Heading size="lg" mb={6} textAlign="left" whiteSpace="nowrap">
                    Login to resume builder
                </Heading>
                <Text size="sm" color="gray.600">
                    Welcome to resume builder
                </Text>
                </Box>
                <VStack spacing={4} align="stretch">
                    <Text color="white" size="md" textAlign="left">
                        Email
                    </Text>
                    <Input placeholder="Email" type="email" bg="black" border="none"/>
                     <Text color="white" size="md" textAlign="left">
                        Password
                    </Text>
                    <Input placeholder="password" type="password" bg="black" border="none"/>
                    <Button
                    bg="white"
                    color="black"
                    _hover={{bg:"gray.200"}}>
                        Login
                    </Button>
                    <Text fontSize="sm" textAlign="left" color="gray.400">
                        Don’t have an account?{" "}
                        <Link color="ble.400" href="/register">
                        Register
                        </Link>
                    </Text>
                </VStack>
                    <HStack my={6}>
                    <Divider borderColor="gray.600"  align="center"/>
                    <Text fontSize="sm" color="gray.400" whiteSpace="nowrap">
                        or continue with
                    </Text>
                    <Divider borderColor="gray.600" />
                    </HStack>
                     <VStack spacing={4}>
                        <Button
                        w="100%"
                        bg="gray.800"
                        color="white"
                        leftIcon={<FaGithub />}
                        _hover={{ bg: "gray.700" }}
                    >
                        GitHub
                    </Button>
                    <Button
                        w="100%"
                        bg="#4285F4"
                        color="white"
                        leftIcon={<FaGoogle />}
                        _hover={{ bg: "#357ae8" }}
                    >
                        Google
                    </Button>
                    </VStack>
                        </Box>
                    </Box>
                    
            {/* Right Section - Image */}
                    <Box flex="1" display={{ base: "none", md: "block" }}>
                <Image
                    src={Loginpageimg}
                    alt="Login Background"
                    objectFit="cover"
                    w="100%"
                    h="100vh"
                />
            </Box>
                    </Flex>
    )
}

export default Login
