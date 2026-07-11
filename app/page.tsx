"use client";

import { useState } from "react";

type Plan = "ai" | "human";

const plans = {
  ai: {
    eyebrow: "AI CAREER CALL",
    name: "커리어 AI",
    price: "29,000",
    copy: "부담 없이, 내 페이스대로",
    features: ["월 1회 AI 전화 인터뷰 (20분)", "이력서·경력기술서 최신화", "업데이트 PDF 이메일 발송"],
  },
  human: {
    eyebrow: "EXPERT CARE",
    name: "커리어 전문가",
    price: "59,000",
    copy: "사람과 함께, 더 날카롭게",
    features: ["월 1회 전문가 전화 인터뷰 (30분)", "이력서·경력기술서·포트폴리오 PPT", "커리어 사이트 업데이트 가이드"],
  },
};

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function choosePlan(plan: Plan) {
    setSelectedPlan(plan);
    setSubmitted(false);
    if (typeof window !== "undefined") {
      const key = `lazyresume_click_${plan}`;
      localStorage.setItem(key, String(Number(localStorage.getItem(key) || 0) + 1));
      window.history.replaceState(null, "", `#${plan}-plan`);
    }
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="게으른 이력서 홈">
          <span className="brand-mark">L</span>
          <span>게으른 이력서</span>
        </a>
        <a className="nav-link" href="#how">어떻게 작동하나요?</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="kicker"><span className="live-dot" /> MONTHLY CAREER RESET</p>
          <h1>이력서 업데이트,<br /><em>전화 한 통이면</em> 끝.</h1>
          <p className="hero-lede">이직은 하고 싶은데, 주말에 이력서 열기조차 귀찮으셨죠?<br />이번 달에 한 일을 편하게 말하면, 우리가 문서로 남겨드려요.</p>
          <a className="hero-cta" href="#plans">내 플랜 찾아보기 <span>↓</span></a>
          <div className="proof-row"><span className="avatar-stack"><i>J</i><i>M</i><i>S</i></span><span>매달 미루던 사람들의<br /><strong>20분 커리어 루틴</strong></span></div>
        </div>
        <div className="phone-card" aria-label="월간 AI 전화 인터뷰 미리보기">
          <div className="phone-top"><span>게으른 이력서</span><span className="signal">●●●</span></div>
          <div className="call-status"><div className="wave"><b /><b /><b /><b /><b /></div><p>이번 달의 나를<br /><strong>들려주세요</strong></p><small>00:12:48</small></div>
          <div className="quote"><span>AI</span><p>“이번 달에 가장<br />뿌듯했던 일은 뭐였어요?”</p></div>
          <div className="phone-actions"><button aria-label="음소거">⌁</button><button className="end-call" aria-label="통화 종료">×</button><button aria-label="스피커">◉</button></div>
        </div>
      </section>

      <section className="marquee" aria-label="서비스 가치"><div>말하기만 하세요　✳　우리가 기록할게요　✳　한 달에 한 번　✳　커리어는 쌓이니까　✳</div></section>

      <section className="pain shell" id="how">
        <div className="section-label">01 — WHY LAZY</div>
        <div className="pain-grid"><h2>경력은 매달 쌓이는데,<br /><span>이력서는 멈춰있으니까.</span></h2><div><p>바빠서 미루고, 막상 쓰려면 뭘 했는지 기억나지 않고. 결국 이직할 때마다 처음부터 다시 시작합니다.</p><p className="accent-line">당신이 할 일은 <strong>전화를 받는 것</strong> 딱 하나예요.</p></div></div>
        <div className="steps"><div><span>01</span><h3>기억 꺼내기</h3><p>친구와 통화하듯<br />이번 달의 일을 말해요.</p></div><div><span>02</span><h3>전문가가 정리</h3><p>성과를 매력적인<br />문장과 구조로 바꿔요.</p></div><div><span>03</span><h3>내 문서에 반영</h3><p>업데이트된 이력서를<br />메일로 받아요.</p></div></div>
      </section>

      <section className="plans shell" id="plans">
        <div className="section-label">02 — PICK YOUR CALL</div>
        <div className="plans-heading"><h2>나에게 맞는<br /><em>전화 한 통</em>을 골라보세요.</h2><p>정식 출시 전, 얼리버드 50명 한정<br />첫 달 40% 할인으로 시작합니다.</p></div>
        <div className="plan-grid">
          {(Object.keys(plans) as Plan[]).map((id) => { const plan = plans[id]; return <article className={`plan-card ${id === "human" ? "featured" : ""}`} key={id}>
            {id === "human" && <div className="popular">MOST POPULAR</div>}
            <p className="plan-eyebrow">{plan.eyebrow}</p><h3>{plan.name}</h3><p className="plan-copy">{plan.copy}</p>
            <div className="price"><span>월</span> {plan.price}<small>원</small></div>
            <ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
            <button className="plan-button" onClick={() => choosePlan(id)}>이 플랜으로 시작하기 <span>↗</span></button>
          </article> })}
        </div>
        <p className="footnote">* 지금은 수요 조사 단계입니다. 버튼을 누르면 결제되지 않고, 얼리버드 대기 신청으로 연결됩니다.</p>
      </section>

      <section className="closing shell"><p className="kicker">YOUR FUTURE SELF WILL THANK YOU</p><h2>이번 달의 나를<br /><em>놓치지 마세요.</em></h2><a className="hero-cta" href="#plans">전화 한 통 예약하기 <span>→</span></a></section>

      <footer className="footer shell"><span>© 2026 lazyresume</span><span>매달 한 통, 나를 업데이트하는 시간</span><span>instagram @lazyresume</span></footer>

      {selectedPlan && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedPlan(null)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelectedPlan(null)} aria-label="닫기">×</button>{submitted ? <><div className="success-icon">✓</div><h2>신청이 접수됐어요.</h2><p>출시 소식과 얼리버드 안내를 가장 먼저 보내드릴게요.</p><button className="modal-submit" onClick={() => setSelectedPlan(null)}>확인</button></> : <><p className="plan-eyebrow">{plans[selectedPlan].name} · 얼리버드</p><h2 id="modal-title">출시 알림을<br />가장 먼저 받아보세요.</h2><p>아직 결제되지 않아요. 수요 조사와 출시 알림을 위한 신청입니다.</p><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}><label>이메일 주소<input type="email" required placeholder="you@email.com" /></label><label className="check"><input type="checkbox" required /> 정기 전화 인터뷰 관련 안내를 받아볼게요.</label><button className="modal-submit" type="submit">{plans[selectedPlan].name} 대기 신청하기 <span>↗</span></button></form></>}</div></div>}
    </main>
  );
}
