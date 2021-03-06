import React from "react";
import * as Icon from "react-bootstrap-icons";
import JokesCard from "../CultureJokes/JokesCard";
import "../CultureJokes/jokescard.css";

function Jokes() {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn joke_btn" data-bs-toggle="modal" data-bs-target="#jokeModal">
                <Icon.EmojiLaughingFill size={30} />
                <div>
                    <p>Jokes</p>
                </div>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="jokeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <JokesCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jokes;
