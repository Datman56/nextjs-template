import {
    Badge,
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Link,
    Text,
    Wrap,
    WrapItem,
  } from "@chakra-ui/react";
  
  import { ExternalLinkIcon, GithubIcon } from "@/components/common/icons";

  
export function DisplayCard(params) {
    const index = params.index;
    const item = params.data;
  
    return (
      <Card
        key={index}
        bg="ui.darker"
        color="ui.neutral"
        textAlign="left"
        direction={{ base: "row", md: "column" }}
      >
        <Box>
          <CardHeader pb={0} mb={4}>
            <Heading size="sm" color="ui.white">
              {item.name}
            </Heading>
          </CardHeader>
          <CardBody py={0}>
            <Wrap gap={1} mb={2}>
              {item.technologies.slice(0, 2).map((item, index) => (
                <WrapItem key={index}>
                  <Badge
                    key={index}
                    fontSize="x-small"
                    fontWeight={500}
                    bg="ui.dark"
                    color="ui.white"
                  >
                    {item}
                  </Badge>
                </WrapItem>
              ))}
              {item.technologies.length >= 3 ? (
                <Badge key={index} fontSize="x-small" fontWeight={500} bg="ui.dark" color="ui.white">
                  ...
                </Badge>
              ) : (
                ""
              )}
            </Wrap>
            <Text fontSize="sm" noOfLines={3}>
              {item.description}
            </Text>
          </CardBody>
          <CardFooter gap={4} justify="end" pt={0} pb={2} mt={4} mb={0}>
            <Link as={Link} href={item.link} _hover={{ color: "ui.white" }}>
              <GithubIcon />
            </Link>
            <Link as={Link} href={item.link} _hover={{ color: "ui.white" }}>
              <ExternalLinkIcon />
            </Link>
          </CardFooter>
        </Box>
      </Card>
    );
  }