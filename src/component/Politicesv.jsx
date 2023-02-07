import React from "react";
export class Politicesv extends React.Component {
    render() {
        let { title, description, imageUrl, newsUrl, author } = this.props;

        return (
            <>



                <div className="container">
                
                    <div className="card">
                        <div className="card-header">
                            <img src={!imageUrl?'https://image.cnbcfm.com/api/v1/image/107179843-1673998440397-gettyimages-1243657231-JAPAN_TANKAN.jpeg?v=1673999044&w=1920&h=1080':imageUrl} alt="rover" />
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
                                <a href={newsUrl} target="_blank"> <button type="button" className="btn btn-primary">Read more</button></a>

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