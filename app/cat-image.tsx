"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

//コンポーネントの引数を定義する
type CatImageProps = {
    url: string;
};

//画像を表示するコンポーネント
export function CatImage({url}: CatImageProps){
    //useStateを使って状態を管理
    const [imageURL, setImageURL] = useState(url);

    //画像を取得する関数を定義
    const refreshImage = async ()=>{
        setImageURL(""); //初期化
        const image = await fetchImage();
        setImageURL(image.url);
    };

    return(
        <div className={styles.page}>
            {/*ボタンの表示*/}
            <button onClick={refreshImage} className={styles.button}>他のにゃんこも見る</button>
            {/*画像の表示*/}
            <div className={styles.frame}>
                {imageURL && <img src={imageURL} className={styles.img} />}
            </div>
        </div>
    );
}