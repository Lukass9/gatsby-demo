import React from 'react'
import Layout from "../layout/Layout"
import { graphql, Link } from 'gatsby'
import styled from "styled-components"
import Markdown from 'react-markdown'

import Button from "../Components/Button/Button1"


const Wrapper = styled.div ` 
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`
const WrapperContent = styled.div ` 
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

${({theme})=>theme.media.tablet}{
    flex-direction: row; 
    width: 80%; 
}
`

const Img = styled.img ` 
    width: 100%;
    height: 100%;

${({theme})=>theme.media.tablet}{
    max-height: 60vh;
    max-width: 40vw;
    height: auto;
    width: auto;
    /* max-width: 80vh; */
    /* max-width:  20vw; */
    margin: 3vw;
}
`
const H1 = styled.h1 `  
    color: ${({theme})=>theme.colors.orangeF};
`

const WrapperArticle = styled.div ` 
    width: 90%;

`

const WrapperButton = styled.div ` 
    display: flex;
    width: 100%;
    justify-content: flex-end;

 ${({theme})=> theme.media.tablet}{
    justify-content: center;
}
`
const Button1 = styled(Button) ` 
    margin: 20px;
`
const Article = ({pageContext: {slug}, data: {article}}) =>{

    return (
        <Layout>
            <Wrapper>
                <WrapperContent>
                    <Img src={article.picture.url} />
                    <WrapperArticle>
                        <H1> {article.title} </H1>
                        <Markdown
                            escapeHtml={true}
                            children={article.content} 
                        />
                    </WrapperArticle>
                </WrapperContent>

                <WrapperButton>
                    <Link to="/Wskazowki">
                        <Button1>
                            Powrót
                        </Button1>
                    </Link>
                </WrapperButton>
            </Wrapper>
        </Layout>
    )
}

export const query = graphql`
    query fetchArticle($slug: String) {
        article: datoCmsArticle(slug: {eq: $slug}) {
            id
            slug
            title
            content
            picture {
                alt
                url
            }
        }
    }
`

export default Article