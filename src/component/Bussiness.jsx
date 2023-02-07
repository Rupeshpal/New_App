// import React from "react";
// export class Bussiness extends React.Component{
//     render() {
//         return (
//             <div>
//                 h1dvb
//             </div>
//         );
//     }
// }

import React, { Component } from "react";
import { Bussinessv } from "./bussinessv";

export class Bussiness extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            // loading: true,
        }
    }
    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8d83912c5e294b1ba5abcc18763e8987";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }
    render() {

        return (
            <>
                <h1 style={{ textAlign: "center", color: "Navy " , fontWeight:"bold"}} className="Mb-1">Top Bussiness New</h1>
                <div className=" row my-3 mx-5">
                    {this.state.articles.map((element) => {
                        return <div className="col-sm-3 mb-3">
                            <Bussinessv title={element.title ? element.title.slice(0, 30) : ""}
                                description={element.description ? element.description.slice(0, 50) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} />
                        </div>
                    })}
                </div>
            </>

        )
    }
}