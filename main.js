let wrapper = document.querySelector(".card");

fetch("https://api.github.com/users/chris-madia").then(function(response) {
  if (response.status !== 200) {
    console.log(response.status);
    return;
  }
  response.json().then(function(data) {
    console.log(data.name, response.url);
    displayInfo(data);
  });
});

function displayInfo(data) {

  let template = `
    <div class=headbox>
    <h1>${data.name}</h1>
    </div>
      <article class = undertitle>
      <div class=info>
        <h2>Basic Information</h2>
        <ul>
          <li><span class=text>Name:</span> ${data.name}</li>
          <li class=link><span class=text>GitHub URL:</span><a href= "${data.html_url}"> chris-madia</a></li>
          <li><span class=text>Company: </span> ${data.company}</li>
          <li class =link><span class=text>Website: </span><a href= "${data.blog}"> chrismadia.com</a></li>
        </ul>
      </div>
      <hr>
      <div class=bio>
        <h2>Bio</h2>
          <p>${data.bio}</p>
      </div>
      <div class=picture>
          <img src="${data.avatar_url}">
      </div>
      </article>
    `;

  wrapper.innerHTML = template;
}
