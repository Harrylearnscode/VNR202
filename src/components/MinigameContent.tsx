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
    clue: 'Cuộc bỏ phiếu toàn dân ngày 25/4/1976 để bầu Quốc hội chung được gọi là gì?',
    acceptedAnswers: ['tổng tuyển cử'], before: '', letter: 'T', after: 'ỔNG TUYỂN CỬ', hiddenLetter: 'T',
  },
  {
    clue: 'Sau khi chiến tranh kết thúc, đất nước bước vào thời kỳ gì?',
    acceptedAnswers: ['hòa bình', 'hoa binh'], before: '', letter: 'H', after: 'ÒA BÌNH', hiddenLetter: 'H',
  },
  {
    clue: 'Cơ quan đại diện được bầu trong cuộc Tổng tuyển cử năm 1976 là gì?',
    acceptedAnswers: ['quốc hội'], before: 'QU', letter: 'Ố', after: 'C HỘI', hiddenLetter: 'Ố',
  },
  {
    clue: 'Chỉ thị 100-CT/TW năm 1981 áp dụng khoán sản phẩm chủ yếu trong lĩnh vực nào?',
    acceptedAnswers: ['nông nghiệp'], before: '', letter: 'N', after: 'ÔNG NGHIỆP', hiddenLetter: 'N',
  },
  {
    clue: 'Đại hội IV đổi tên Đảng Lao động Việt Nam thành Đảng nào?',
    acceptedAnswers: ['đảng cộng sản việt nam'], before: 'ĐẢN', letter: 'G', after: ' CỘNG SẢN VIỆT NAM', hiddenLetter: 'G',
  },
  {
    clue: 'Tháng 6/1985 diễn ra Hội nghị Trung ương lần thứ mấy khóa V?',
    acceptedAnswers: ['hội nghị trung ương 8', 'trung ương 8'], before: 'HỘI NGHỊ TRU', letter: 'N', after: 'G ƯƠNG 8', hiddenLetter: 'N',
  },
  {
    clue: 'Đại hội V xác định ngoài nông nghiệp cần chú trọng sản xuất hàng gì phục vụ đời sống?',
    acceptedAnswers: ['hàng tiêu dùng', 'tiêu dùng'], before: '', letter: 'H', after: 'ÀNG TIÊU DÙNG', hiddenLetter: 'H',
  },
  {
    clue: 'Đại hội V chủ trương phát triển hàng tiêu dùng và hàng gì?',
    acceptedAnswers: ['hàng xuất khẩu', 'xuất khẩu'], before: 'HÀNG XU', letter: 'Ấ', after: 'T KHẨU', hiddenLetter: 'Ấ',
  },
  {
    clue: 'Sau Tổng tuyển cử năm 1976, Quốc hội tạo cơ sở chính trị để hoàn thành nhiệm vụ gì?',
    acceptedAnswers: ['thống nhất đất nước', 'thong nhat dat nuoc'], before: 'THỐNG NHẤ', letter: 'T', after: ' ĐẤT NƯỚC', hiddenLetter: 'T',
  },
];

const ALL_CLUES = CROSSWORD_ENTRIES;

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
    const entry = ALL_CLUES[entryIndex];
    const isCorrect = entry.acceptedAnswers.some((candidate) => normalize(candidate) === normalize(answerInput));
    if (!isCorrect) {
      setFeedback('Chưa chính xác. Hãy đoán cả từ hoặc cụm từ theo gợi ý.'); setIsWrong(true); return;
    }
    if (entryIndex < CROSSWORD_ENTRIES.length) {
      setEarnedLetters((current) => [...current, (entry as CrosswordEntry).hiddenLetter]);
    }
    setEntryIndex((current) => current + 1);
    setAnswerInput(''); setFeedback('Chính xác! Đáp án đã được điền vào ô chữ.'); setIsWrong(false);
  };

  const submitHiddenWord = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (normalize(hiddenWordInput) === normalize('THỐNG NHẤT')) {
      setIsComplete(true); setFeedback('Chính xác! Bạn đã giải được từ khóa ẩn.'); setIsWrong(false);
    } else {
      setFeedback('Từ khóa chưa đúng. Hãy ghép các chữ cái theo thứ tự từ trên xuống.'); setIsWrong(true);
    }
  };

  const allEntriesSolved = entryIndex === ALL_CLUES.length;

  return (
    <main className="quiz-container word-game-container animate-fade-in">
      <header className="quiz-header word-game-header">
        <span className="quiz-section-tag">TRÒ CHƠI ÔN TẬP</span>
        <h2 className="quiz-main-title">Ô chữ lịch sử</h2>
        <p className="quiz-subtitle">Giải 9 gợi ý để mở chữ giao nhau và ghép từ khóa ẩn của giai đoạn 1975–1986.</p>
        <div className="word-game-toolbar">
          <button className="btn-mg check" onClick={() => setStarted(true)} disabled={started || isComplete}>{started ? 'Trò chơi đang diễn ra' : 'Bắt đầu'}</button>
          <button className="btn-mg reset" onClick={resetGame}>Chơi lại</button>
        </div>
      </header>

      <section className="word-game-card crossword-card">
        <div className="word-game-progress-row">
          <span>{allEntriesSolved ? 'GIẢI TỪ KHÓA ẨN' : `GỢI Ý ${entryIndex + 1} / ${CROSSWORD_ENTRIES.length}`}</span>
          <div className="word-game-progress" aria-label={`Đã giải ${entryIndex} trên ${ALL_CLUES.length} câu`}>
            {ALL_CLUES.map((_, index) => <span className={index < entryIndex ? 'earned' : ''} key={index}>{index + 1}</span>)}
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
            <h3 className="word-game-clue">{ALL_CLUES[entryIndex].clue}</h3>
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
            <div className="earned-letters" aria-label={earnedLetters.join(' ')}>{earnedLetters.map((letter, index) => <span key={index}>{letter.toLocaleUpperCase('vi')}</span>)}</div>
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
        {isComplete && <div className="word-game-win">✦ TỪ KHÓA: THỐNG NHẤT ✦</div>}
      </section>
    </main>
  );
}
