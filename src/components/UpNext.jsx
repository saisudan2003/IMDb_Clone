import { Typography } from '@mui/material'
import React from 'react'
import {Box,styled} from '@mui/material'

const Component = styled(Box)`
width: 40%;
display: flex;
flex-direction: column;
align-items: baseline;
padding-Left: 20px;
& > p {
    color: #F5C518;
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 10px;
}
`
const Poster = styled('img')({
    width: 88,
})

const Wrapper = styled(Box)`
color: #FFFFFF;
display: flex;
& > p {
    margin-left: 20px;
}`

function UpNext({movies}) {
  return (
    <Component>
        <Typography>Up Next</Typography>
        {
            movies.splice(0,3).map(movie => (
                <Wrapper>
                <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='banner' />
                <Typography>{movie.original_title}</Typography>
                </Wrapper>
            ))
        }
    </Component>
  )
}

export default UpNext