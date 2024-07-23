import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  // console.log(searchParams); https://dev.to/peterlidee/using-searchparams-usesearchparams-and-userouter-in-next-13-4623
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 3600 } });
  // console.log(res);
  
  if (!res.ok)
    throw new Error("Failed to Fetch data");

  const data = await res.json();
  // console.log(data);
  const results = data.results;
  // console.log(results);

  return (
    <div><Results results={results}/></div>
  )
}