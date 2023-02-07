import React, { Component } from "react";
import { Politicesv } from "./Politicesv";
export class Politice extends React.Component {
    constructor() {
        super()
        this.state = {
            articles: [],
        }
    }
    async componentDidMount() {
      
        let url = "https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7";
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({ articles: parsedData.articles })
    }
    render() {

        return (
            <>
                <h1 style={{ textAlign: "center", color: "Navy " , fontWeight:"bold"}} className="Mb-1">Top Politices New</h1>
                <div className=" row my-3 mx-5">
                    {this.state.articles.map((element) => {
                        return <div className="col-sm-3 mb-3">
                            <Politicesv title={element.title ? element.title.slice(0, 30) : ""}
                                description={element.description ? element.description.slice(0, 50) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} />
                        </div>
                    })}
                </div>
            </>

        )
    }
}