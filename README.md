# pre_onboarding 과제 1주차

[리펙토링 배포 페이지](https://silent10z.github.io/refactoring_wanted_pre_onboarding)


## Tab

1. 기존에 dom을 참조하기 위해서 queryselecter를 사용 했던 부분을 useRef를 활용해서 수정

## DropDown

1. INPUT 부분과 InputBox를 재활용 하여 props 넘기는 형식으로 작성
2. useRef를 이용하여 InputBox 컴포넌트 외부 클릭시 코인 리스트들이 나오지 안도록 변경

## INPUT

1. InputBox를 재활용 

## Toggle

1. 저번에 구현 못했었던 부분 div를 flex=1 로 두 구역으로 나누어 작성


```javascript

<div className={styles.toggleWarpper}>
        <button className={styles.underButton} onClick={onClickHandle} type='button' style={isClick?{color:"#000000"}:{color:"#eeeeee"}}>
          몰
        </button>
        <button className={styles.underButton} onClick={onClickHandle} type='button' style={!isClick?{color:"#000000"}:{color:"#eeeeee"}}>
          루?
        </button>
        <button className={styles.toggleButton} type='button' style={isClick ? { left: 0 } : { left: '50%' }}>
          {` `}
        </button>
      </div>


```
