const screen = {
    userProfile:document.querySelector('.profile-data'),
    renderUser(user){
            
        this.userProfile.innerHTML = `<div class="info"<img src="${user.avatarUrl}" alt="foto do perfil do usuario".>
                         <div class="data">
                         <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                         <p>${user.bio ?? 'Não possui bio cadastrado 😢'}</p>
                        </div>
                        </div>`
        // userProfile.innerHTML = userInfo

        let repositoriesItens =''
        user.repositories.forEach(repo => repositoriesItens+=`<li>
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </li>`)
            

        if(user.repositories.length >0){
        this.userProfile.innerHTML +=  `<div class="repositories section"
                                        <h2>Repositórios</h2>
                                        <ul>${repositoriesItens}</>
                                         </div>`
        }
            
        ;
    }
}

export { screen}