import {
    Avatar,
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Tooltip,
    useColorMode,
    IconButton,
    AvatarBadge,
} from "@chakra-ui/react"
import { ImSearch } from "react-icons/im"
import { FaSun, FaMoon, FaUser } from "react-icons/fa"
import { IoMdCreate } from "react-icons/io"

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            p={4}
            position="sticky"
            top={0}
            zIndex="100"
            backgroundColor={colorMode === "light" ? "#ffffff" : "#1a202c"}
        >
            <Flex>
                <Heading
                    color={colorMode === "light" ? "black" : "white"}
                    size="xl"
                    fontFamily="Sansita Swashed"
                >
                    Haruka
                </Heading>
            </Flex>

            <Tooltip label="Search shit" openDelay={400}>
                <InputGroup mx={8} width="50vw">
                    <InputLeftElement
                        pointerEvents="none"
                        children={<ImSearch color="gray.300" />}
                    />

                    <Input type="text" placeholder="Search shit..." variant="filled" />
                </InputGroup>
            </Tooltip>

            {colorMode === "light" ? (
                <Tooltip label="Dark mode" openDelay={400}>
                    <IconButton
                        icon={<FaMoon />}
                        aria-label="Dark mode"
                        onClick={() => {
                            toggleColorMode()
                        }}
                    />
                </Tooltip>
            ) : (
                <Tooltip label="Light mode" openDelay={400}>
                    <IconButton
                        icon={<FaSun />}
                        aria-label="Ligh mode"
                        onClick={() => {
                            toggleColorMode()
                        }}
                    />
                </Tooltip>
            )}

            <Tooltip label="Create shit" openDelay={400}>
                <Button
                    leftIcon={<IoMdCreate />}
                    colorScheme="purple"
                    variant="solid"
                    borderRadius={24}
                    padding={6}
                >
                    Create
                </Button>
            </Tooltip>

            <Tooltip label="Idiot" openDelay={400}>
                <Avatar cursor="pointer" />
            </Tooltip>
        </Flex>
    )
}