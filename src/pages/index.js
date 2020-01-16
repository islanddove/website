import React from "react"
import { Box } from "rebass/styled-components"

import Main from "../components/main"
import Meta from "../components/meta"
import About from "../components/about"
import Social from "../components/social"
import ResumeLink from "../components/resume-link"

const IndexPage = () => (
  <Main>
    <Meta title="Home" />
    <Box px={[3, 2]}>
      <About />
    </Box>
    <Box my={4}>
      <Social />
    </Box>
    <Box my={4}>
      <ResumeLink />
    </Box>
  </Main>
)

export default IndexPage
