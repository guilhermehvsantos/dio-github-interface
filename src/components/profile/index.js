import React from 'react'
import useGithub from '../../hooks/github-hooks'
import { Users, UsersThree, Folder, MapPin } from 'phosphor-react'
import * as S from './styled'



const Profile = () => {
  const { githubState } = useGithub();

  const place = `https://www.google.com.br/maps/place/${githubState.user.location}`;

  return (
    <S.Wrapper>
      <S.WrapperImage
      src={githubState.user.avatar_url} alt="Profile Avatar"
      />
        <S.WrapperUserInfo>
          <div>
            <h1>{githubState.user.name}</h1>
            <S.WrapperUsername>
                <h3>Username:</h3>
                <a href={githubState.user.html_url} target="blank">{githubState.user.login}</a>
            </S.WrapperUsername>
            <S.WrapperLocation>
            <h4>Location:</h4> 
                <a 
                  href={place} 
                  target="blank">
                  <span>{githubState.user.location} </span>
                  <MapPin size={18} weight="bold"/>
                </a>
            </S.WrapperLocation>
          </div>
          <S.WrapperStatusCount>
            <div>
              <h4> Followers <UsersThree size={18} weight="bold"/></h4>
              <span>{githubState.user.followers}</span>
            </div>
            <div>
              <h4> Followings <Users size={18} weight="bold"/></h4>
              <span>{githubState.user.following}</span>
            </div>
            <div>
              <h4> Gists <Folder size={18} weight="bold"/></h4>
              <span>{githubState.user.public_gists}</span>
            </div>
            <div>
            <h4> Repos <Folder size={18} weight="bold"/></h4>
              <span>{githubState.user.public_repos}</span>
            </div>
          </S.WrapperStatusCount>
        </S.WrapperUserInfo>  
    </S.Wrapper>
  )

}

export default Profile