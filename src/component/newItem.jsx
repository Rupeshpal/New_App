import React, { Component } from "react";
import New from "./new";
export class Newitem extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Elon",
            "title": "Dow Jones Futures Fall With U.S. Markets Closed For MLK Holiday; Tesla's Big Transition | Investor's Business Daily - Investor's Business Daily",
            "description": "The S&P 500 cleared key levels last week. Time to take action, carefully.",
            "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-rally-clears-resistance-tesla-big-transition/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2022/05/Stock-elonmusk-grumpy-01-shutt.jpg",
            "publishedAt": "2023-01-16T12:39:00Z",
            "content": "Dow Jones futures fell modestly Monday morning, along with S&amp;P 500 futures and Nasdaq futures. U.S. stock and bond markets are closed Monday for the Martin Luther King Jr. holiday.\r\nXThe stock ma… [+10679 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Natasha Turak",
            "title": "Russian gas will eventually return to Europe as nations 'forgive and forget,' Qatari energy minister says - CNBC",
            "description": "Gas exports from Russian state energy giant Gazprom to Switzerland and the EU fell by 55% in 2022, the company said earlier this month.",
            "url": "https://www.cnbc.com/2023/01/16/russian-gas-will-eventually-return-to-europe-as-nations-forgive-and-forget-qatari-energy-minister-says.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107090204-16581591352022-07-18t154329z_1450481610_rc2ays9n5bms_rtrmadp_0_ukraine-crisis-gazprom-nordstream-factbox.jpeg?v=1673867164&w=1920&h=1080",
            "publishedAt": "2023-01-16T11:06:04Z",
            "content": "On Friday, Russian energy supplier Gazprom said it would not resume its supply of natural gas to Germany through the key Nord Stream 1 pipeline, blaming a malfunctioning turbine.\r\nThe European Union'… [+4215 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "George Glover",
            "title": "Sam Bankman-Fried gaslit anyone that challenged him, ex-FTX US boss says - Markets Insider",
            "description": "Brett Harrison said Saturday that Bankman-Fried \"responded at times with gaslighting and manipulation\" when criticized.",
            "url": "https://markets.businessinsider.com/news/currencies/sam-bankman-fried-spiteful-insecure-gaslighting-ftx-bankruptcy-brett-harrison-2023-1",
            "urlToImage": "https://i.insider.com/63c51369b4171f001957f692?width=1200&format=jpeg",
            "publishedAt": "2023-01-16T10:24:48Z",
            "content": "Sam Bankman-Fried was a spiteful and insecure manager who reacted badly to any conflict or criticism, according to a former top executive for FTX's US-based operation.\r\nBrett Harrison, who was the pr… [+3335 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Shares rise, yen climbs as BOJ battles bond bears - Reuters.com",
            "description": "Shares firmed on Monday as optimism over corporate earnings and China's reopening offset concerns the Bank of Japan (BOJ) might temper its super-sized stimulus policy at a pivotal meeting this week, while a holiday in U.S. markets made for thin trading.",
            "url": "https://www.reuters.com/markets/global-markets-wrapup-1-pix-2023-01-16/",
            "urlToImage": "https://www.reuters.com/resizer/qvRJkm4M1HMVsNyLXeqw3jewEy4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q64YDSGG3NI73PLLRPIPKCNODI.jpg",
            "publishedAt": "2023-01-16T09:49:00Z",
            "content": "SYDNEY/LONDON, Jan 16 (Reuters) - Shares firmed on Monday as optimism over corporate earnings and China's reopening offset concerns the Bank of Japan (BOJ) might temper its super-sized stimulus polic… [+4731 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Tassia Sipahutar and Robert Brand",
            "title": "US Equity Futures Drop, European Stocks Waver: Markets Wrap - Yahoo Finance",
            "description": "(Bloomberg) -- US equity-index futures slipped, European stocks wavered and the dollar snapped a three-day losing streak as investors assessed whether a...",
            "url": "https://finance.yahoo.com/news/asia-stocks-set-support-wall-230359095.html",
            "urlToImage": "https://media.zenfs.com/en/bloomberg_markets_842/8297b29919cd5c5f25fe9c71ec137efc",
            "publishedAt": "2023-01-16T09:12:13Z",
            "content": "(Bloomberg) -- US equity-index futures slipped, European stocks wavered and the dollar snapped a three-day losing streak as investors assessed whether a rally in risk assets may be overdone given the… [+5027 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "William Suberg",
            "title": "BTC price cancels FTX losses — 5 things to know in Bitcoin this week - Cointelegraph",
            "description": "Bitcoin seals its highest weekly close since FTX, but BTC price action is due consolidation, say analysts.",
            "url": "https://cointelegraph.com/news/btc-price-cancels-ftx-losses-5-things-to-know-in-bitcoin-this-week",
            "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-01/0580dbce-3828-4806-903a-9b1abf5d5f9d.jpg",
            "publishedAt": "2023-01-16T08:59:27Z",
            "content": "Bitcoin (BTC) starts a new week at new 2023 highs, but still divides opinion after a blistering price rally.\r\nIn what is shaping up to be the antidote to last years slow bleed to lower prices, Januar… [+9592 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": "George Russell, Sarah Provan, Akila Quinio, Fergus Ryan, Oliver Ralph",
            "title": "Live news: Italian police arrest mafia boss Matteo Messina Denaro after 30-year hunt - Financial Times",
            "description": "",
            "url": "https://www.ft.com/content/ace203f0-cc4c-4b16-b798-9d7297a0e8d6",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fec9b566b-5de0-4dc9-8cfc-45022ca7f985.jpg?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2023-01-16T08:23:53Z",
            "content": "Are you ready for Blue Monday, the day that falls this year at the start of this week, calculated by former Cardiff university psychologist Cliff Arnall in 2005 to be the most depressing 24 hours in … [+5994 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CoinDesk"
            },
            "author": "Shaurya Malwa",
            "title": "Bitcoin Surge Causes Over $500M in Liquidations, Highest in 3 Months - CoinDesk",
            "description": "Crypto markets regained the $1 trillion capitalization mark for the first time since November.",
            "url": "https://www.coindesk.com/markets/2023/01/16/bitcoin-surge-causes-over-500m-in-liquidations-highest-in-3-months/",
            "urlToImage": "https://www.coindesk.com/resizer/tZiGr8CrXIfqj_fxfwu5KM1ckgs=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/XMM65HPHEREZBGGOOEPAK7EVLM.jpg",
            "publishedAt": "2023-01-16T07:46:00Z",
            "content": "Crypto markets surged to regain the $1 trillion market capitalization mark over the weekend amid signs of bottoming and a record number of short liquidations contributing to the uptick.\r\nNearly $500 … [+1693 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Teslarati"
            },
            "author": "Maria Merano",
            "title": "Tesla Roadster 2.0 to be better on “basically every metric” than prototype - TESLARATI",
            "description": "Tesla is developing the vehicle, and when it releases, it will be better in every metric than the supercar that was unveiled in late 2017.",
            "url": "https://www.teslarati.com/tesla-roadster-2-0-better-every-metric-vs-prototype/",
            "urlToImage": "https://www.teslarati.com/wp-content/uploads/2022/11/Tesla-profile-Roadster-3-scaled.jpg",
            "publishedAt": "2023-01-16T06:57:05Z",
            "content": "Its been a long time since Tesla unveiled the Roadster 2.0. But despite its long delay, Tesla Chief Designer Franz von Holzhausen recently hinted that the wait for the all-electric supercar will defi… [+2830 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "World Business Watch: Microsoft and Meta vacating offices in the U.S. | World News | English News - WION",
            "description": "Meta and Microsoft are separately vacating office buildings in Seattle and Bellevue in Washington. The move occurred due to change in the tech sector and sof...",
            "url": "https://www.youtube.com/watch?v=gGOybPjTJNg",
            "urlToImage": "https://i.ytimg.com/vi/gGOybPjTJNg/maxresdefault.jpg",
            "publishedAt": "2023-01-16T05:14:52Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "ScienceAlert"
            },
            "author": "AFP",
            "title": "The Genius Strategy That Made OpenAI The Hottest Startup in Tech - ScienceAlert",
            "description": "The hottest startup in Silicon Valley right now is OpenAI, the Microsoft-backed developer of ChatGPT, a much-hyped chatbot that can write a poem, college essay, or even a line of software code.",
            "url": "https://www.sciencealert.com/the-genius-strategy-that-made-openai-the-hottest-startup-in-tech",
            "urlToImage": "https://www.sciencealert.com/images/2023/01/DogWearingBeret.jpg",
            "publishedAt": "2023-01-16T04:33:50Z",
            "content": "The hottest startup in Silicon Valley right now is OpenAI, the Microsoft-backed developer of ChatGPT, a much-hyped chatbot that can write a poem, college essay, or even a line of software code.\r\nTesl… [+3456 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KSBW The Central Coast"
            },
            "author": "Caitlin Conrad",
            "title": "Corralitos community uses zipline to access their homes following storms - KSBW Monterey",
            "description": "A zipline has become a lifeline for a Corralitos community after their access bridge was washed away in storm waters this winter.",
            "url": "https://www.ksbw.com/article/corralitos-community-uses-zipline-to-access-their-homes-following-storms/42513539",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/img-7495-1673819641.jpg?crop=1.00xw:0.752xh;0,0.204xh&resize=1200:*",
            "publishedAt": "2023-01-16T04:04:00Z",
            "content": "CORRALITOS, Calif. —A zipline has become a lifeline for a Corralitos community after their access bridge was washed away in storm waters this winter. \r\nDarrell Hardy set up the line New Year's weeken… [+1525 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Brayden Lindrea",
            "title": "Scaramucci to invest in crypto firm founded by former FTX US boss - Cointelegraph",
            "description": "Anthony Scaramucci, the founder SkyBridge Capital, has confirmed that he’s personally investing in FTX US President Brett Harrison’s new crypto software start-up.",
            "url": "https://cointelegraph.com/news/scaramucci-to-invest-in-crypto-firm-founded-by-former-ftx-us-boss",
            "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-01/879c60d7-4ae2-4b5a-8799-5695da126a5e.jpg",
            "publishedAt": "2023-01-16T03:22:30Z",
            "content": "SkyBridge Capital founder Anthony Scaramucci is investing in a crypto company founded by the former president of FTX US.\r\nScaramucci told Bloomberg in an email that he would be investing his own pers… [+2386 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Benzinga"
            },
            "author": "Mehab Qureshi",
            "title": "Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant Long-Term Bulls' - Benzinga",
            "description": "Major coins traded green on Sunday buoyed by renewed investor confidence that the Federal Reserve is managing inflation successfully without pushing the economy into recession.",
            "url": "https://www.benzinga.com/markets/cryptocurrency/23/01/30424910/bitcoin-surges-above-21k-ethereum-dogecoin-rally-intact-analyst-says-this-could-awaken-som",
            "urlToImage": "https://cdn.benzinga.com/files/images/story/2023/01/15/kanchanara-4kjjezdyo3m-unsplash.jpg?width=1200&height=800&fit=crop",
            "publishedAt": "2023-01-16T02:50:45Z",
            "content": "Major coins traded green on Sunday buoyed by renewed investor confidence that the Federal Reserve is managing inflation successfully without pushing the economy into recession. \r\n<table><tr><th>Crypt… [+2581 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Ambar Warrick/Investing.com",
            "title": "Oil prices slip as markets await demand forecasts, economic clarity By Investing.com - Investing.com",
            "description": "Oil prices slip as markets await demand forecasts, economic clarity",
            "url": "https://www.investing.com/news/commodities-news/oil-prices-slip-as-markets-await-demand-forecasts-economic-clarity-2980681",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEC1N0KH_L.jpg",
            "publishedAt": "2023-01-16T02:12:00Z",
            "content": "By Ambar Warrick \r\nInvesting.com -- Oil prices fell on Monday after a sharp rally last week, as traders turned cautious and locked in some profits ahead of demand forecasts from the OPEC and the IEA,… [+2081 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "InsideEVs "
            },
            "author": "Tom Moloughney",
            "title": "Wyoming Moves To Ban Sales Of New Electric Vehicles By 2035 - InsideEVs ",
            "description": "We examine the draft legislation in the state of Wyoming that proposes a ban on selling new electric vehicles in the state by 2035.",
            "url": "https://insideevs.com/news/631229/wyoming-ban-electric-vehicle-sales/",
            "urlToImage": "https://cdn.motor1.com/images/mgl/g4AVy8/s1/wyoming-moves-to-ban-electric-cars.jpg",
            "publishedAt": "2023-01-16T01:47:00Z",
            "content": "Change is hard. Humans are creatures of habit and it's in our nature to avoid change. Transitioning our personal transportation fleet from vehicles that burn fossil fuels to plug in electric vehicles… [+4231 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Terrifying near-miss between passenger planes at JFK Airport - NBC News",
            "description": "The pilot of a Delta jet braked moments before colliding with an American Airlines plane. No one was hurt in the incident, but the Delta flight returned to t...",
            "url": "https://www.youtube.com/watch?v=4gXYGRj9Fm8",
            "urlToImage": "https://i.ytimg.com/vi/4gXYGRj9Fm8/maxresdefault.jpg",
            "publishedAt": "2023-01-16T01:00:03Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "WPVI-TV"
            },
            "author": null,
            "title": "Alcohol is now more expensive in Pennsylvania; PLCB cites inflation as the cause - WPVI-TV",
            "description": "The Pennsylvania Liquor Control Board approved the 4% increase last month.",
            "url": "https://6abc.com/pennsylvania-alcohol-price-increase-liquor-control-board-plcb-sales-pa/12706769/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/12706814_011523-wpvi-alcohol-increase-pa-6pm-CC-vid.jpg?w=1600",
            "publishedAt": "2023-01-16T00:49:05Z",
            "content": "PHILADELPHIA (WPVI) -- January 15 marks the first day of liquor and wine price increases for state-owned stores across Pennsylvania.\r\nThe Pennsylvania Liquor Control Board approved the 4% increase la… [+193 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Jihye Lee",
            "title": "Shenzhen stocks rise 2%, Asia markets mixed on cooled U.S. inflation outlook - CNBC",
            "description": "Markets in the Asia-Pacific traded mixed as expectations of cooled inflation in the U.S. lifted investor sentiment.",
            "url": "https://www.cnbc.com/2023/01/16/asia-pacific-us-sees-inflation-ease.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107178895-1673842163468-gettyimages-1336056736-vcg111344852237.jpeg?v=1673842237&w=1920&h=1080",
            "publishedAt": "2023-01-16T00:00:14Z",
            "content": "A slew of economic data is expected for the week of Jan. 16 including China's industrial output and gross domestic product as well as the Bank of Japan's rate decision.\r\nOn Monday, South Korea will p… [+1095 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Arjun Kharpal",
            "title": "Scaramucci sees bitcoin at $50,000 to $100,000 in 2-3 years as market hopes for bull run - CNBC",
            "description": "Investors expect 2023 to be a year of caution for cryptocurrencies, before a potential bull run that could begin in 2024.",
            "url": "https://www.cnbc.com/2023/01/16/bitcoin-price-prediction-2023-investors-see-12000-to-30000.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107178589-1673633202530-gettyimages-462419011-78050377.jpeg?v=1673824803&w=1920&h=1080",
            "publishedAt": "2023-01-15T23:20:03Z",
            "content": "After a tumultuous 2022, crypto investors are trying to figure out when the next bitcoin bull run could be.\r\nLast week, at a crypto conference in St. Moritz, Switzerland, CNBC spoke to industry insid… [+4218 chars]"
        }
    ]
    constructor() {
        super();
        console.log("I am from constructor to New")
        this.state = {
            article: this.articles,
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8d83912c5e294b1ba5abcc18763e8987"
        let data = await fetch('url');
        let parseData = await data.json();
        this.setState({ articles: parseData.articles });
    }
    render() {
        return (
            <>
                <h2 className="mt-3" style={{ textAlign: "center" , fontWeight:"bold" }}>Top News</h2>
                <div className=" row my-3 mx-1">
                    {this.state.article.map((element) => {

                        return <div className="col-sm-3 mb-3">
                            <New key={element.url} author={element.author} imageurl={element.urlToImage} title={element.title.slice(0, 80)} description={element.description.slice(0, 80)} url={element.url} />
                        </div>
                    })}


                </div>
            </>

        )

    }

}
export default Newitem;