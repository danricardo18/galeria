
const handlerBarsContext = {
    "/index.html": {
        "gallery":[
            {
                imgSrc:"public/SP.jpg",
                title:"Speak Now",
                price:"Lps 100 ",
            },

            {
                imgSrc:"public/TS.jpg",
                title:"Taylor Swift",
                price:"Lps 100 ",
            },

            {
                imgSrc:"public/F.jpg",
                title:"Fearless",
                price:"Lps 100",
            },

            {
                imgSrc:"public/Red.png",
                title:"RED",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/1989.jpg",
                title:"1989",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/Rep.jpg",
                title:"Reputation",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/Lover.png",
                title:"Lover",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/Folklore.jpg",
                title:"Folklore",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/Evermore.jpg",
                title:"Evermore",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/M.jpg",
                title:"Midnigths",
                price:"Lps 100  ",
            },
        ],
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;