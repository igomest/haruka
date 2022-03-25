import { useEffect } from "react"

import { Grid } from "@chakra-ui/react"
import { Navbar } from "../../components/Navbar"
import { RightSidebar } from "../../components/RightSidebar"
import { Feed } from "../../components/Feed"
import { LeftSidebar } from "../../components/LeftSidebar"


export const Explore = () => {
    useEffect(() => {
        document.title = "Haruka - Explore"
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
                    isExplore={true}
                    isLibrary={false}
                    isYourPosts={false}
                    isSearch={false}
                    isProfile={false}
                    isFollower={false}
                />

                <LeftSidebar />
            </Grid>
        </>
    )
}