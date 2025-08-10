import {Box,Flex,Heading,Spacer,Button,HStack,Link} from "@chakra-ui/react"
import  {useNavigate} from "react-router-dom"

export default function Navbar(){
    const navigate=useNavigate();

    return(
        <Box bg="black" color="white" px={9} py={8} boxShadow="md">
            <Flex align="center">
                <Heading size="md" cursor="pointer" onClick={()=> navigate("/")}>
                    Resume Builder
                </Heading>

                <Spacer />

                <HStack spacing={7}>
                    <Link onClick={()=> navigate("/dashboard")}>Dashboard</Link>
                    <Link onClick={()=> navigate("/Login")}>Login</Link>
                    <Button
                    bg="white"
                    colour="black"
                    _hover={{bg:"gray:800"}}
                    onClick={()=> navigate("/editor")}
                    >
                        Build My Resume →
                    </Button>
                </HStack>
            </Flex>
        </Box>
    )
}