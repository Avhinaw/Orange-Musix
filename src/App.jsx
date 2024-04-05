import { useState } from 'react'
import Navbar from './Components/Navbar';
import Card from './Components/Card';

let App = () => {
  const data = [
    { image: "https://i.scdn.co/image/ab67616d0000b2737e0631a1ed438f9eff37caf4", name: "Kaleshi Chori", artist: "Dg Immortals", added: false },
    { image: "https://i.ytimg.com/vi/N1s-GN1SWqY/maxresdefault.jpg", name: "Maharani", artist: "Arpit Bala", added: false },
    { image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7b01730d-340d-4c02-a4be-21ff27122f90/d4h16o8-ea27f419-a394-4caa-8392-e455ca33c72e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdiMDE3MzBkLTM0MGQtNGMwMi1hNGJlLTIxZmYyNzEyMmY5MFwvZDRoMTZvOC1lYTI3ZjQxOS1hMzk0LTRjYWEtODM5Mi1lNDU1Y2EzM2M3MmUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D8jJImAc57G8x3hiQm5i95Mnf4oi0DEZAjqF94pWhno", name: "Why This Kolaveri", artist: "Dhanush", added: false },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbF_eFv5rD6BIJ7LVJuzsdZsGe7ON03RBgI0sn3oaqZQ&s", name: "Out of Time", artist: "The weeknd", added: false },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hRKlSvIvdGqd1R-TaY713gT-u8LkYQQIAdTiEgBBqA&s", name: "3am in Hell", artist: "Lucifer was innocent", added: false },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiL7b1YWe5UVBErPJYGY8IHOJqggBYTQwzo-_2GaPbZg&s", name: "Roz Roz", artist: "The Yellow Diary", added: false },
    { image: "https://i.pinimg.com/474x/cf/8c/f3/cf8cf3601b3e10c5c3fe690160a2a8ae.jpg", name: "Glass Animals", artist: "Heat Waves", added: false },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtX4BGi90mRpN-ZPWP1uQyntE-w-kd5ByOSCbIAawvA&s", name: "Brown Munde", artist: "AP Dhillon", added: false },
    { image: "https://i.scdn.co/image/ab67616d0000b273908a648292b521b79581f51a", name: "Aaj", artist: "Bloodywood", added: false },
    { image: "https://images.genius.com/2bbcbf3ac2bbc72d31d30f4511926d8f.1000x1000x1.jpg", name: "Teri Meri Phli Shaam", artist: "Anuksha Shetty", added: false },
    { image: "https://i.scdn.co/image/ab67616d0000b273344a5d3a16409f4bada31aec", name: "Iraaday", artist: "ZAYEM", added: false },
    { image: "https://images.hungama.com/c/1/1a7/4eb/103414718/103414718_300x300.jpg", name: "Tu Jae Jahan", artist: "Osho Jain", added: false },
  ];

  const [songData, setSongData] = useState(data);
  const handleFav = (idx) => {
    setSongData((prev) =>{
      return prev.map((item, itemidx) => {
        if(itemidx === idx){
          return {...item, added: !item.added};
        }
        return item;
      })
    });
  }
  return (
    <>
      <div className='w-full h-screen bg-orange-300 px-20'>
        <Navbar data={songData} />
        <div className=' mt-14 flex flex-wrap shrink-0 gap-10'>
          {songData.map((obj, idx) => (
            <Card key={obj.name} data={obj} handleFav={handleFav} idx = {idx}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
