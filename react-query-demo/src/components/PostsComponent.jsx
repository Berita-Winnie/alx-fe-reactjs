import { useQuery } from '@tanstack/react-query'

//Define a fetch function that can be used to fetch data from an API
const fetchData = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const reactQuery = () => {
    //using query hook to handle data fetching and chaching
    const { data, error, isLoading} = useQuery({
        queryKey: ["fetchData"],
        queryFn:fetchData,
        staleTime: 5000, //adjusted to experiment with caching.
    });

    //handle loading state
    if (isLoading) return <div> Loading...</div>;

    //handle error state
    if (error) return <div>Error Loading Page</div>;

    //Render Fetched Data
    return(
        <>
        <button onClick={ () => refetch()}>Refetch Data</button>
        {data.map( item => (
            <div key={item.id}>{item.name}</div>
        ))}
        </>
    )

};

export default reactQuery;