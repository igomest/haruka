import { useEffect } from "react"

import { Grid } from "@chakra-ui/react"
import { Navbar } from "../../components/Navbar"
import { RightSidebar } from "../../components/RightSidebar"
import { Feed } from "../../components/Feed"
import { ProfileSidebar } from "../../components/ProfileSidebar"


export const Profile = () => {
    useEffect(() => {
        document.title = "Haruka - Idiot"
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
                    isYourPosts={false}
                    isSearch={false}
                    isProfile={true}
                />
                <ProfileSidebar />
            </Grid>
        </>
    )
}