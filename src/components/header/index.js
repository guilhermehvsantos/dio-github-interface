import React, { useState } from "react";
import useGithub from '../../hooks/github-hooks'
import { MagnifyingGlass } from "phosphor-react";
import * as S from "./styled"

const Header = () => {

    const { getUser} = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState()

    const submitGetUser = () => {
        if(!usernameForSearch) return console.log('usuario nao existe');
        return getUser(usernameForSearch);
    };


    return (
        <header>
            <S.Wrapper>
                <input 
                type="text" 
                placeholder="Digite o nome do usuário"
                onChange={(e) => setUsernameForSearch(e.target.value)}
                />
                <button type="submit" onClick={submitGetUser}>
                    <MagnifyingGlass 
                    size={22} weight="bold" 
                    />
                </button>
            </S.Wrapper>
        </header>
    )
}

export default Header