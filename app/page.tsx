"use client";

import { useEffect, useState } from "react";

type Plan = "ai" | "human";
const plans: Record<Plan, { label: string; title: string; price: string; desc: string; items: string[] }> = {
  ai: { label: "AI 전화", title: "커리어 AI", price: "29,000원 / 월", desc: "부담 없는 AI가 매달 당신의 일을 묻습니다.", items: ["월 1회 정기 AI 전화", "지난 프로젝트 진행 상황 정리", "이력서·경력기술서·포트폴리오 업데이트", "이직에 바로 사용할 수 있는 PDF 파일 전송"] },
  human: { label: "전문가 전화", title: "커리어 전문가", price: "59,000원 / 월", desc: "10년 차 커리어 전문가가 성장을 정리합니다.", items: ["월 1회 정기 전문가 전화", "이력서·경력기술서·포트폴리오", "이직에 바로 사용할 수 있는 PDF 파일 전송", "다음 달 커리어 액션 플랜"] },
};

export default function Home() {
  const [selected, setSelected] = useState<Plan | null>(null);
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  const choose = (plan: Plan) => {
    if (typeof window !== "undefined") {
      const key = `lazyresume_click_${plan}`;
      localStorage.setItem(key, String(Number(localStorage.getItem(key) || 0) + 1));
      window.location.href = `https://tally.so/r/WOBrvL?plan=${plan}&source=landing`;
    }
  };
  return <main>
    <header className="toss-header"><a href="#top" className="toss-logo">lazy<span>resume</span></a><nav><a href="#story">서비스</a><a href="#plans">플랜</a><a href="#faq">FAQ</a></nav><a href="#plans" className="header-cta">시작하기</a></header>
    <section className="scene hero-scene" id="top"><div className="scene-inner hero-inner"><p className="tiny-label">LAZYRESUME / MONTHLY CAREER RECORD</p><h1>이력서 업데이트,<br /><strong>이제 매달<br />전화 한 통으로</strong><br />끝내세요!</h1><p className="scene-sub">이직은 하고 싶은데,<br />주말에 이력서 열기조차 귀찮으셨죠?<br /><br />내가 편한 시간에 잠깐,<br />친구와 통화하듯 이번 달에 한 일을 들려주세요.</p><a className="black-pill" href="#story">어떻게 하는지 보기 <span>↓</span></a><div className="hero-plan-actions"><div className="hero-plan-row"><div><span>AI 전화</span><strong>29,000원 / 월</strong></div><button onClick={() => choose("ai")}>AI와 편하게 매월 전화하기 <span>→</span></button></div><div className="hero-plan-row"><div><span>전문가 전화</span><strong>59,000원 / 월</strong></div><button onClick={() => choose("human")}>전문가와 전문적으로 매월 전화하기 <span>→</span></button></div></div></div><div className="hero-art"><div className="phone"><div className="phone-top">게으른 이력서 <span>●●●</span></div><div className="phone-wave"><i /><i /><i /><i /><i /></div><p>지난번에 하시던<br /><b>프로젝트는 어디까지<br />진행됐나요?</b></p><small>이번 달의 통화</small><div className="phone-button">●</div></div></div></section>
    <section className="scene statement-scene"><div className="scene-inner statement reveal"><p className="tiny-label">WHY LAZYRESUME</p><h2>혹시 이직 준비가<br /><span>‘밀린 숙제’처럼</span><br />느껴지시나요?</h2><p>업무하느라 바빠서 이력서를 열기 싫고,<br />성과를 어떤 양식에 써야 할지 막막하고,<br />노션·PPT·워드 같은 툴도 스트레스라면.</p></div></section>
    <section className="scene story-scene" id="story"><div className="scene-inner story-inner reveal"><p className="tiny-label">HOW IT WORKS</p><h2>당신은 말하기만 하세요.<br /><strong>나머지는 게으른 이력서가 할게요.</strong></h2><div className="story-steps"><div><b>01</b><h3>정기 전화</h3><p>전문 커리어 AI가 질문을 던져요.<br />이번 달의 일을 편하게 말해요.</p></div><div><b>02</b><h3>전문가 문서화</h3><p>대화 속 성과를 발견해<br />매력적인 문장으로 정리해요.</p></div><div><b>03</b><h3>업데이트 완료</h3><p>이력서·경력기술서·포트폴리오와<br />실물 인쇄 배송까지 이어집니다.</p></div></div></div></section>
    <section className="result-band"><div className="result-inner reveal"><div className="result-copy"><p className="tiny-label">FROM TALK TO DOCUMENT</p><h2>말은 흘러가지만<br /><strong>기록은 남으니까.</strong></h2><p>통화 전의 막연한 이야기가<br />내일의 이력서 문장이 됩니다.</p></div><div className="result-paper"><small>이번 달의 성과</small><p>신규 고객 온보딩 프로세스를 개선해<br /><b>초기 이탈률을 18% 줄였습니다.</b></p><hr /><small>다음 달의 질문</small><p>이 성과를 만든 나만의 방법은<br />무엇이었을까요?</p></div></div></section>
    <section className="plans-scene" id="plans"><div className="scene-inner reveal"><p className="tiny-label">CHOOSE YOUR CALL</p><h2>나에게 맞는<br /><strong>전화 한 통</strong>을 골라보세요.</h2><p className="plans-note">현재 게으른 이력서는 정식 출시를 준비하고 있습니다.<br />먼저 신청해주신 분들께 출시 소식과 <strong>얼리 액세스 안내</strong>를 보내드립니다.<br />신청해도 지금 바로 결제되지는 않습니다.</p><div className="toss-plans">{(Object.keys(plans) as Plan[]).map((id) => <article key={id} className={`toss-plan ${id === "human" ? "dark" : ""}`}><span className="plan-label">{plans[id].label}</span><h3>{plans[id].title}</h3><p>{plans[id].desc}</p><strong className="plan-price">{plans[id].price}</strong><ul>{plans[id].items.map((item) => <li key={item}>✓ {item}</li>)}</ul><button onClick={() => choose(id)}>{id === "ai" ? "AI와 편하게 매월 전화하기" : "전문가와 전문적으로 매월 전화하기"} <span>→</span></button></article>)}</div></div></section>
    <section className="faq-scene" id="faq"><div className="scene-inner faq-inner reveal"><p className="tiny-label">ONE LAST THING</p><h2>시작하기 전에<br /><strong>궁금한 것들.</strong></h2><div className="faq-list"><details><summary>통화 시간은 정해져 있나요?<span>+</span></summary><p>온보딩 후 서로 편한 날짜와 시간대를 정합니다. 늦은 저녁도 가능합니다.</p></details><details><summary>AI가 제 일을 이해할 수 있나요?<span>+</span></summary><p>첫 통화에서 커리어 베이스를 만들고, 지난 기록을 참고해 질문합니다.</p></details><details><summary>신청하면 바로 결제되나요?<span>+</span></summary><p>아니요. 현재는 수요 조사 단계이며 출시 알림을 위한 신청만 받습니다.</p></details></div></div></section>
    <section className="final-scene"><div className="scene-inner reveal"><p className="tiny-label">YOUR FUTURE SELF WILL THANK YOU</p><h2>이번 달의 나를<br /><strong>놓치지 마세요.</strong></h2><button className="black-pill" onClick={() => choose("ai")}>얼리버드 신청하기 <span>→</span></button></div></section>
    <footer className="toss-footer"><span>© 2026 lazyresume</span><span>매달 한 통, 나를 업데이트하는 시간</span><span>@lazyresume</span></footer>
    {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}><button className="close" onClick={() => setSelected(null)} aria-label="닫기">×</button>{sent ? <><div className="sent">✓</div><h2>신청이 접수됐어요.</h2><p>출시 소식과 얼리버드 안내를 보내드릴게요.</p><button className="modal-button" onClick={() => setSelected(null)}>확인</button></> : <><span className="plan-label">{plans[selected].label}</span><h2>조금 더 가볍게<br />시작해볼까요?</h2><p>아직 결제되지 않습니다. 이메일만 남겨주세요.</p><form onSubmit={(e) => { e.preventDefault(); setSent(true); }}><input required type="email" placeholder="이메일 주소" aria-label="이메일 주소" /><label><input required type="checkbox" /> 정기 전화 안내를 받아볼게요.</label><button className="modal-button" type="submit">대기 신청하기　→</button></form></>}</div></div>}
  </main>;
}
