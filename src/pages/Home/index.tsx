import { useEffect } from "react"

import { Grid } from "@chakra-ui/react"
import { Navbar } from "../../components/Navbar"


export const Home = () => {

    useEffect(() => {
        document.title = "Haruka"
    }, [])

    return (
        <>
            <Navbar />
            <Grid
                gridTemplateColumns="20vw auto 24vw"
                columnGap="2rem"
                marginLeft="1rem"
                marginRight="1rem"
            >
                <p>Loll</p>
                <p>Lma</p>
                <p>Lmaooo</p>
            </Grid>
        </>
    )
}