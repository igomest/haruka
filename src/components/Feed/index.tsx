import { Avatar, Flex, Heading, Tag } from "@chakra-ui/react"
import { FeedProps } from "../../interfaces/propsTypes"
import { Post } from "../Post"

export const Feed = ({ isExplore }: FeedProps) => {
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
    ) : (
        <Flex
            flexDirection="column"
            gap="1rem"
            width="100%"
            position="sticky"
            top="5.4rem"
            height="max-content"
        >
            <Flex
                gap="1rem"
                width="100%"
                flexWrap="wrap"
            >
                <Tag>Gaming</Tag>
                <Tag>Programming</Tag>
                <Tag>Movies</Tag>
                <Tag>Music</Tag>
                <Tag>Anime</Tag>
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