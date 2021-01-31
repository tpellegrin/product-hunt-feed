import styled from 'styled-components';

import { Colors } from '../../../styles/Themes';
import Spinner from '../../../styles/Spinner';

interface Props {
  imgUrl?: string;
  title?: string;
  desc?: string;
}

export const Card = (props: Props) => (
  <CardContainer>
    <Logo imgUrl={props.imgUrl}/>
    <About>
      <Title>{props.title}</Title>
      <Description>{props.desc}</Description>
    </About>
    <Upvote />
  </CardContainer>
)

export const Loading = () => (
  <LoadingContainer>
    <Spinner />
  </LoadingContainer>
)

const CardContainer = styled.div`
  background: ${Colors.White};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 12vh;
  max-width: 100%;
  margin: 2em;
  margin-bottom: 0em;
  margin-right: 3em;
  border-radius: 12px;
  transition: all .2s ease-in-out;
`

const LoadingContainer = styled.div`
  margin-top: 2vw;
  margin-bottom: 1vw;
  align-self: center;
`

const Logo = styled.div<Props>`
  background: url(${p => p.imgUrl});
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  align-self: flex-start;
  margin-left: 1.5em;
  width: 8vh;
  height: 8vh;
  background-color: ${Colors.Orange};
  border-radius: 12px;
  z-index: 10;
`

const Upvote = styled.button`
  position: absolute;
  align-self: flex-end;
  width: 7vh;
  height: 7vh;
  margin-right: -1em;
  background: rgba(155, 155, 155, 0.2);
  border-radius: 12px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 21vw;

  @media screen and (min-width: 992px) {
    margin-top: 6vw;
  }
`

const About = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 18em;
  width: 100%;
  height: 55%;
  position: relative;
  align-self: center;
  overflow: hidden;
`

const Title = styled.span`
  color: ${Colors.Gray};
  width: 30rem;
  align-self: flex-start;
  position: absolute;
  font-size: 16px;
  font-weight: 600;
`
const Description = styled.span`
  color: ${Colors.Gray};
  width: 30rem;
  align-self: flex-end;
  position: absolute;
  font-size: 16px;
  font-weight: 300;
`
