import { useState } from 'react';

interface CrosswordEntry {
  clue: string;
  acceptedAnswers: string[];
  before: string;
  letter: string;
  after: string;
  hiddenLetter: string;
}

const CROSSWORD_ENTRIES: CrosswordEntry[] = [
  {
    clue: 'Nêu một thuận lợi của đất nước ta sau năm 1975.',
acceptedAnswers: ['độc lập'], before: '', letter: 'Đ', after: 'ỘC LẬP', hiddenLetter: 'D',
  },
  {
    clue: 'Hoạt động ngày 25/4/1976 để bầu Quốc hội chung được gọi là gì?',
acceptedAnswers: ['tổng tuyển cử'], before: 'T', letter: 'Ổ', after: 'NG TUYỂN CỬ', hiddenLetter: 'O',
  },
  {
    clue: 'Văn kiện tháng 1/1981 thực hiện khoán sản phẩm trong nông nghiệp là gì?',
acceptedAnswers: ['chỉ thị 100', 'chỉ thị 100-ct/tw'], before: 'CH', letter: 'Ỉ', after: ' THỊ 100', hiddenLetter: 'I',
  },
  {
    clue: 'Đại hội V xác định nông nghiệp là gì?',
acceptedAnswers: ['mặt trận hàng đầu'], before: '', letter: 'M', after: 'ẶT TRẬN HÀNG ĐẦU', hiddenLetter: 'M',
  },
  {
    clue: 'Đại hội IV chủ trương đẩy mạnh quá trình nào?',
acceptedAnswers: ['công nghiệp hóa', 'công nghiệp hoá'], before: 'C', letter: 'Ô', after: 'NG NGHIỆP HÓA', hiddenLetter: 'O',
  },
  {
    clue: 'Đường lối nào được đề ra tại Đại hội VI năm 1986?',
acceptedAnswers: ['đổi mới'], before: 'ĐỔ', letter: 'I', after: ' MỚI', hiddenLetter: 'I',
  },
];

function normalize(value: string) {
  return value.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/[^a-z]/g, '');
}

function HiddenWordPart({ value }: { value: string }) {
  return <span className="crossword-hidden-part">{Array.from(value).map((character, index) => character === ' ' ? <span className="crossword-space" key={index}> </span> : <span className="crossword-empty-char" key={index} />)}</span>;
}

