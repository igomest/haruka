import { useEffect } from "react"

import { Grid } from "@chakra-ui/react"
import { Navbar } from "../../components/Navbar"
import { RightSidebar } from "../../components/RightSidebar"
import { LeftSidebar } from "../../components/LeftSidebar"
import { Feed } from "../../components/Feed"


export const Home = () => {

    useEffect(() => {
        document.title = "Haruka"
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
                <Feed isExplore={false} isLibrary={false}/>
                <LeftSidebar />
            </Grid>
        </>
    )
}