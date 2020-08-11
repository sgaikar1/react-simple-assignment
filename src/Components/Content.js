import React from "react"
import QuoteItem from "./QuoteItem"
import MenuItem from "./MenuItem"

function Content() {
    return <div className="content">
        <div id="menu-area">
                {Object.keys(menu).map((key, index) => (
                   
                        <MenuItem
                            productName={menu[key].title}
                        
                        />
                ))}
            </div>
         <h2>Quotes</h2>
            <div className="quote-area">
                {Object.keys(haikuData).map((key, index) => (
                
                    <QuoteItem
                        product={haikuData[key]}
                    />
                ))}
            </div>
         <h2>Haiku</h2>
            <div className="quote-area">
                {Object.keys(haikuData).map((key, index) => (
                
                    <QuoteItem
                        product={haikuData[key]}
                    />
                ))}
            </div>
    </div>
}

export default Content
const haikuData = [
    {
        bgColor: "",
        image: "/live/campaign/5f2256094e09ac2a7012e2be/15960857699715f2256094e09ac2a7012e2be_random.jpg",
        likeCount: 23,
        line1: "Like diamond between coal",
        line1_country: "India",
        line2: "Like coffee in cold weather",
        line2_country: "India",
        line3: "which is why we're forever",
        line3_country: "Hidden",
        title: "Old Friends",
        _source: "haikus",

    },
    {
        bgColor: "",
        image: "/live/campaign/5f2256094e09ac2a7012e2be/15960857699715f2256094e09ac2a7012e2be_random.jpg",
        likeCount: 23,
        line1: "Like diamond between coal",
        line1_country: "India",
        line2: "Like coffee in cold weather",
        line2_country: "India",
        line3: "which is why we're forever",
        line3_country: "Hidden",
        title: "Old Friends",
        _source: "haikus",

    },
    {
        bgColor: "",
        image: "/live/campaign/5f2256094e09ac2a7012e2be/15960857699715f2256094e09ac2a7012e2be_random.jpg",
        likeCount: 23,
        line1: "Like diamond between coal",
        line1_country: "India",
        line2: "Like coffee in cold weather",
        line2_country: "India",
        line3: "which is why we're forever",
        line3_country: "Hidden",
        title: "Old Friends",
        _source: "haikus",

    },
    {
        bgColor: "",
        image: "/live/campaign/5f2256094e09ac2a7012e2be/15960857699715f2256094e09ac2a7012e2be_random.jpg",
        likeCount: 23,
        line1: "Like diamond between coal",
        line1_country: "India",
        line2: "Like coffee in cold weather",
        line2_country: "India",
        line3: "which is why we're forever",
        line3_country: "Hidden",
        title: "Old Friends",
        _source: "haikus",

    }
]

const menu = [
    {
        title: "All",
        color: ""
    },
    {
        title: "Haikujam",
        color: ""
    },
    {
        title: "Quotes",
        color: ""
    },
    {
        title: "Memes",
        color: ""
    },
    {
        title: "Adds",
        color: ""
    }
]
