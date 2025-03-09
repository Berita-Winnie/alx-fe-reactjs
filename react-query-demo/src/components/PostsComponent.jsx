import { useQuery } from '@tanstack/react-query'

//Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const reactQuery = () => {
    //using query hook to handle data fetching and chaching
    const { posts, isError, isLoading} = useQuery({
        queryKey: ["fetchPosts"],
        queryFn:fetchPosts,
        staleTime: 5000, //adjusted to experiment with caching.
        cacheTime: 60000, //Keeps the data in the cache for one minute
        refetchOnWindowFocus: true, //refetche data when the window regains focus
        keepPreviousData: true, //Retain previous data when fetching new data
    
    });

    //handle loading state
    if (isLoading) return <div> Loading...</div>;

    //handle error state
    if (isError) return <div>Error Loading Posts</div>;

    //Render Fetched Data
    return(
        <>
        <button onClick={ () => refetch()}>Refetch Posts</button>
        {posts.map( item => (
            <div key={item.id}>{item.name}</div>
        ))}
        </>
    )

};

export default reactQuery;