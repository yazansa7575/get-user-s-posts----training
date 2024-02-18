function clickOnUser(indexLi) {
    GetApiPostForIndexNumber(indexLi);
}
function GetApiPostForIndexNumber(indexUserId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${indexUserId}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(posts => {
            let postsinner = document.getElementById("posts").innerHTML = ""
            for (post of posts) {
                content =
                    `
                <div class="post">
                    <div class="con-title">
                        <div class="title">
                            ${post.title}
                        </div>
                    </div>
                    <div class="body">
                        ${post.body}
                    </div>
                </div>
            `;
                postsinner = document.getElementById("posts").innerHTML += content
            }
        })
    // let req = new XMLHttpRequest();
    // req.open("GET",`https://jsonplaceholder.typicode.com/posts?userId=${indexUserId}`)
    // req.responseType="json";
    // req.send();
    // req.onload = function()
    // {
    //     let postsinner = document.getElementById("posts").innerHTML =""
    //     console.log(req.status);
    //     for(post of req.response)
    //     {
    //         content = 
    //         `
    //             <div class="post">
    //                 <div class="con-title">
    //                     <div class="title">
    //                         ${post.title}
    //                     </div>
    //                 </div>
    //                 <div class="body">
    //                     ${post.body}
    //                 </div>
    //             </div>
    //         `;
    //         postsinner = document.getElementById("posts").innerHTML += content 
    //     }
    // }
}
function GetApiUserForIndexNumber() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    alert("error")
                }
            })
            .then(users => {
                let usreInner = document.getElementById("usreInner").innerHTML = ""
                for (user of users) {
                    content =
                        `
                <li onclick="clickOnUser(this.id)" id="${user.id}">
                    <h2>${user.name}</h2>
                    <p>${user.email}</p>
                </li>
            `;
                    usreInner = document.getElementById("usreInner").innerHTML += content
                }
                resolve()
            })
    })

    // let req = new XMLHttpRequest();
    // req.open("GET",`https://jsonplaceholder.typicode.com/users`)
    // req.responseType="json";
    // req.send();
    // req.onload = function()
    // {
    //     console.log(req.status);
    //     if(req.status >= 200 && req.status<300)
    //     {
    //         let usreInner = document.getElementById("usreInner").innerHTML =""
    //         for(user of req.response)
    //         {
    //             content = 
    //             `
    //                 <li onclick="clickOnUser(this.id)" id="${user.id}">
    //                     <h2>${user.name}</h2>
    //                     <p>${user.email}</p>
    //                 </li>
    //             `;
    //             usreInner = document.getElementById("usreInner").innerHTML += content 
    //         }
    //     }

    // }
}
GetApiUserForIndexNumber()
    .then(() => {
        GetApiPostForIndexNumber(1);
    })
function GetApiUserForIndexNumberByAxios() {
    Axios.Get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            console.log(response);
        })
}