export default function MinigameContent() {
  const [started, setStarted] = useState(false);
  const [entryIndex, setEntryIndex] = useState(0);
  const [earnedLetters, setEarnedLetters] = useState<string[]>([]);
  const [answerInput, setAnswerInput] = useState('');
  const [hiddenWordInput, setHiddenWordInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  const [isComplete, setIsComplete] = useState(false);


  const resetGame = () => {
    setStarted(false); setEntryIndex(0); setEarnedLetters([]);
    setAnswerInput(''); setHiddenWordInput(''); setFeedback(''); setIsWrong(false); setIsComplete(false);
  };

  const submitAnswer = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!started || !answerInput.trim()) return;
    const entry = CROSSWORD_ENTRIES[entryIndex];
    const isCorrect = entry.acceptedAnswers.some((candidate) => normalize(candidate) === normalize(answerInput));
    if (!isCorrect) {
      setFeedback('Chưa chính xác. Hãy đoán cả từ hoặc cụm từ theo gợi ý.'); setIsWrong(true); return;
    }
    setEarnedLetters((current) => [...current, entry.hiddenLetter]);
    setEntryIndex((current) => current + 1);
    setAnswerInput(''); setFeedback('Chính xác! Đáp án đã được điền vào ô chữ.'); setIsWrong(false);
  };

  const submitHiddenWord = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (normalize(hiddenWordInput) === normalize('ĐỔI MỚI')) {
      setIsComplete(true); setFeedback('Chính xác! Bạn đã giải được từ khóa ẩn.'); setIsWrong(false);
    } else {
      setFeedback('Từ khóa chưa đúng. Hãy ghép các chữ cái theo thứ tự từ trên xuống.'); setIsWrong(true);
    }
  };

  const allEntriesSolved = entryIndex === CROSSWORD_ENTRIES.length;

  return (
    <main className="quiz-container word-game-container animate-fade-in">
      <header className="quiz-header word-game-header">
        <span className="quiz-section-tag">TRÒ CHƠI ÔN TẬP</span>
        <h2 className="quiz-main-title">Ô chữ lịch sử</h2>
        <p className="quiz-subtitle">Đoán từ hoặc cụm từ theo gợi ý. Chữ giao nhau sẽ ghép thành từ khóa ẩn.</p>
        <div className="word-game-toolbar">
          <button className="btn-mg check" onClick={() => setStarted(true)} disabled={started || isComplete}>{started ? 'Trò chơi đang diễn ra' : 'Bắt đầu'}</button>
          <button className="btn-mg reset" onClick={resetGame}>Chơi lại</button>
        </div>
      </header>

      <section className="word-game-card crossword-card">
        <div className="word-game-progress-row">
          <span>{allEntriesSolved ? 'GIẢI TỪ KHÓA ẨN' : `GỢI Ý ${entryIndex + 1} / ${CROSSWORD_ENTRIES.length}`}</span>
          <div className="word-game-progress" aria-label={`Đã giải ${earnedLetters.length} trên ${CROSSWORD_ENTRIES.length} gợi ý`}>
            {CROSSWORD_ENTRIES.map((_, index) => <span className={index < earnedLetters.length ? 'earned' : ''} key={index}>{index + 1}</span>)}
          </div>
        </div>

        <div className="crossword-board" aria-label="Ô chữ; chữ giao nhau tạo thành từ khóa ẩn">
          {CROSSWORD_ENTRIES.map((entry, index) => (
            <div className={`crossword-row ${index === entryIndex && !allEntriesSolved ? 'current' : ''} ${index < earnedLetters.length ? 'solved' : ''}`} key={index}>
              {index < earnedLetters.length ? (
                <><span className="crossword-before">{entry.before}</span><span className="crossword-cell">{entry.letter}</span><span className="crossword-after">{entry.after}</span></>
              ) : (
                <><span className="crossword-before"><HiddenWordPart value={entry.before} /></span><span className="crossword-cell" aria-label="Ô giao nhau còn thiếu"></span><span className="crossword-after"><HiddenWordPart value={entry.after} /></span></>
              )}
            </div>
          ))}
        </div>

        {!allEntriesSolved ? (
          <>
            <div className="crossword-clue-label">GỢI Ý {entryIndex + 1}</div>
            <h3 className="word-game-clue">{CROSSWORD_ENTRIES[entryIndex].clue}</h3>
            <form className="word-game-answer-form" onSubmit={submitAnswer}>
              <label className="word-game-answer-label" htmlFor="crossword-answer">Nhập cả từ hoặc cụm từ</label>
              <div className="word-game-answer-row">
                <input id="crossword-answer" value={answerInput} onChange={(event) => { setAnswerInput(event.target.value); setFeedback(''); setIsWrong(false); }} placeholder="Nhập đáp án..." disabled={!started} autoComplete="off" />
                <button className="btn-mg check" type="submit" disabled={!started || !answerInput.trim()}>Trả lời</button>
              </div>
            </form>
          </>
        ) : (
          <div className="hidden-word-stage">
            <div className="crossword-clue-label">CÁC CHỮ GIAO NHAU</div>
            <div className="earned-letters" aria-label={earnedLetters.join(' ')}>{earnedLetters.map((letter, index) => <span key={index}>{normalize(letter).toUpperCase()}</span>)}</div>
            <h3 className="word-game-clue">Ghép cột chữ để tìm từ khóa của giai đoạn 1975–1986.</h3>
            <form className="word-game-answer-form" onSubmit={submitHiddenWord}>
              <label className="word-game-answer-label" htmlFor="hidden-word">Từ khóa ẩn</label>
              <div className="word-game-answer-row">
                <input id="hidden-word" value={hiddenWordInput} onChange={(event) => { setHiddenWordInput(event.target.value); setFeedback(''); setIsWrong(false); }} placeholder="Nhập từ khóa..." disabled={!started || isComplete} autoComplete="off" />
                <button className="btn-mg check" type="submit" disabled={!started || isComplete || !hiddenWordInput.trim()}>Mở từ khóa</button>
              </div>
            </form>
          </div>
        )}

        {feedback && <p className={`word-game-feedback ${isWrong ? 'wrong' : 'right'}`} role="status">{feedback}</p>}
        {isComplete && <div className="word-game-win">✦ TỪ KHÓA: ĐỔI MỚI ✦</div>}
      </section>
    </main>
  );
}
