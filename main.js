// function showsocialnetworks(midia) {
//  alert(midia)
// }
//camelCase ex : socialNetworks
//PascalCase ex : SocialNetworks
//snake_case ex : social_networks
const socialNetworks = {
  github: 'JFERREIR14',
  youtube: 'channel/UCfZPLbOBqKDJblPZqmTfxQg',
  facebook: 'josemar.ferreira.92',
  instagram: 'ferreirajosemar',
  twitter: 'JFERREIR18',
  linkedin: '/in/josemar-ferreira-29410b89'
}
function changeSocialNetworks() {
  // For para pegar os filhos do elemento li
  for (let li of socialLinks.children) {
    // Pegando o atributo de cada classe em li
    const social = li.getAttribute('class')
    // Tamplate String
    li.children[0].href = `https://${social}.com/${socialNetworks[social]}`
  }
}
changeSocialNetworks()
// showsocialnetworks(socialnetworks.github)
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialNetworks.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
  // arrow functions
  // função anonima
  // (argumento, argumento2) =>{

  //}
}
getGitHubProfileInfos()
