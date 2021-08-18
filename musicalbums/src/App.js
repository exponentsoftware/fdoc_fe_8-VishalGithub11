import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Albums from "./Albums";
import AddAlbum from "./AddAlbum";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  //`id`, `artist`, `album_title`, `album_cover`, `songs`

  const db = {
    albums: [
      {
        id: "01",
        artist: "A.R. Rahman",
        album_title: "Mix",
        album_cover: "",
        songs: [
          "Maa_Tujhe_Salam",
          "Tere_Bina",
          "Chal_Chhaiyya_Chhaiya",
          "Jai_Ho",
        ],
      },
      {
        id: "02",
        artist: "A.R. Rahman",
        album_title: "RockStar",
        album_cover: "02.png",
        songs: ["kun_faya_kun", "Tum_Ho", "Nadaan_Parindey", "Hawa_Hawa"],
      },
      {
        id: "03",
        artist: "A.R. Rahman",
        album_title: "Tamasha",
        album_cover: "02.png",
        songs: [
          "Agar_Tum_Sath_Ho",
          "Matargashti",
          "Heer to badi sad hai",
          "wat wat wat",
        ],
      },
      {
        id: "04",
        artist: "A.R. Rahman",
        album_title: "Delhi-6",
        album_cover: "02.png",
        songs: ["Masakkali", "Rehna Tu", "Genda Fool", "Arziyan"],
      },
    ],
  };

const [search, setSearch] = useState("")
  const [state, setState] = useState(db.albums);
  const updateAlbum = (data) => {
    const addItem = {
      id: "05",
      artist: data.artist,
      album_title: data.album_title,
      album_cover: data.image,
      songs: ["more_piya", "ghar_aayenge", "ye dil"],
    };
    setState([...state, addItem]);
    console.log("updateditem",state);
  };

  const handleDelete = (id) => {
    alert("are you sure want to delete");
    const data = state.filter((item) => item.id !== id);
    console.log(data, id);
    setState(data);
  };

  console.log("updated", state);
  console.log("search",search);
  return (


    <>

      <div className="searchbar">
        <input placeholder="Seach..." onChange={(e)=>{setSearch(e.target.value)}} />
      </div>

<AddAlbum  updateAlbum={updateAlbum}  />

      <div className="App">
        {state.filter((val, index) => {
          if (search == "") {
          return val
          }
          else if (val.album_title.toLowerCase().includes(search.toLowerCase())) {
            return val
          }
      }).map((item, index) => {
        return (
          <Albums
            key={index}
            id={item.id}
            album_name={item.album_title}
            musician_name={item.artist}
            album_cover={item.album_cover}
            songs={item.songs}
            handleDelete={handleDelete}
          />
        );
      })}

      
      </div>
      

      
</>
  
  );
}

export default App;

















// import logo from "./logo.svg";
// import React, { useState } from "react";
// import "./App.css";
// import Albums from "./Albums";
// import AddAlbum from "./AddAlbum";

// function App() {
//   //`id`, `artist`, `album_title`, `album_cover`, `songs`

//   const db = {
//     albums: [
//       {
//         id: "01",
//         artist: "A.R. Rahman",
//         album_title: "Mix",
//         album_cover: "",
//         songs: [
//           "Maa_Tujhe_Salam",
//           "Tere_Bina",
//           "Chal_Chhaiyya_Chhaiya",
//           "Jai_Ho",
//         ],
//       },
//       {
//         id: "02",
//         artist: "A.R. Rahman",
//         album_title: "RockStar",
//         album_cover: "02.png",
//         songs: ["kun_faya_kun", "Tum_Ho", "Nadaan_Parindey", "Hawa_Hawa"],
//       },
//       {
//         id: "03",
//         artist: "A.R. Rahman",
//         album_title: "Tamasha",
//         album_cover: "02.png",
//         songs: [
//           "Agar_Tum_Sath_Ho",
//           "Matargashti",
//           "Heer to badi sad hai",
//           "wat wat wat",
//         ],
//       },
//       {
//         id: "04",
//         artist: "A.R. Rahman",
//         album_title: "Delhi-6",
//         album_cover: "02.png",
//         songs: ["Masakkali", "Rehna Tu", "Genda Fool", "Arziyan"],
//       },
//     ],
//   };

//   const [state, setState] = useState(db.albums);

//   const updateAlbum = (data) => {
//     const addItem = {
//       id: "05",
//       artist: data.artist,
//       album_title: data.album_title,
//       album_cover: data.image,
//       songs: ["more_piya", "ghar_aayenge", "ye dil"],
//     };
//     setState([...state, addItem]);
//   };

//   const handleDelete = (id) => {
//     alert("are you sure want to delete");
//     const data = state.filter((item) => item.id !== id);
//     console.log(data, id);
//     setState(data);
//   };

//   console.log("updated", state);
//   return (
//     <div className="App">
//       {state.map((item, index) => {
//         return (
//           <Albums
//             key={index}
//             id={item.id}
//             album_name={item.album_title}
//             musician_name={item.artist}
//             album_cover={item.album_cover}
//             songs={item.songs}
//             handleDelete={handleDelete}
//           />
//         );
//       })}

//       <AddAlbum updateAlbum={updateAlbum} />
//     </div>
//   );
// }

// export default App;
