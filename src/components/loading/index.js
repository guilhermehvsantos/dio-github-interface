import React from 'react'
import { SpinnerGap } from 'phosphor-react'
import * as S from './styled';


const Loading = () => {
  return (
    <S.Wrapper>
        <SpinnerGap size={60} weight="bold" />
    </S.Wrapper>
  )
}

export default Loading