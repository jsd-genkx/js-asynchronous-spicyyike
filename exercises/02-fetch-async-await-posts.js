/* 
TODO-01: Create a function named fetchPostsAsync
         Mark it as async
         Use await fetch('https://dummyjson.com/posts')
         Handle response and parse JSON with await
         Log the posts data
         Wrap in try/catch to handle errors

TODO-02: Export fetchPostsAsync and test it in main.js 
*/
export const fetchPostsAsync = async () => {
    const endpoint = 'https://dummyjson.com/posts'
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Failed to fetch posts")
        }
        const data = await response.json();
        console.log(data.posts[3]);
    } catch(error) {
        console.log("Error occurred: ", error);
    }finally {
		console.log("ℹ️ Fetch operation completed.");
	}
}

