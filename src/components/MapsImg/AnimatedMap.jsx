import styles from "./AnimatedMap.module.css";

const AnimatedMap = () => {
  const mapImage = "./maps.png";
  return (
    <div className="bg-slate-100">
      <div className={styles.container}>
        <svg
          className={styles.mySvg}
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gambar peta */}
          <image href={mapImage} width="800" height="600" alt="indonesia"/>

          {/* aceh */}
          <circle
            className={styles.animatedNode}
            cx="15"
            cy="180"
            r="5"
            fill="green"
          />
          {/* batam */}
          <circle
            className={styles.animatedNode}
            cx="140"
            cy="270"
            r="5"
            fill="green"
          />
          {/* padang */}
          <circle
            className={styles.animatedNode}
            cx="90"
            cy="250"
            r="5"
            fill="green"
          />
          {/* Lampung */}
          <circle
            className={styles.animatedNode}
            cx="160"
            cy="350"
            r="5"
            fill="green"
          />
          {/* Jakarta */}
          <circle
            className={styles.animatedNode}
            cx="200"
            cy="380"
            r="5"
            fill="green"
          />
          {/* Bandung */}
          <circle
            className={styles.animatedNode}
            cx="250"
            cy="395"
            r="5"
            fill="green"
          />
          {/* semarang */}
          <circle
            className={styles.animatedNode}
            cx="280"
            cy="390"
            r="5"
            fill="green"
          />
          {/* Madura */}
          <circle
            className={styles.animatedNode}
            cx="355"
            cy="410"
            r="5"
            fill="green"
          />

          {/* kalimantan*/}
          <circle
            className={styles.animatedNode}
            cx="250"
            cy="250"
            r="5"
            fill="green"
          />
          {/* kalimantan - barat*/}
          <circle
            className={styles.animatedNode}
            cx="290"
            cy="300"
            r="5"
            fill="green"
          />
          {/* kalimantan - Utara*/}
          <circle
            className={styles.animatedNode}
            cx="380"
            cy="280"
            r="5"
            fill="green"
          />
          {/* sulawesi*/}
          <circle
            className={styles.animatedNode}
            cx="425"
            cy="360"
            r="5"
            fill="green"
          />
          {/* sulawesi - Barat*/}
          <circle
            className={styles.animatedNode}
            cx="425"
            cy="295"
            r="5"
            fill="green"
          />
          {/* sulawesi - selatan*/}
          <circle
            className={styles.animatedNode}
            cx="480"
            cy="360"
            r="5"
            fill="green"
          />
          {/* sulawesi utara */}
          <circle
            className={styles.animatedNode}
            cx="530"
            cy="215"
            r="5"
            fill="green"
          />
          {/* maluku utara */}
          <circle
            className={styles.animatedNode}
            cx="570"
            cy="250"
            r="5"
            fill="green"
          />
          {/* maluku Selatan */}
          <circle
            className={styles.animatedNode}
            cx="570"
            cy="330"
            r="5"
            fill="green"
          />
          {/* Papua Barat */}
          <circle
            className={styles.animatedNode}
            cx="650"
            cy="290"
            r="5"
            fill="green"
          />
          {/* Papua nugini */}
          <circle
            className={styles.animatedNode}
            cx="790"
            cy="320"
            r="5"
            fill="green"
          />
          {/* Bali*/}
          <circle
            className={styles.animatedNode}
            cx="400"
            cy="420"
            r="5"
            fill="green"
          />
          {/* lombok*/}
          <circle
            className={styles.animatedNode}
            cx="500"
            cy="440"
            r="5"
            fill="green"
          />

          {/*JALUR LINTAS FIBER*/}
          {/* Batam ke Lampung */}
          <path
            className={styles.animatedPath3}
            d="M140 270 T 160 350"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Kalimantan ke Lampung */}
          <path
            className={styles.animatedPath3}
            d="M380 280 T 160 350"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />

          {/* Aceh ke Lampung */}
          <path
            className={styles.animatedPath}
            d="M15 180 Q 20 180, 100 180 T 160 350"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Jakarta ke kalimantan */}
          <path
            className={styles.animatedPath3}
            d="M200 380 T 250 250"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Jakarta ke kalimantan barat */}
          <path
            className={styles.animatedPath}
            d="M200 380 T 290 300"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Jakarta ke Madura */}
          <path
            className={styles.animatedPath}
            d="M200 380 Q 280 350,330 350 T 355 410"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Jakata ke Padang */}
          <path
            className={styles.animatedPath3}
            d="M200 380 Q 200 230, 150 230 T 90 250"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Padang ke Kalimantan utara */}
          <path
            className={styles.animatedPath}
            d="M90 250 Q 250 200, 300 200 T 380 280"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Sulawesi Barat ke maluku utara */}
          <path
            className={styles.animatedPath2}
            d="M425 295 Q 420 300, 450 300 T 570 250"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Maluku utara ke Sulawesi selatan */}
          <path
            className={styles.animatedPath3}
            d="M570 250 T 480 360"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Maluku utara ke Surabaya */}
          <path
            className={styles.animatedPath}
            d="M570 250 T 280 390"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Bali ke Lombok */}
          <path
            className={styles.animatedPath2}
            d="M400 420 Q 420 400,460 400 T 500 440"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Bali ke Papua nugini */}
          <path
            className={styles.animatedPath}
            d="M400 420 Q 400 390, 560 350 T 790 320"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Maluku ke Papua barat */}
          <path
            className={styles.animatedPath2}
            d="M570 330 T 790 320"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Papua nugini ke Papua barat */}
          <path
            className={styles.animatedPath}
            d="M790 320 T 650 290"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Papua nugini ke Lombok */}
          <path
            className={styles.animatedPath3}
            d="M790 320 Q 550 350, 500 400 T 500 440"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />

          {/* Aceh ke Sulawesi utara */}
          <path
            className={styles.animatedPath2}
            d="M15 180 Q 180 110, 250 110 T 530 215"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Sulawesi utara ke Aceh */}
          <path
            className={styles.animatedPath}
            d="M530 215 Q 250 110, 180 110 T 15 180"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />

          {/* sulawesi ke Jakarta */}
          <path
            className={styles.animatedPath}
            d="M530 215 Q 320 260, 280 290 T 200 380"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />

          <path
            className={styles.animatedPath2}
            d="M200 380 Q 300 300, 350 300 T 425 360"
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedMap;
