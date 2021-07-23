// import { useStaticQuery } from "gatsby"
// import { data } from "gatsby"

// import data from 'data';
// const { data } = useStaticQuery;

export const FitnessDevice = [
    {
        name: 'Swan Shaper',
        shortName: "Swan",
        description: 'Swan Shaper wykorzystuje działanie lamp podczerwonych, eliptyka skrętnego, światła kolagenowego oraz jonizacji. W efekcie poprawiamy odżywienie skóry, redukujemy cellulit i tkankę tłuszczową oraz ujędrniamy i modelujemy sylwetkę.Zabiegów na Swan Shaper nie rekomendujemy m.in. osobom z cukrzycą, epilepsją, chorobami serca, osobom o wadzę powyżej 90 kilogramów, a także kobietom w trakcie miesiączki i w ciąży.',
        // path: data.Swan.childImageSharp.fluid, 
    },

    {
        name: 'Vacu Shaper',
        shortName: 'Vacu',
        description: 'POGROMCA CELLULITU to specjalistyczne urządzenie łączy rezultaty wysiłku fizycznego i działania podciśnienia. Ćwicząc na Vacu Shaper spalamy cztery razy szybciej tkankę tłuszczową.',
        // path: data.Vacu.childImageSharp.fluid, 
    },

    {
        name:'Roll Shaper',
        shortName: 'Roll',
        description:'Rollmasaż jest gwarancją intensywnego a zarazem relaksacyjnego masażu, który doskonale ujędrnia ciało, poprawiając krążenie, usuwa z organizmu toksyny, a przede wszystkim skutecznie redukuje cellulit.',
        // path: data.Roll.childImageSharp.fluid, 
    }
]

export const WellnessDevice = [
    {
        name:'Elektrostymulacja',
        description:'Elektrostymulacja mięśni to zabieg elektroleczniczy, zwany również elektrogimnastyką. Jest skuteczny w walce z cellulitem, poprawia elastyczność skóry, przyspiesza spalanie tkanki tłuszczowej.',
    },

    {
        name:'Limfodrenaż',
        description:'Zabiegi wpływające bardzo głęboko na problematyczne partie ciała. Zapobiega chorobom zapalnym czy chłonnym a także zwalcza cellulit, żylaki, obrzęki pourazowe i nadwagę. Poprawia krążenie krwi i limfy.',
    },

    {
        name:'Sauna',
        description:'W przypadku sauny Infrared, za ogrzanie ciała odpowiadają promienniki podczerwieni, które wytwarzają fale podczerwone wnikające nawet do 4,5 cm pod skórę rozgrzewając tym samym nasze ciało.',
    },

]


export const deviceImageSwan = ({data}) => (data.Swan.childImageSharp.fluid)
export const deviceImageVacu = ({data}) => (data.Vacu.childImageSharp.fluid)

export function deviceImage ({data}, device) {
    if(device === "Swan") return data.Swan.childImageSharp.fluid
    else if(device === "Vacu") return data.Vacu.childImageSharp.fluid
    else if(device === "Roll") return data.Roll.childImageSharp.fluid
    else if(device === "Elektro") return data.Elektro.childImageSharp.fluid
    else if(device === "Limfo") return data.Limfo.childImageSharp.fluid
    else if(device === "Sauna") return data.Sauna.childImageSharp.fluid
    else return data.Swan.childImageSharp.fluid
}



// {
//     name:'',
//     description:''
// }


// export const query = graphql`
// query {
//   Swan: file(relativePath: { eq: "devices/fitness/Swan.jpg" }) {
//     childImageSharp {
//       fixed(height:200, width:300, quality: 70) {
//         ...GatsbyImageSharpFixed
//       }
//       fluid(quality: 80, maxWidth: 850) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }

//   Vacu: file(relativePath: { eq: "devices/fitness/Vacu.jpg" }) {
//     childImageSharp {
//       fixed(height:200, width:300, quality: 70){
//         ...GatsbyImageSharpFixed
//       }
//       fluid(quality: 80, maxWidth: 850 ) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }


//   Roll: file(relativePath: { eq: "devices/fitness/RollShaper.jpg" }) {
//     childImageSharp {
//         fixed(height:200, width:300, quality: 70){
//         ...GatsbyImageSharpFixed
//         }
//         fluid(quality: 80, maxWidth: 850 ) {
//           ...GatsbyImageSharpFluid
//         }
//     }
//   }

//   Elektro: file(relativePath: { eq: "devices/wellness/Elektrostzmulacja.jpg" }) {
//     childImageSharp {
//         fixed(height:200, width:300, quality: 70){
//         ...GatsbyImageSharpFixed
//         }
//         fluid(quality: 80, maxWidth: 850 ) {
//           ...GatsbyImageSharpFluid
//         }
//     }
//   }

//   Limfo: file(relativePath: { eq: "devices/wellness/Limfodrenaż.jpg" }) {
//     childImageSharp {
//         fixed(height:200, width:300, quality: 70){
//         ...GatsbyImageSharpFixed
//         }
//         fluid(quality: 80, maxWidth: 850 ) {
//           ...GatsbyImageSharpFluid
//         }
//     }
//   }

//   Sauna: file(relativePath: { eq: "devices/wellness/sauna1.jpg" }) {
//     childImageSharp {
//         fixed(height:200, width:300, quality: 70){
//         ...GatsbyImageSharpFixed
//         }
//         fluid(quality: 80, maxWidth: 850 ) {
//           ...GatsbyImageSharpFluid
//         }
//     }
//   }
// }
// `