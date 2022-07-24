import React from 'react'
import { Spinner } from 'phosphor-react'
import * as S from './styled';


const Loading = () => {
  return (
    <S.Wrapper>
        <Spinner size={60} weight="bold" />
    </S.Wrapper>
  )
}

export default Loading