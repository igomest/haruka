import { Avatar, Divider, Flex, Heading, Tag, Tooltip } from "@chakra-ui/react"
import { FeedProps } from "../../interfaces/propsTypes"
import { Post } from "../Post"

export const Feed = ({ isExplore, isLibrary, isYourPosts, isSearch, isProfile, isFollower }: FeedProps) => {
    return isExplore ? (
        <Flex
            flexDirection="column"
            gap="1rem"
            width="100%"
            position="sticky"
            top="5.4rem"
            height="max-content"
        >
            <Heading as="h4" size="md">
                Trending posts
            </Heading>
            <Post />
            <Post />
            <Post />
            <Post />
        </Flex>

    ) : isLibrary ? (
        <Flex
            flexDirection="column"
            gap="1rem"
            width="100%"
            position="sticky"
            top="5.4rem"
            height="max-content"
        >
            <Heading as="h4" size="md">
                Liked posts
            </Heading>

            <Post />
            <Post />
            <Divider />

            <Heading as="h4" size="md">
                Saved posts
            </Heading>

            <Post />
            <Post />
        </Flex>

    ) : isYourPosts ? (
        <Flex
            flexDirection="column"
            gap="1rem"
            width="100%"
            position="sticky"
            top="5.4rem"
            height="max-content"
        >
            <Heading as="h4" size="md">
                Your shitty posts
            </Heading>
            <Post />
            <Post />
            <Post />
            <Post />
        </Flex>

    ) : isSearch ? (
        <Flex
            flexDirection="column"
            gap="1rem"
            width="100%"
            position="sticky"
            top="5.4rem"
            height="max-content"
        >
            <Heading as="h4" size="md">
                Search results
            </Heading>

            <Post />
            <Post />
            <Post />
            <Post />
        </Flex>

    ) : isProfile ? (
        <Flex
            flexDirection="column"
            gap="1rem"
            width="100%"
            position="sticky"
            top="5.4rem"
            height="max-content"
        >
            <Heading as="h4" size="md">
                Idiot shitty posts
            </Heading>
            <Post />
            <Post />
            <Post />
            <Post />
        </Flex>

    ) : isFollower ? (
        <Flex
            flexDirection="column"
            gap="1rem"
            width="100%"
            position="sticky"
            top="5.4rem"
            height="max-content"
        >
            <Flex gap="2rem" alignItems="center" flexWrap="wrap" marginBottom="1rem">
                <Tooltip label="Your mom" openDelay={400}>
                    <Avatar
                        width="16"
                        height="16"
                        cursor="pointer"
                    />
                </Tooltip>

                <Tooltip label="Your uncle" openDelay={400}>
                    <Avatar
                        width="16"
                        height="16"
                        cursor="pointer"
                    />
                </Tooltip>

                <Tooltip label="Your dad" openDelay={400}>
                    <Avatar
                        width="16"
                        height="16"
                        cursor="pointer"
                    />
                </Tooltip>

                <Tooltip label="Branu" openDelay={400}>
                    <Avatar
                        width="16"
                        height="16"
                        cursor="pointer"
                    />
                </Tooltip>

                <Tooltip label="Tim" openDelay={400}>
                    <Avatar
                        width="16"
                        height="16"
                        cursor="pointer"
                    />
                </Tooltip>

                <Tooltip label="Tim mom" openDelay={400}>
                    <Avatar
                        width="16"
                        height="16"
                        cursor="pointer"
                    />
                </Tooltip>
            </Flex>

            <Heading as="h4" size="md">
                Your followers post
            </Heading>

            <Post />
            <Post />
            <Post />
            <Post />
        </Flex>
    ) : (
        <Flex
            flexDirection="column"
            gap="1rem"
            width="100%"
            position="sticky"
            top="5.4rem"
            height="max-content"
        >
            <Flex gap="1rem" width="100%" flexWrap="wrap">
                <Tag>Gaming</Tag>
                <Tag>Programming</Tag>
                <Tag>Movies</Tag>
                <Tag>Music</Tag>
                <Tag>Anime</Tag>
                <Tag>Po*n</Tag>
                <Tag>YourMom</Tag>
                <Tag>Idk</Tag>
                <Tag>What</Tag>
                <Tag>Else</Tag>
                <Tag>To</Tag>
                <Tag>Write</Tag>
                <Tag>Lol</Tag>
            </Flex>

            <Post />
            <Post />
            <Post />
            <Post />
        </Flex>
    )

}