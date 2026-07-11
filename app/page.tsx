"use client";

import { useState } from "react";

type Plan = "ai" | "human";

const plans: Record<Plan, { label: string; title: string; price: string; desc: string; items: string[] }> = {
  ai: { label: "AI 전화", title: "커리어 AI 플랜", price: "29,000원 / 월", desc: "부담 없는 나만의 커리어 AI가 매달 전화를 드립니다.", items: ["월 1회 20분 전화 인터뷰", "이력서·경력기술서 업데이트", "업데이트 PDF 이메일 발송"] },
  human: { label: "전문가 전화", title: "커리어 전문가 플랜", price: "59,000원 / 월", desc: "10년 차 커리어 전문가가 매달 당신의 성장을 정리합니다.", items: ["월 1회 30분 전문가 인터뷰", "이력서·경력기술서·포트폴리오", "다음 달 커리어 액션 플랜"] },
};

export default function Home() {
  const [selected, setSelected] = useState<Plan | null>(null);
  const [sent, setSent] = useState(false);

  function choose(plan: Plan) {
    setSelected(plan);
    setSent(false);
    if (typeof window !== "undefined") {
      const key = `lazyresume_click_${plan}`;
      localStorage.setItem(key, String(Number(localStorage.getItem(key) || 0) + 1));
      window.history.replaceState(null, "", `#${plan}`);
    }
  }

  return <main className="page"><header className="topbar"><a className="workspace" href="#top"><span>📄</span> 게으른 이력서</a><button className="search" aria-label="검색">⌕ <span>Search</span></button></header>
    <div className="content" id="top"><div className="hero-icon">📄</div><h1>게으른 이력서</h1><p className="lead">매달 AI 전화 한 통으로<br />이력서 업데이트를 끝내세요.</p>
      <div className="notice"><span>💡</span><p><strong>이번 달에 한 일을 편하게 들려주세요.</strong><br />친구와 통화하듯 20분만 이야기하면, 이력서·경력기술서·포트폴리오를 최신 상태로 정리해드립니다.</p></div>
      <nav className="quick-links"><a href="#why">왜 매달 해야 하나요?</a><a href="#how">어떻게 작동하나요?</a><a href="#plans">플랜과 가격</a></nav>

      <section className="doc-section" id="why"><h2>왜 매달 해야 하나요?</h2><p>이직할 때마다 지난 1~2년의 일을 떠올리며 이력서를 쓰는 건 너무 늦습니다. 작은 성과는 시간이 지나면 잊히고, 막상 문서 앞에 앉으면 무엇부터 써야 할지 막막해집니다.</p><p>게으른 이력서는 경력이 쌓이는 속도에 맞춰 매달 한 번 기록합니다. 당신은 말하고, 우리는 문서로 남깁니다.</p></section>
      <section className="doc-section" id="how"><h2>당신이 할 일은 전화 받기 하나입니다.</h2><div className="steps"><div><b>01</b><h3>온보딩</h3><p>기존 이력서나 링크드인 프로필을 바탕으로 커리어 베이스를 만듭니다.</p></div><div><b>02</b><h3>월간 20분 인터뷰</h3><p>이번 달의 업무와 성과를 편하게 이야기합니다. 정리해서 말하지 않아도 괜찮습니다.</p></div><div><b>03</b><h3>문서 업데이트</h3><p>대화 내용을 이력서와 경력기술서에 반영해 이메일로 보내드립니다.</p></div></div></section>
      <section className="doc-section output"><h2>매달 이런 결과물을 받습니다.</h2><div className="output-grid"><div><span>01</span><strong>이력서</strong><p>이번 달의 성과가 반영된 최신 이력서</p></div><div><span>02</span><strong>경력기술서</strong><p>업무와 임팩트를 구조화한 문서</p></div><div><span>03</span><strong>포트폴리오</strong><p>필요한 분에 한해 PPT까지 업데이트</p></div></div></section>
      <section className="doc-section" id="plans"><h2>플랜과 가격</h2><p className="muted">정식 출시 전 얼리버드 수요 조사 중입니다. 버튼을 눌러도 결제되지 않습니다.</p><div className="plan-list">{(Object.keys(plans) as Plan[]).map((id) => <article className="plan" key={id}><div className="plan-head"><div><span className="plan-label">{plans[id].label}</span><h3>{plans[id].title}</h3></div><strong>{plans[id].price}</strong></div><p>{plans[id].desc}</p><ul>{plans[id].items.map((item) => <li key={item}>✓ {item}</li>)}</ul><button onClick={() => choose(id)}>이 플랜 대기 신청하기 <span>→</span></button></article>)}</div></section>
      <section className="doc-section faq"><h2>자주 묻는 질문</h2><details><summary>통화 시간은 정해져 있나요?<span>+</span></summary><p>온보딩 후 서로 편한 날짜와 시간대를 정합니다. 늦은 저녁도 가능합니다.</p></details><details><summary>AI가 제 업무를 이해할 수 있나요?<span>+</span></summary><p>첫 통화에서 커리어 베이스를 만들고, 이후 대화와 지난 기록을 참고해 질문합니다.</p></details><details><summary>신청하면 바로 결제되나요?<span>+</span></summary><p>아니요. 현재는 수요 조사 단계이며 출시 알림을 위한 신청만 받습니다.</p></details></section>
      <section className="closing"><h2>이번 달의 나를<br />놓치지 마세요.</h2><button onClick={() => choose("ai")}>얼리버드 신청하기　→</button></section>
      <footer>© 2026 lazyresume　·　instagram @lazyresume</footer>
    </div>
    {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}><button className="close" onClick={() => setSelected(null)} aria-label="닫기">×</button>{sent ? <><div className="sent">✓</div><h2>신청이 접수됐어요.</h2><p>출시 소식과 얼리버드 안내를 보내드릴게요.</p><button onClick={() => setSelected(null)}>확인</button></> : <><span className="plan-label">{plans[selected].label}</span><h2>출시 소식을<br />가장 먼저 받아보세요.</h2><p>아직 결제되지 않습니다. 이메일만 남겨주세요.</p><form onSubmit={(e) => { e.preventDefault(); setSent(true); }}><input required type="email" placeholder="이메일 주소" aria-label="이메일 주소" /><label><input required type="checkbox" /> 정기 전화 안내를 받아볼게요.</label><button type="submit">대기 신청하기　→</button></form></>}</div></div>}
  </main>;
}
