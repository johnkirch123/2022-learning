const posts = [
    {title: 'Post One', body: 'This is post 1'},
    {title: 'Post Two', body: 'This is post 2'},
];

// function createPost() {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post 3', body: 'This is post 3'});

// getPosts();

function createPost(post) {
    return new Promise(function(resolve, reject){

        setTimeout(function() {
            posts.push(post);
            const error = true;

            if(!error) {
                resolve();
            } else {
                reject('Something went wrong');
            }

            // callback();
        }, 2000);
    });

}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post 3'}).then(getPosts).catch(function(err) {
    console.log(err);
});