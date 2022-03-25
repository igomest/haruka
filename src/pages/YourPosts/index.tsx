import { useEffect } from "react"

import { Grid } from "@chakra-ui/react"
import { Navbar } from "../../components/Navbar"
import { RightSidebar } from "../../components/RightSidebar"
import { Feed } from "../../components/Feed"
import { LeftSidebar } from "../../components/LeftSidebar"


export const YourPosts = () => {
    useEffect(() => {
        document.title = "Haruka - YourPosts"
    }, [])

    return (
        <>
            <Navbar />
            <Grid
                gridTemplateColumns="22vw auto 24vw"
                columnGap="2rem"
                marginLeft="1rem"
                marginRight="1rem"
            >
                <RightSidebar />
                <Feed
                    isExplore={false}
                    isLibrary={false}
                    isYourPosts={true}
                    isSearch={false}
                    isProfile={false}
                    isFollower={false}
                />
                <LeftSidebar />
            </Grid>
        </>
    )
}