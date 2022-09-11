import { useLayoutEffect, useState, useRef } from "react";

const StudyUseLayoutEffect = () => {
    const [show, setShow] = useState(false);
    const popup = useRef(null);
    const button = useRef(null);

    // useEffect를 사용하면 비동기여서 화면에 팝업내용이 버튼 아래로 뜬 다음 25px아래로 이동함
    // useLayoutEffect는 동기적으로 작동해서 25px아래로 이동하는 styling을 먼저 실행 후 화면에 그려줌
    // 화면이 그려주는 것이 오래걸려서 깨질때 사용할 수 있지만, 동기적으로 작동하기 때문에 다른 코드가 지연됨
    // useEffect를 적절하게 사용해서 화면 깨지는 것을 막는 것을 React 공식 홈페이지에서 추천
    useLayoutEffect(() => {
        if (popup.current === null || button.current === null) {
            return;
        }
        const { bottom } = button.current.getBoundingClientRect();
        popup.current.style.top = `${bottom + 25}px`
    }, [show])

    return (
        <>
            <button ref={button} onClick={() => setShow(prev => !prev)}>
                {show ? '닫기' : '열기'}
            </button>
            {show && (
                <div style={{ position: 'absolute'}} ref={popup}>
                    팝업 내용
                </div>
            )}
        </>
    )
}

export default StudyUseLayoutEffect;
