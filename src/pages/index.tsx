import React from "react";
import IntroPage from "@/components/IntroPage"; // IntroPage 컴포넌트 불러오기
import { signOut, useSession } from "next-auth/react";

const App = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>; // 세션 상태 로딩 중 표시
  }

  if (!session) {
    // 비로그인 상태에서 IntroPage 렌더링
    return <IntroPage />;
  }

  // 로그인 상태에서 사용자 정보와 로그아웃 버튼 표시
  return (
    <div>
      <h1>Welcome, {session.user?.name}!</h1>
      <p>Your email: {session.user?.email}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default App;
