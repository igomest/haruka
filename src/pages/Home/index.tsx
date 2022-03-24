import { useEffect } from "react"

import { Grid } from "@chakra-ui/react"
import { Navbar } from "../../components/Navbar"
import { RightSidebar } from "../../components/RightSidebar"


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
                <p>Lma</p>
                <p>Lmaooo</p>
            </Grid>
        </>
    )
}