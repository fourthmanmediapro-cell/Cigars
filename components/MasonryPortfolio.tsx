export default function MasonryPortfolio() {
  const pairings = [
    {
      img: "https://raw.githubusercontent.com/fourthmanmediapro-cell/imageHosting/36bdd3a9a9ff29dd0e7492469729147c9724d5b8/Robusto.jpeg",
      cigar: "Robusto",
      whisky: "Macallan 18",
      tag: "Rich & Smoky",
    },
    {
      img: "https://raw.githubusercontent.com/fourthmanmediapro-cell/imageHosting/36bdd3a9a9ff29dd0e7492469729147c9724d5b8/belicoso.jpeg",
      cigar: "Belicoso",
      whisky: "Lagavulin 16",
      tag: "Bold & Peaty",
    },
    {
      img: "https://raw.githubusercontent.com/fourthmanmediapro-cell/imageHosting/36bdd3a9a9ff29dd0e7492469729147c9724d5b8/corona.jpeg",
      cigar: "Corona",
      whisky: "Glenlivet 12",
      tag: "Smooth & Mild",
    },
    {
      img: "https://raw.githubusercontent.com/fourthmanmediapro-cell/imageHosting/36bdd3a9a9ff29dd0e7492469729147c9724d5b8/diademas.jpeg",
      cigar: "Diademas",
      whisky: "Glenfarclas 25",
      tag: "Full & Earthy",
    },
    {
      img: "https://raw.githubusercontent.com/fourthmanmediapro-cell/imageHosting/36bdd3a9a9ff29dd0e7492469729147c9724d5b8/godo.jpeg",
      cigar: "Godo",
      whisky: "Oban 14",
      tag: "Coastal & Spicy",
    },
    {
      img: "https://raw.githubusercontent.com/fourthmanmediapro-cell/imageHosting/36bdd3a9a9ff29dd0e7492469729147c9724d5b8/pantella.jpeg",
      cigar: "Pantella",
      whisky: "Balvenie 14",
      tag: "Honey & Cedar",
    },
    {
      img: "https://raw.githubusercontent.com/fourthmanmediapro-cell/imageHosting/36bdd3a9a9ff29dd0e7492469729147c9724d5b8/toro.jpeg",
      cigar: "Toro",
      whisky: "Highland Park 18",
      tag: "Heather & Dark Fruit",
    },
    {
      img: "https://raw.githubusercontent.com/fourthmanmediapro-cell/imageHosting/36bdd3a9a9ff29dd0e7492469729147c9724d5b8/torpedo.jpeg",
      cigar: "Torpedo",
      whisky: "Ardbeg 10",
      tag: "Intense & Smoky",
    },
  ]

  return (
    <section className="py-20 px-6 bg-[#0a0600]">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.25em] text-[#b8974a] mb-3 uppercase">
          Cigar & Whisky Pairings
        </p>
        <h2 className="text-3xl font-light text-[#e8c97a] mb-4">The Portfolio</h2>
        <div className="w-8 h-[2px] bg-[#b8974a] mx-auto" />
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
        {pairings.map((item, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-3 relative group overflow-hidden rounded-md"
          >
            <img
              src={item.img}
              alt={item.cigar}
              className="w-full h-auto block rounded-md"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex flex-col justify-end p-4">
              <p className="text-[#e8c97a] font-medium text-sm mb-1">{item.cigar}</p>
              <p className="text-[#e8c97a]/60 text-xs mb-2">Paired with {item.whisky}</p>
              <span className="text-[10px] border border-[#b8974a]/50 text-[#e8c97a]/80 px-2 py-1 rounded-full self-start">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
