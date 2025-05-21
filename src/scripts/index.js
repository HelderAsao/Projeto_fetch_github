import{getUser} from './services/user.js'
import{getRepositories} from './services/repositories.js'
import{user} from './objects/user.js'
import{screen} from './objects/screen.js'

document.getElementById('btn-search').addEventListener('click',()=>{
    const userName = document.getElementById('input-search').value
    getUserData(userName)
})

//ACIONAR COM ENTER
document.getElementById('input-search').addEventListener('keyup',(e)=>{
    console.log(e);
    
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        getUserData(userName)
    }
})






// console.log(await user())

async function getUserData(userName){

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)

    // user.repositories(repositories)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    
    
    
    screen.renderUser(user)
    // getUser(userName).then(userData=>{
    //     // console.log(userData);
    //     //avatar_url
    //     //bio
    //     //name
        
    //     let userInfo = `<div class="info"<img src="${userData.avatar_url}" alt="foto do perfil do usuario".>
    //                     <div class="data">
    //                     <h1>${userData.name ?? 'Não possui nome cadastrado 😢'}</h1>
    //                     <p>${userData.bio ?? 'Não possui bio cadastrado 😢'}</p>
    //                     </div>
    //                     </div>`
    //     document.querySelector('.profile-data').innerHTML = userInfo

    //     getUserRepositories(userName)
    // })
}


// function getUserRepositories(userName){

//      getRepositories(userName).then(reposData =>{
//         console.log(reposData);
//         let repositoriesItens =""
//         reposData.forEach(repo => {
//             repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
//         });
//          document.querySelector('.profile-data').innerHTML +=
//           `<div class="repositories section"
//          <h2>Repositórios</h2>
//          <ul>${repositoriesItens}</>
//          </div>`

//     })
// }

//  getUserRepositories('helderasao')
// getUserProfile('helderasao')