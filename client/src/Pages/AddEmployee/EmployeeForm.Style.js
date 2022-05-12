import { Button, Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const Header = styled(Typography)`
font-size: 2rem;
font-weight: 700;
margin-bottom:1rem;
text-align: center;`

export const CardHeading = styled(Typography)`
font-size: 1.8rem;
font-weight: 500;
color: #272727;`

export const CardContentText = styled(Typography)`
font-size: 1.8rem;
font-weight: 500;
color:#272727;`


export const StyleGrid = styled(Grid)`
margin-top: 50;
margin-bottom: 2rem;
display: flex;
justify-content: center;`

export const StyleButton = styled(Button)`
background-color:green;
font-size: 1.5rem;
height: 4rem;
width: 10rem;`