import {revalidatePath} from "next/cache";

export async function POST(request: Request){
  const body = await request.json();
  const {path, token} = body;

  if(!path||!token){
    return new Response(
      JSON.stringify({error: "Missing path or token"}),
      {status: 400}
    );
  }

  if(token !== process.env.CACHE_TOKEN){
    return new Response(
      JSON.stringify({error: "Invalid token"}),
      {status: 401}
    );
  }

  revalidatePath(path);
}