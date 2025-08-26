'use client'
interface CategoryProps {
  params: {
    categories: string[]|undefined;
    searchParams?: { socialmedia: string }
  }
}

export default function Page(props: CategoryProps) {
  console.log(props)
  const {categories} = props.params;

  return (
    <>
      <h1>Categoria dinamica</h1>
      <h2>{categories}</h2>
    </>
  );
}


