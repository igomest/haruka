import { useEffect } from "react"

import { Grid } from "@chakra-ui/react"
import { Navbar } from "../Navbar"
import { RightSidebar } from "../RightSidebar"
import { Feed } from "../Feed"
import { LeftSidebar } from "../LeftSidebar"



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
                <Feed isExplore={false} isLibrary={true} />
                <LeftSidebar />
            </Grid>
        </>
    )
}