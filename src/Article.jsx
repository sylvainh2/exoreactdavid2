import Counter from './Counter';

const articlesFromApi = [
    {
      id: 1,
      title: "Mon premier article",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies ultricies, nisl nisl aliquet nisl, eget ali",
      image: "https://picsum.photos/500/300",
      isPublished: true,
    },
    {
      id: 2,
      title: "Mon deuxième article",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies ultricies, nisl nisl aliquet nisl, eget ali",
      image: "https://picsum.photos/500/300",
      isPublished: false,
    },
    {
      id: 3,
      title: "Encore un article",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies ultricies, nisl nisl aliquet nisl, eget ali",
      image: "https://picsum.photos/500/300",
      isPublished: true,
    }
  ];
  const Article=()=>{

    return(
        <main>
        <Counter />
        {articlesFromApi.map((data)=>{
            return(                
                data.isPublished &&
                <div key={data.id} className="contain">
                    <h2>{data.title}</h2>
                    <article>{data.content}</article>
                    <img src={data.image} />
                </div>
        )
        })}
        </main>
    )
}

export default Article;