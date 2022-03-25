import { useEffect } from "react"

import { Grid } from "@chakra-ui/react"
import { Navbar } from "../../components/Navbar"
import { RightSidebar } from "../../components/RightSidebar"
import { Feed } from "../../components/Feed"
import { LeftSidebar } from "../../components/LeftSidebar"



export const Library = () => {
    useEffect(() => {
        document.title = "Haruka - Library"
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
                    isLibrary={true}
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