import { Container, VStack, Heading, Text, Box, Button, HStack, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [jobs, setJobs] = useState([
    { title: "Software Engineer", company: "Tech Corp", location: "New York, NY", type: "Full-time" },
    { title: "Product Manager", company: "Business Inc.", location: "San Francisco, CA", type: "Part-time" },
    { title: "Graphic Designer", company: "Design Studio", location: "Remote", type: "Contract" },
  ]);

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl">Job Listings</Heading>
        <Box width="100%">
          <HStack spacing={4} mb={4}>
            <Input placeholder="Job title" />
            <Input placeholder="Location" />
            <Select placeholder="Job type">
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
            </Select>
            <Button colorScheme="blue">Search</Button>
          </HStack>
          {jobs.map((job, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
              <Heading fontSize="xl">{job.title}</Heading>
              <Text mt={4}>{job.company}</Text>
              <Text>{job.location}</Text>
              <Text>{job.type}</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;