import { Link } from "react-router-dom";
import styles from "./css/section_typeA.module.css";
import { useState, useEffect } from "react";

function Section_typeA({ data = [] }) {
  // TO DO
  // 1. 지금은 버튼만으로 슬라이드 이동이 가능한데, 드래그로도 가능하게 만들어야 함.
  // 2. 반응형 웹 디자인

  // 받은 data 전처리 (2개씩 그룹핑)
  const groups = [];  // groups = [ [data1, data2], [data3, data4], ... ]
  for (let i = 0; i < data.length; i += 2) {
    groups.push(data.slice(i, i + 2));
  }

  // ---------------------------------------------------------
  // 1. 화면 크기에 따라 보여지는 개수 계산 로직 
  // ---------------------------------------------------------
  const [itemsPerSlide, setItemsPerSlide] = useState(2);
  const slideCount = Math.ceil(groups.length / itemsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;  // 현재 브라우저의 너비

      if (width < 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(2);
      }
    };

    handleResize(); // 컴포넌트 처음 뜰 때 한 번 실행

    window.addEventListener("resize", handleResize);  // 화면 크기 바뀔 때마다 실행되도록 리스너 부착

    // 뒷정리 (Cleanup): 컴포넌트 사라질 때 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ---------------------------------------------------------
  // 2. 슬라이드 이동 효과 구현
  // ---------------------------------------------------------
  const [curSlide, SetCurSlide] = useState(0);
  const [transAmount, SetTransAmount] = useState(0);

  useEffect(() => {
    SetTransAmount(curSlide * (-101.31));
  }, [curSlide]);

  return (
    <div className={styles.top_container}>
      {/* 1. Title Area */}
      <div className={styles.ResearchArea_header_wrapper}>
        <h2 className={styles.ResearchArea_header}>Research areas</h2>
      </div>

      {/* 2. Carousel Slider Area */}
      <div className={styles.carousel_slider}>
        <div className={styles.flickity_viewport}>
          <div
            className={styles.flickity_slider}
            style={{ transform: `translateX(${transAmount}%)` }}
          >

            {groups.map((group, groupIdx) => (
              <div
                key={groupIdx}
                className={styles.flickity_group}
              >
                {group.map((item) => (
                  <div key={item.id} className={styles.ResearchAreaCard}>
                    <Link className={styles.ResearchAreaCard_link} to={item.link}>
                      <div className={styles.ResearchAreaCard_media}>
                        <picture>
                          <img data-image-size="mediumIcon" alt={`${item.title}.svg`} width="48" height="48" src={item.media_source} />
                        </picture>
                      </div>
                      <div className={styles.ResearchAreaCard_content}>
                        <div className={styles.ResearchAreaCard_title}>
                          {item.title}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <button
          className={`${styles.flickity_button} ${styles.flickity_prev_next_button} ${styles.previous}`}
          onClick={() => SetCurSlide(curSlide - 1)}
          style={curSlide === 0 ? { display: 'none' } : null}
        >
          <svg className={styles.flickity_button_icon} viewBox="0 0 100 100">
            <title>Previous</title>
            <path d="M0.6,0.3c-0.4,0.4-0.4,1,0,1.4L5.8,7l-5.2,5.2c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.5-6.5L8.7,7L8.5,6.8 L2,0.3C1.6-0.1,1-0.1,0.6,0.3z" transform="translate(100, 100) rotate(180)"></path>
          </svg>
        </button>
        <button
          className={`${styles.flickity_button} ${styles.flickity_prev_next_button} ${styles.next}`}
          onClick={() => SetCurSlide(curSlide + 1)}
          style={curSlide === slideCount-1 ? { display: 'none' } : null}
        >
          <svg className={styles.flickity_button_icon} viewBox="0 0 100 100">
            <title>Next</title>
            <path d="M0.6,0.3c-0.4,0.4-0.4,1,0,1.4L5.8,7l-5.2,5.2c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.5-6.5L8.7,7L8.5,6.8 L2,0.3C1.6-0.1,1-0.1,0.6,0.3z" transform="translate(100, 100) rotate(180)"></path>
          </svg>
        </button>
        <div className={styles.flickity_page_dots}>
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              className={`${styles.flickity_page_dot}  ${index === curSlide ? styles.is_selected : ""}`}
              onClick={() => SetCurSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_typeA;