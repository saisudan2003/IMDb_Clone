import React from 'react'
import Header from '../components/common/Header'
import { useEffect,useState } from 'react'
import { categoryMovies } from '../services/api'

import { NOWPLAYING_API_URL,POPULAR_API_URL,TOPRATED_API_URL,UPCOMING_API_URL } from '../constants/constants'
import { Box,styled,Typography } from '@mui/material'
import Banner from '../components/Banner'
import UpNext from '../components/UpNext'
import Slide from '../components/Slide'

const Wrapper = styled(Box)`
display: flex;
padding: 20px,0;
`

const Component = styled(Box)`
padding: 0 115px;
`
const Title = styled(Typography)`
color: #FFFFFF;
font-weight: 800;
font-size: 20px;
margin-top: 20px;
margin-bottom: 10px;
`


function Home() {
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        const getData = async() => {
            let response = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results)
        }
        getData();
    },[])
    //popular
    const [movies1,setMovies1] = useState([]);
    useEffect(() => {
        const getData1 = async() => {
            let response = await categoryMovies(POPULAR_API_URL);
            setMovies1(response.results)
        }
        getData1();
    },[])
    //toprated
    const [movies2,setMovies2] = useState([]);
    useEffect(() => {
        const getData2 = async() => {
            let response = await categoryMovies(TOPRATED_API_URL);
            setMovies2(response.results)
        }
        getData2();
    },[])
    //upcoming
    const [movies3,setMovies3] = useState([]);
    useEffect(() => {
        const getData3 = async() => {
            let response = await categoryMovies(UPCOMING_API_URL);
            setMovies3(response.results)
        }
        getData3();
    },[])
  return (
    <>
        <Header/> 
        <Component>
            <Wrapper>
                <Banner movies={movies}/>
                <UpNext movies={movies}/>
            </Wrapper>

            <Title>Popular</Title>
            <Slide movies={movies1} />

            <Title>Top Rated</Title>
            <Slide movies={movies2} />

            <Title>Upcoming</Title>
            <Slide movies={movies3} />
        </Component>
        
    </>
  )
}

export default Home

