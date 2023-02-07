import React, { Component } from "react";
import { Technology_view } from "./Technology_view";
export class Technology extends React.Component {
    constructor() {
        super()
        this.state = {
            articles: [],
        }
    }
    async componentDidMount() {
        
        let url = "https://newsapi.org/v2/everything?q=football&from=2022-12-18&sortBy=publishedAt&apiKey=8d83912c5e294b1ba5abcc18763e8987";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }
    render() {

        return (
            <>
                <h1 style={{ textAlign: "center", color: "Navy " , fontWeight:"bold"}} className="Mb-1">Top Football New</h1>
                <div className=" row my-3 mx-5">
                    {this.state.articles.map((element) => {
                        return <div className="col-sm-3 mb-3">
                            <Technology_view title={element.title ? element.title.slice(0, 30) : ""}
                                description={element.description ? element.description.slice(0, 50) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} />
                        </div>
                    })}
                </div>
            </>

        )
    }
}