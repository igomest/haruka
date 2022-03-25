import { useEffect } from "react"

import { Grid } from "@chakra-ui/react"
import { Navbar } from "../../components/Navbar"
import { RightSidebar } from "../../components/RightSidebar"
import { LeftSidebar } from "../../components/LeftSidebar"
import { CreatePost } from "../../components/CreatePost"


export const PostPage = () => {
    useEffect(() => {
        document.title = "Haruka - Create post"
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
                <CreatePost />
                <LeftSidebar />
            </Grid>
        </>
    )
}