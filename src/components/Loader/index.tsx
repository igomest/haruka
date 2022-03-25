import { useEffect } from "react"
import { Flex, Image } from "@chakra-ui/react"
import loader from "../../assets/loader.gif"

const Loader = () => {
    useEffect(() => {
        document.title = "Haruka - Loading"
    }, [])


    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100vw"
            background="white"
        >
            <Image
                src={loader}
                alt="Loading"
                height="30%"
                width="30%"
                objectFit="cover"
            />
        </Flex>
    )
}

export default Loader