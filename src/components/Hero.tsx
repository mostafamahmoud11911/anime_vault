import Image from "next/image";


export default function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="https://scontent.fdxb1-1.fna.fbcdn.net/v/t39.30808-6/419246111_933763958120286_5152554098720520270_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7AF6pDauKKcAb7fIqPx&_nc_ht=scontent.fdxb1-1.fna&oh=00_AfBAXuQUsKR9xmiI_Q3jy4uXcXgTFZB5wmF5mk29IFCDeA&oe=66198ED7"
          alt="logo"
          width={50}
          height={50}
          className="object-cover rounded-full"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The <span className="red-gradient">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="https://scontent.fdxb1-1.fna.fbcdn.net/v/t39.30808-6/380758472_871510064345676_8188761032351513731_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=s5zCGeEfdz0Ab6nzSiW&_nc_ht=scontent.fdxb1-1.fna&oh=00_AfAh1HnbYgLINUWG-QBviLyFWkQ0y6uHBfNNxPJVTTiorw&oe=6619815E" alt="anime" fill className="object-contain" />
      </div>
    </header>
  )
}
