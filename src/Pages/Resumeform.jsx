import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";

const ResumeForm=() => {
    const [resumeData, setResumeData] = useState({
  name: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  summary: "",
  education: "",
  skills: "",
  experiences: []
});
    const[experiences, setExperiences]= useState([
        {company:"", role:"", duration:"", description:""}
    ]); 
    const handleChange = (field , value) => {
        setResumeData((prev)=> ({...prev, [field]:value}));
    };


const handleExperineceChange = (index, field, value)=>{
        const updated = [...experiences];
        updated[index][field]=value;
        setExperiences(updated);
        setResumeData((prev)=>({...prev, experiences:updated}));
    };

    return(
        <Box p={6} bg="black" color="white" >
            <VStack spacing={4} align="flex-start" maxW="350px" w="100%">
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                    placeholder="name"
                    value={resumeData.name}
                    onChange={(e)=>handleChange("name",e.target.value)}
                    />
                </FormControl>

                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                    placeholder="email"
                    value={resumeData.email}
                    onChange={(e)=>handleChange("email",e.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input
                    placeholder="+1 1234567890"
                    value={resumeData.phone}
                    onChange={(e)=>handleChange("phone",e.target.value)}
                    />
                </FormControl>

                
                <FormControl>
                    <FormLabel>LinkedIn</FormLabel>
                    <Input
                    placeholder="linkedIn.com/in/name"
                    value={resumeData.linkedin}
                    onChange={(e)=>handleChange("linkedin",e.target.value)}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Github</FormLabel>
                    <Input
                    placeholder="linkedIn.com/in/name"
                    value={resumeData.github}
                    onChange={(e)=>handleChange("github",e.target.value)}
                    />
                </FormControl>
                    {/*summary*/}
                 <FormControl>
                    <FormLabel>Summary</FormLabel>
                    <Input
                    placeholder="Write a shot carrer summary"
                    value={resumeData.github}
                    onChange={(e)=>handleChange("github",e.target.value)}
                    />
                </FormControl>

                {/*Experience*/ }

                <FormLabel>Experience</FormLabel>
                    {experiences.map((exp, index) => (
                    <VStack key={index} spacing={3} align="flex-start" w="100%">
                        <FormControl>
                        <FormLabel>Company</FormLabel>
                        <Input
                            value={exp.company}
                            onChange={(e) =>
                            handleExperineceChange(index, "company", e.target.value)
                            }
                        />
                        </FormControl>

                        <FormControl>
                        <FormLabel>Role</FormLabel>
                        <Input
                            value={exp.role}
                            onChange={(e) =>
                            handleExperineceChange(index, "role", e.target.value)
                            }
                        />
                        </FormControl>

                        <FormControl>
                        <FormLabel>Duration</FormLabel>
                        <Input
                            value={exp.duration}
                            onChange={(e) =>
                            handleExperineceChange(index, "duration", e.target.value)
                            }
                        />
                        </FormControl>

                        <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input
                            value={exp.description}
                            onChange={(e) =>
                           handleExperineceChange(index, "description", e.target.value)
                            }
                        />
                        </FormControl>

                        <IconButton
                        icon={<DeleteIcon />}
                        colorScheme="red"
                        size="sm"
                        onClick={() =>
                            setExperiences(experiences.filter((_, i) => i !== index))
                        }
                        />
                    </VStack>
                    ))}
                <Button
                leftIcon={<AddIcon />}
                onClick={()=>
                    setExperiences([
                    ...experiences,
                {company:"", role:"", duration:"",description:""}
                    ])
                }>Add Experience 
                </Button>
                
                <FormControl>
                    <FormLabel>Education</FormLabel>
                    <Input
                        value={resumeData.education}
                        onChange={(e)=> handleChange("education",e.target.value)} />
                </FormControl>
 
                <FormControl>
                    <FormLabel>Skills (comma seperated)</FormLabel>
                    <Input
                        value={resumeData.education}
                        onChange={(e)=> handleExperineceChange("education",e.target.value)} />
                </FormControl>

                   <FormControl>
                            <FormLabel>Skills (comma separated)</FormLabel>
                             <Input
                             placeholder="React, JavaScript, Node.js"
                             value={resumeData.skills}
                             onChange={(e) => handleChange("skills", e.target.value)}/>
                    </FormControl>

                       <Button colorScheme="blue" onClick={() => console.log(resumeData)}>
                        Save & Preview
                        </Button>
            </VStack>
        </Box>
    )
}
export default ResumeForm;

