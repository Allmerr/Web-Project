import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import "./project.css";
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import p5 from "../img/p5.jpg";
import p6 from "../img/p6.jpg";
import p7 from "../img/p7.jpg";
import p8 from "../img/p8.jpg";
import p9 from "../img/p9.jpg";
import p10 from "../img/p10.jpg";

export default function Project() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Project";
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    if (loading) {
        return (
            <div className="loading">
                <TailSpin height="100" width="100" color="grey" ariaLabel="loading" /> <p>Kevin is thinking</p>
            </div>
        );
    }

    return (
        <section className="project">
            <h1>
                <span className="underline">Projects</span>
            </h1>
            <div className="kotak-besar">
                <div className="kotak-kecil">
                    <img src={p1} alt="" />
                </div>
                <div className="kotak-kecil">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus.</p>
                    <div className="button-con">
                        <button>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </button>
                        <button>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                View
                            </a>
                        </button>
                    </div>
                </div>
                <div className="kotak-kecil">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus.</p>
                </div>
                <div className="kotak-kecil">
                    <img src={p2} alt="" />
                </div>
                <div className="kotak-kecil">
                    <img src={p3} alt="" />
                </div>
                <div className="kotak-kecil">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus.</p>
                </div>
                <div className="kotak-kecil">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus.</p>
                </div>
                <div className="kotak-kecil">
                    <img src={p4} alt="" />
                </div>
                <div className="kotak-kecil">
                    <img src={p5} alt="" />
                </div>
                <div className="kotak-kecil">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus.</p>
                </div>
                <div className="kotak-kecil">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus.</p>
                </div>
                <div className="kotak-kecil">
                    <img src={p6} alt="" />
                </div>
                <div className="kotak-kecil">
                    <img src={p7} alt="" />
                </div>
                <div className="kotak-kecil">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus.</p>
                </div>
                <div className="kotak-kecil">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus.</p>
                </div>
                <div className="kotak-kecil">
                    <img src={p8} alt="" />
                </div>
                <div className="kotak-kecil">
                    <img src={p9} alt="" />
                </div>
                <div className="kotak-kecil">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus.</p>
                </div>
                <div className="kotak-kecil">
                    <h3>lorem</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, doloribus.</p>
                </div>
                <div className="kotak-kecil">
                    <img src={p10} alt="" />
                </div>
            </div>
        </section>
    );
}
