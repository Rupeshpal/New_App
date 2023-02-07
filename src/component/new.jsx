import React, { Component } from "react";
export class New extends Component {
    render() {
        let { title, description, imageurl, key, url, author } = this.props;

        return (
            <>


                
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <img src={imageurl} alt="rover" />
                        </div>
                        <div className="card-body">
                            <span className="tag tag-teal">{author}</span>
                            <h4>
                                {title}
                            </h4>
                            <p>
                                {description}
                            </p>
                            <div className="user">
                                <a href={url} target="_blank"> <button type="button" className="btn btn-primary">Read more</button></a>

                                <div className="user-info mx-3">
                                    <p>July Dec</p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>






            </>
        )
    }
}
export default New;