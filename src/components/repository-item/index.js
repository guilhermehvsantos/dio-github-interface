import React from 'react'
import * as S from './styled'


const RepositoryItem = ({ name, linkToRepo, fullName}) => {
    return (
        <S.Wrapper>
            <h3>{name}</h3>
            <a href={linkToRepo} target="_blank" rel="noreferrer">{fullName}</a>
        </S.Wrapper>
    )
}

export default RepositoryItem;