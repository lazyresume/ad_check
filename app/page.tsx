"use client";

import { useState } from "react";

type Plan = "ai" | "human";

const planCopy: Record<Plan, { name: string; price: string; desc: string; features: string[] }> = {
  ai: { name: "커리어 AI", price: "29,000", desc: "혼자 하는 것보다, 말로 꺼내는 게 쉬우니까", features: ["월 1회 20분 AI 전화", "이력서·경력기술서 업데이트", "PDF 이메일 발송"] },
  human: { name: "커리어 전문가", price: "59,000", desc: "내 이야기를 더 선명한 언어로 바꾸니까", features: ["월 1회 30분 전문가 전화", "이력서·경력기술서·포트폴리오", "다음 달 액션 플랜"] },
};

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const choose = (plan: Plan) => {
    setSelectedPlan(plan);
    setSubmitted(false);
    if (typeof window !== "undefined") {
      const key = `lazyresume_click_${plan}`;
      localStorage.setItem(key, String(Number(localStorage.getItem(key) || 0) + 1));
      window.history.replaceState(null, "", `#${plan}`);
    }
  };

  return <main>
    <nav className="nav shell"><a className="logo" href="#top"><span className="logo-mark">L</span><span>게으른 이력서</span></a><a className="nav-quiet" href="#plans">플랜 보기</a></nav>

    <section className="hero-soft shell" id="top"><div className="hero-soft-copy"><p className="overline">A LITTLE TIME FOR YOUR CAREER</p><h1>이번 달의 나를<br /><span>가볍게 돌보는</span><br />전화 한 통.</h1><p className="hero-text">일은 계속 쌓이는데, 이력서는 멈춰있나요?<br />친구와 통화하듯 이번 달의 일을 들려주세요.<br />우리가 당신의 커리어 기록을 이어갈게요.</p><a className="pill-cta" href="#routine">어떻게 하는지 보기 <span>↓</span></a></div><div className="hero-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orb-card"><span className="orb-sun">✦</span><p>오늘도<br /><strong>잘하고 있어요.</strong></p><small>monthly check-in</small></div><div className="float-note note-one">20 min<br /><b>just for you</b></div><div className="float-note note-two">이번 달의<br /><b>작은 성취</b></div></div></section>

    <section className="trust-strip"><div className="shell trust-inner"><span>매달 한 번</span><i>•</i><span>부담 없이</span><i>•</i><span>내 커리어를 기억하는 시간</span></div></section>

    <section className="routine shell" id="routine"><div className="section-top"><p className="overline">A SIMPLE MONTHLY ROUTINE</p><h2>잘하려고 애쓰지 않아도<br /><span>기록은 남을 수 있어요.</span></h2><p>매달 정해진 날, 20분의 전화를 받습니다.<br />그날의 기분과 성과를 편하게 말하면 충분해요.</p></div><div className="routine-cards"><article className="routine-card lavender"><div className="routine-icon">☼</div><small>STEP 01</small><h3>말하기</h3><p>“이번 달에는 이런 일을 했어요.”<br />정리하지 않아도 괜찮아요.</p><a href="#plans">더 알아보기　→</a></article><article className="routine-card peach"><div className="routine-icon">✎</div><small>STEP 02</small><h3>정리하기</h3><p>흩어진 이야기를<br />성과가 보이는 문장으로.</p><a href="#plans">더 알아보기　→</a></article><article className="routine-card mint"><div className="routine-icon">♡</div><small>STEP 03</small><h3>이어가기</h3><p>업데이트된 문서와 함께<br />다음 달을 시작해요.</p><a href="#plans">더 알아보기　→</a></article></div></section>

    <section className="quote-band"><div className="shell quote-layout"><div className="quote-circle">“</div><blockquote>이직할 때만 나를<br />돌아보지 않도록.</blockquote><p>한 달의 나를 알아주는 작은 습관이<br />다음 기회를 준비합니다.</p></div></section>

    <section className="difference shell"><div className="section-top"><p className="overline">WHY IT WORKS</p><h2>이력서를 쓰는 일이 아니라,<br /><span>나를 잊지 않는 일.</span></h2></div><div className="difference-grid"><div><strong>01</strong><h3>기억이 생생할 때</h3><p>연말에 몰아서 쓰면 사라지는 작은 성취를, 매달 가장 생생할 때 남겨요.</p></div><div><strong>02</strong><h3>말로 먼저 꺼내니까</h3><p>빈 문서 앞에서 멈추지 않고, 질문에 답하며 자연스럽게 이야기를 시작해요.</p></div><div><strong>03</strong><h3>다음 달의 내가 보니까</h3><p>지난 기록이 쌓일수록 나만의 성장 패턴과 다음 선택이 선명해져요.</p></div></div></section>

    <section className="plans-soft shell" id="plans"><div className="section-top"><p className="overline">FIND YOUR RHYTHM</p><h2>나에게 맞는<br /><span>커리어 루틴을 골라보세요.</span></h2><p>지금은 얼리버드 수요 조사 기간입니다.<br />버튼을 눌러도 결제되지 않아요.</p></div><div className="soft-plan-grid">{(Object.keys(planCopy) as Plan[]).map((id) => { const plan = planCopy[id]; return <article className={`soft-plan ${id === "human" ? "dark-plan" : ""}`} key={id}>{id === "human" && <span className="plan-tag">MOST POPULAR</span>}<p className="overline">{id === "ai" ? "A QUIET AI CALL" : "A WARM HUMAN CALL"}</p><h3>{plan.name}</h3><p className="plan-desc">{plan.desc}</p><div className="soft-price"><small>월</small>{plan.price}<b>원</b></div><ul>{plan.features.map((item) => <li key={item}>✓　{item}</li>)}</ul><button className="soft-button" onClick={() => choose(id)}>이 루틴 시작하기 <span>→</span></button></article>; })}</div></section>

    <section className="faq shell"><p className="overline">A FEW QUESTIONS</p><h2>시작하기 전에<br /><span>궁금한 것들.</span></h2><div className="faq-list"><details><summary>통화는 꼭 정해진 시간에 해야 하나요?<span>+</span></summary><p>온보딩 후 서로 편한 날짜와 시간대를 정합니다. 늦은 저녁도 괜찮아요.</p></details><details><summary>AI가 제 일을 잘 이해할 수 있나요?<span>+</span></summary><p>첫 통화에서 커리어 베이스를 만들고, 매달 지난 기록을 참고해 질문합니다.</p></details><details><summary>신청하면 바로 결제되나요?<span>+</span></summary><p>아니요. 현재는 수요 조사 단계이며, 출시 알림을 위한 신청만 받습니다.</p></details></div></section>

    <section className="last-soft"><div className="shell last-inner"><p className="overline">TAKE A BREATH</p><h2>당신의 커리어에도<br /><span>돌봄이 필요하니까.</span></h2><a className="pill-cta" href="#plans">내 루틴 시작하기 <span>→</span></a></div></section>
    <footer className="footer shell"><span>© 2026 lazyresume</span><span>매달 한 통, 나를 업데이트하는 시간</span><span>@lazyresume</span></footer>

    {selectedPlan && <div className="modal-backdrop" onClick={() => setSelectedPlan(null)}><div className="modal-soft" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelectedPlan(null)} aria-label="닫기">×</button>{submitted ? <><div className="success-soft">✓</div><h2>신청이 접수됐어요.</h2><p>출시 소식과 얼리버드 안내를 보내드릴게요.</p><button className="soft-button" onClick={() => setSelectedPlan(null)}>확인</button></> : <><p className="overline">{planCopy[selectedPlan].name}</p><h2>조금 더 가볍게<br />시작해볼까요?</h2><p>아직 결제되지 않아요. 이메일만 남겨주세요.</p><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}><input required type="email" placeholder="이메일 주소" aria-label="이메일 주소" /><label><input required type="checkbox" /> 정기 전화 안내를 받아볼게요.</label><button className="soft-button" type="submit">얼리버드 신청하기 <span>→</span></button></form></>}</div></div>}
  </main>;
}
