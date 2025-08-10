import{Box,Heading,Text,SimpleGrid,VStack} from "@chakra-ui/react"

const features=[
    {
        title:"Live preview",
        description:
        "See your resume update instantly as you edit. Make changes with confidence and precision.All changes are done according to the choosen templates by you.",
    },
    {
        title: "Custom Theming",
        description:
      "Choose from a variety of styles and themes to make your resume stand out.ATS friendly resume templates so that you are passing the initial screening first.",
    },
     {
    title: "Export as PDF",
    description:
      "Easily download a professional-quality PDF of your resume in one click."
  }
];

const FeatureSelection = () => {
    return(
        <Box  bg="gray.900" color="white" py={16} px={8} >
        <SimpleGrid columns={[1,3]} spacing={10} maxW="1200px" mx="auto">
            {features.map((feature,index)=>(
                <VStack key={index} align="flex-start" spacing={3}>
                    <Heading size="md">{feature.title}</Heading>
                    <Text color="gray.400">{feature.description}</Text>
                </VStack>
            ))}
        </SimpleGrid>
        </Box>
    )
}

export default FeatureSelection;