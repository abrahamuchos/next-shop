import {revalidateTag} from "next/cache";

export async function POST(request: Request){
  const body = await request.json();
  const {tag, token} = body;

  if(!tag||!token){
    return new Response(
      JSON.stringify({error: "Missing tag or token"}),
      {status: 400}
    );
  }

  if(token !== process.env.CACHE_TOKEN){
    return new Response(
      JSON.stringify({error: "Invalid token"}),
      {status: 401}
    );
  }

  revalidateTag(tag);
}


