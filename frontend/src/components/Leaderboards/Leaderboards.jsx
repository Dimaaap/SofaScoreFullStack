import React from 'react'
import "./Leaderboards.css";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Leaderboards = () => {
  return (
    <div className="leader-section">
        <div className="page-header">
            <h5 className="page-title">
                Таблиці лідерів
            </h5>
            <div className="btn-row">
                <div className="btn-container">
                   <button className="leader-btn active"
                    type="button">
                        Топ прогнозисти
                    </button> 
                </div>
                <div className="btn-container">
                    <button className="leader-btn"
                    type="button">
                        Топ вкладників
                    </button>
                </div>
                <div className="btn-container">
                    <button className="leader-btn"
                    type="button">
                        Топ редагувальників
                    </button>
                </div>
            </div>
        </div>
        <hr />
        <div className="page-body">
            <button type="button" className="more-info">
                <IoMdInformationCircleOutline size={25} />
            </button>
            <div className="leaderboards">
                <div className="user rank-1">
                    <span className="place">1</span>
                    <img src="https://userimage.sofascore.com/33714f959019ad547a3d45ee49379d1c.jpg"
                    alt="" width={50} height={50} />
                    <div className="details">
                        <div className="name">
                            Oumar Nama Dembele
                        </div>
                        <div className="score">+55.49</div>
                    </div>
                </div>
                <div className="user rank-2">
                    <span className="place">2</span>
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocJ69teA0U2akZ9cnw3qOO1bzPtSpQZIDv6lMzOps6tn27PP9g=s96-c" 
                    alt="" width={50} height={50} />
                    <div className="details">
                        <div className="name">
                            Degny Eraste
                        </div>
                        <div className="score">+54.18</div>
                    </div>
                </div>
                <div className="user rank-3">
                    <span className="place">3</span>
                    <img src="https://userimage.sofascore.com/310644463920ab0f31d00c6c3c84a06a.jpg" 
                    alt="" width={50} height={50} />
                    <div className="details">
                        <div className="name">Rafank</div>
                        <div className="score">+53.39</div>
                    </div>
                </div>
            </div>
            <div className="leaders-table">
                <div className="table-header">
                    <div className="table-left">
                        <button type="button" 
                        className="change-nums prev disabled">
                            &lt;
                        </button>
                    </div>
                    <div className="table-center">
                        <p>4-10</p>
                    </div>
                    <div className="table-right">
                        <button type="button"
                        className="change-nums next">
                            &gt;
                        </button>
                    </div>
                </div>
                <table className="user-rating">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th id="second-col">
                                Username
                            </th>
                            <th id="third-col">
                                Голоси
                            </th>
                            <th id="fourth-col">
                                Корекція
                            </th>
                            <th id="fifth-col">
                                VROI
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="user-place">
                                    <bdi className="user-position">
                                        4
                                    </bdi>
                                    <div className="user-standing">
                                        <span className="count">
                                            1
                                        </span>
                                        <svg width="8" 
                                        height="8" 
                                        viewBox="0 0 8 8" 
                                        fill="green" 
                                        className="standing-tendency positive">
                                            <path fill="green" 
                                            d="m4 0 4 6H0z" 
                                            fill-rule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="user-info">
                                    <img src="https://www.sofascore.com/static/images/placeholders/player.svg"
                                    width={15} height={15} />
                                    <span>Guest42517</span>
                                </div>
                            </td>
                            <td>31</td>
                            <td>58%</td>
                            <td>+53.66</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-place">
                                    <bdi className="user-position">
                                        5
                                    </bdi>
                                    <div className="user-stading">
                                        <span className="count">
                                            1
                                        </span>
                                        <svg width="8" 
                                        height="8" 
                                        viewBox="0 0 8 8" 
                                        fill="green" 
                                        className="standing-tendency positive">
                                            <path fill="green" 
                                            d="m4 0 4 6H0z" 
                                            fill-rule="evenodd">
                                            </path>
                                        </svg>
                                    </div>      
                                </div>
                            </td>
                            <td>
                                <div className="user-info">
                                    <img src="https://api.sofascore.app/api/v1/user-account/6505d82cbbe6afeeb9404ec8/chat-image"
                                    width={15} height={15} />
                                    <span>Oumar Nama Dembele</span>
                                </div>
                            </td>
                            <td>46</td>
                            <td>63%</td>
                            <td>+52.79</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-place">
                                    <bdi className="user-position">
                                        6.
                                    </bdi>
                                    <div className="user-standing">
                                        <span className="count">
                                            4
                                        </span>
                                        <svg width="8" 
                                        height="8" 
                                        viewBox="0 0 8 8" 
                                        fill="green" 
                                        className="standing-tendency positive">
                                            <path fill="green" 
                                            d="m4 0 4 6H0z" 
                                            fill-rule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="user-info">
                                    <img src="https://api.sofascore.app/api/v1/user-account/667607cf32466b88bba5cef0/chat-image"
                                    width={15} height={15} />
                                    <span>Degny eraste martin Boguy</span>
                                </div>
                            </td>
                            <td>
                                34
                            </td>
                            <td>76%</td>
                            <td>+51.35</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-place">
                                    <bdi className="user-position">
                                        7.
                                    </bdi>
                                    <div className="user-standing">
                                        <span className="count">1</span>
                                        <svg width="8" 
                                        height="8" 
                                        viewBox="0 0 8 8" 
                                        fill="green" 
                                        className="standing-tendency positive">
                                            <path fill="green" 
                                            d="m4 0 4 6H0z" 
                                            fill-rule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="user-info">
                                    <img src="https://api.sofascore.app/api/v1/user-account/66705358ce1830c5ebfbfaba/chat-image"
                                    width={15} height={15} />
                                    <span>Maxime Bidias</span>
                                </div>
                            </td>
                            <td>52</td>
                            <td>65%</td>
                            <td>+51.01</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-place">
                                    <bdi className="user-position">
                                        8.
                                    </bdi>
                                    <div className="user-standing">
                                        <span className="count">4</span>
                                        <svg width="8" 
                                        height="8" 
                                        viewBox="0 0 8 8" 
                                        fill="red" 
                                        className="user-tendency negative"><path fill="red" d="m4 8 4-6H0z" 
                                        fill-rule="evenodd">
                                        </path>
                                        </svg>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="user-info">
                                    <img src="https://api.sofascore.app/api/v1/user-account/635f35c745a584e2c2777942/chat-image"
                                    width={15} height={15} />
                                    <span>why I`m banned? HELP!</span>
                                </div>
                            </td>
                            <td>262</td>
                            <td>62%</td>
                            <td>+50.9</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-place">
                                    <bdi className="user-position">
                                        9.
                                    </bdi>
                                    <div className="user-standing">
                                        <span className="count">6</span>
                                        <svg width="8" 
                                        height="8" 
                                        viewBox="0 0 8 8" 
                                        fill="red" 
                                        className="user-tendency negative"><path fill="red" d="m4 8 4-6H0z" 
                                        fill-rule="evenodd">
                                        </path>
                                        </svg>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="user-info">
                                    <img src="https://api.sofascore.app/api/v1/user-account/56f0f89c688c3c9ad49a6803/chat-image" 
                                    width={15} height={15}/>
                                    <span>Bartek Polesiak</span>
                                </div>
                            </td>
                            <td>218</td>
                            <td>60%</td>
                            <td>+50.84</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-place">
                                    <bdi className="user-position">
                                        10.
                                    </bdi>
                                    <div className="user-standing">
                                        <span className="count">1</span>
                                        <svg width="8" 
                                        height="8" 
                                        viewBox="0 0 8 8" 
                                        fill="green" 
                                        className="standing-tendency positive">
                                            <path fill="green" 
                                            d="m4 0 4 6H0z" 
                                            fill-rule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="user-info">
                                    <img src="https://api.sofascore.app/api/v1/user-account/6092632cdc01f687a6869ce8/chat-image"
                                    width={15} height={15} />
                                    <span>Bilel Wadia290</span>
                                </div>
                            </td>
                            <td>103</td>
                            <td>70%</td>
                            <td>+49.37</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Leaderboards
