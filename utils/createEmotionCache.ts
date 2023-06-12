import createCache from "@emotion/cache";

const isBrowser = typeof document !== "undefined";

// 클라이언트 측에서 <head> 상단에 메타 태그를 생성하고 insertionPoint로 설정합니다.
// 이렇게 하면 MUI 스타일이 먼저 로드됩니다.
// 개발자가 CSS 모듈과 같은 다른 스타일링 솔루션으로 MUI 스타일을 쉽게 재정의할 수 있습니다.
export default function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: "mui-style", insertionPoint });
}
