import React from "react";
import Header from "@/app/components/header/Header.jsx";
import LateralBar from "@/app/components/LateralBar";
import styles from "./class_filme.module.css";

const ClassFilm = () => {
    return (
        <div className={styles.body}>
            <Header />
            <main>
                <section className={styles.filminho}>
                    <div className={styles.seta_volta}>
                        <button className={styles.black_button}>&#8592;</button>
                    </div>
                    <div className={styles.informacao}>
                        <div className={styles.mov_info}>
                            <div className={styles.detalhes}>
                                <div className={styles.part1}>
                                    <h1 className={styles.movie_titulo}>Nome do filme</h1>
                                    <div className={styles.movie_ava}>
                                        <span className={styles.rating_strela}>⭐</span>
                                        <span className={styles.rating_valor}>4,7</span>
                                    </div>
                                    <div className={styles.movi_imag}>
                                        <img alt="" />
                                    </div>
                                    <div className={styles.par2}>
                                        <div className={styles.mov_text}>
                                            <p><strong>Data de Lançamento:</strong></p>
                                            <p><strong>Sinopse:</strong></p>
                                            <p><strong>Diretor:</strong></p>
                                            <p><strong>Produtor:</strong></p>
                                            <p><strong>Elenco:</strong></p>
                                            <p><strong>Gênero:</strong></p>
                                            <div className={styles.movie_rating_badge}>
                                                <img className={styles.livr} src="img/AL.jpg" alt="Indicação livre" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.comments_secao}>
                                <h2>Comentários:</h2>
                                <div className={styles.comment_caixa}>
                                    {[...Array(5)].map((_, i) => (
                                        <div className={styles.coment} key={i}>
                                            <p>0 👍🏻</p>
                                        </div>
                                    ))}
                                    <div className={styles.adicionar_comment}>
                                        <input type="text" placeholder="Adicionar comentário" id="adcComen" />
                                        <button className={styles.enviar}>Enviar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.mod_remov_botao}>
                                <div className={styles.removerr}>
                                    <button className={styles.remove_botao}>Remover</button>
                                </div>
                                <a href="mod_sugs_filme.html">
                                    <div className={styles.modificarr}>
                                        <button className={styles.mod_button}>Modificar</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <LateralBar />
                </section>
            </main>
        </div>
    );
};

export default ClassFilm;
