import { useState } from 'react';

interface Question {
  id: number;
  questionText: string;
  options: {
    key: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    questionText: "Tổng tuyển cử bầu Quốc hội chung được tổ chức vào ngày nào?",
    options: [
      { key: "A", text: "25/4/1976" },
      { key: "B", text: "30/4/1975" },
      { key: "C", text: "14/12/1976" },
      { key: "D", text: "27/3/1982" }
    ],
    correctAnswer: "A",
    explanation: "Ngày 25/4/1976, cử tri cả nước tham gia tổng tuyển cử bầu Quốc hội chung."
  },
  {
    id: 2,
    questionText: "Đại hội IV đề ra kế hoạch phát triển kinh tế trong thời gian nào?",
    options: [
      { key: "A", text: "1975–1979" },
      { key: "B", text: "1976–1980" },
      { key: "C", text: "1981–1985" },
      { key: "D", text: "1986–1990" }
    ],
    correctAnswer: "B",
    explanation: "Đại hội IV thông qua kế hoạch phát triển kinh tế 5 năm 1976–1980."
  },
  {
    id: 3,
    questionText: "Hội nghị Trung ương 6 khóa IV (8/1979) chủ trương điều gì?",
    options: [
      { key: "A", text: "Tháo gỡ rào cản để sản xuất phát triển" },
      { key: "B", text: "Tổ chức Đại hội V" },
      { key: "C", text: "Thực hiện cải cách giá – lương – tiền" },
      { key: "D", text: "Bầu Quốc hội khóa VI" }
    ],
    correctAnswer: "A",
    explanation: "Hội nghị được xem là bước đột phá đầu tiên trong tìm tòi đổi mới kinh tế."
  },
  {
    id: 4,
    questionText: "Chỉ thị 100-CT/TW (1/1981) gắn với lĩnh vực nào?",
    options: [
      { key: "A", text: "Khoán sản phẩm trong nông nghiệp" },
      { key: "B", text: "Cải cách tiền lương giáo viên" },
      { key: "C", text: "Mở rộng hoạt động xuất khẩu" },
      { key: "D", text: "Phát triển công nghiệp nặng" }
    ],
    correctAnswer: "A",
    explanation: "Chỉ thị 100-CT/TW triển khai khoán sản phẩm trong nông nghiệp."
  },
  {
    id: 5,
    questionText: "Đại hội V xác định lĩnh vực nào là mặt trận hàng đầu?",
    options: [
      { key: "A", text: "Công nghiệp nặng" },
      { key: "B", text: "Nông nghiệp" },
      { key: "C", text: "Du lịch" },
      { key: "D", text: "Tài chính – ngân hàng" }
    ],
    correctAnswer: "B",
    explanation: "Đại hội V chú trọng nông nghiệp, hàng tiêu dùng và hàng xuất khẩu."
  },
  {
    id: 6,
    questionText: "Hội nghị Trung ương 8 khóa V (6/1985) chủ trương cải cách nào?",
    options: [
      { key: "A", text: "Giá – lương – tiền" },
      { key: "B", text: "Giáo dục – y tế – văn hóa" },
      { key: "C", text: "Thuế – đất đai – hộ khẩu" },
      { key: "D", text: "Xuất nhập khẩu – hải quan" }
    ],
    correctAnswer: "A",
    explanation: "Đây là bước đột phá thứ hai; việc thực hiện thiếu đồng bộ và chưa chuẩn bị đầy đủ khiến khó khăn kinh tế tăng thêm."
  },
  {
    id: 7,
    questionText: "Kết luận tháng 8/1986 của Bộ Chính trị nhấn mạnh nội dung nào?",
    options: [
      { key: "A", text: "Điều chỉnh cơ cấu, phù hợp kinh tế nhiều thành phần, đổi mới quản lý" },
      { key: "B", text: "Mở rộng đầu tư công nghiệp nặng bằng mọi giá" },
      { key: "C", text: "Khôi phục cơ chế kinh tế thời chiến" },
      { key: "D", text: "Dừng các thử nghiệm sản xuất" }
    ],
    correctAnswer: "A",
    explanation: "Ba hướng nổi bật là điều chỉnh cơ cấu sản xuất, nhận thức lại cải tạo xã hội chủ nghĩa và đổi mới cơ chế quản lý kinh tế."
  },
  {
    id: 8,
    questionText: "Các bước đột phá 1979, 1985 và 1986 góp phần hình thành điều gì?",
    options: [
      { key: "A", text: "Tiền đề cho đường lối Đổi mới tại Đại hội VI" },
      { key: "B", text: "Kế hoạch 5 năm 1976–1980" },
      { key: "C", text: "Cuộc tổng tuyển cử năm 1976" },
      { key: "D", text: "Sự ra đời của Đại hội V" }
    ],
    correctAnswer: "A",
    explanation: "Quá trình tổng kết thực tiễn và điều chỉnh tư duy tạo cơ sở cho đường lối Đổi mới được đề ra tại Đại hội VI tháng 12/1986."
  }
];

export default function QuizContent() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIdx];

  const handleOptionClick = (optionKey: string) => {
    if (isAnswered) return;

    setSelectedAnswer(optionKey);
    setIsAnswered(true);

    const correct = optionKey === currentQuestion.correctAnswer;
    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextClick = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    
    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  // Render Result Screen
  if (quizFinished) {
    let evaluation = "";
    if (score === quizQuestions.length) {
      evaluation = "Xuất sắc! Bạn có kiến thức lịch sử Đổi Mới vô cùng sâu sắc.";
    } else if (score >= 4) {
      evaluation = "Rất tốt! Bạn nhớ được hầu hết các cột mốc quan trọng của đất nước.";
    } else if (score >= 2) {
      evaluation = "Khá tốt! Bạn đã hiểu sơ bộ về lịch sử Đổi Mới, hãy đọc thêm tạp chí nhé.";
    } else {
      evaluation = "Hãy dành thời gian khám phá dòng chảy lịch sử ở mục Tạp Chí Số để hiểu rõ hơn nhé!";
    }

    return (
      <div className="quiz-container">
        <header className="quiz-header">
          <span className="quiz-section-tag">PHẦN 4 • TƯƠNG TÁC</span>
          <h2 className="quiz-main-title">Kết Quả Quiz</h2>
        </header>

        <div className="quiz-card result-card">
          <div className="result-score-circle">
            <span className="score-num">{score}</span>
            <span className="score-total">/ {quizQuestions.length}</span>
          </div>
          
          <h3 className="result-heading">Bạn đạt {score * 10} điểm!</h3>
          <p className="result-evaluation">{evaluation}</p>

          <div className="result-buttons">
            <button className="btn-restart" onClick={resetQuiz}>
              ✦ Chơi lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container animate-fade-in">
      
      {/* Quiz Title Header */}
      <header className="quiz-header">
        <span className="quiz-section-tag">PHẦN 4 • TƯƠNG TÁC</span>
        <h2 className="quiz-main-title">Quiz Đổi Mới</h2>
        <p className="quiz-subtitle">{quizQuestions.length} câu hỏi — bạn nhớ được bao nhiêu?</p>
      </header>

      {/* Main Quiz Card */}
      <div className="quiz-card">
        {/* Card Header */}
        <div className="quiz-card-header">
          <span className="question-counter">CÂU {currentQuestionIdx + 1} / {quizQuestions.length}</span>
          
          {/* Custom segment progress bar */}
          <div className="progress-segments">
            {quizQuestions.map((_, idx) => (
              <div 
                key={idx}
                className={`progress-segment-item ${idx === currentQuestionIdx ? 'active' : (idx < currentQuestionIdx ? 'passed' : '')}`}
              />
            ))}
          </div>
        </div>

        {/* Card Body Grid (Left text/Question, Right dividing line options) */}
        <div className="quiz-card-body">
          <div className="quiz-body-left">
            <h3 className="quiz-question-text">{currentQuestion.questionText}</h3>
            
            {/* Show explanation after user has answered */}
            <div className={`question-explanation-panel ${isAnswered ? 'show' : ''}`}>
              <div className="expl-tag">✦ Giải thích lịch sử:</div>
              <p className="expl-text">{currentQuestion.explanation}</p>
            </div>
          </div>

          <div className="quiz-body-divider"></div>

          <div className="quiz-body-right">
            <div className="quiz-options-list">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.key;
                const isCorrect = option.key === currentQuestion.correctAnswer;
                
                let optionClass = "";
                if (isAnswered) {
                  if (isCorrect) {
                    optionClass = "correct-option";
                  } else if (isSelected) {
                    optionClass = "incorrect-option";
                  } else {
                    optionClass = "disabled-option";
                  }
                }

                return (
                  <button
                    key={option.key}
                    className={`quiz-option-button ${optionClass} ${isSelected ? 'selected-option' : ''}`}
                    onClick={() => handleOptionClick(option.key)}
                    disabled={isAnswered}
                  >
                    <span className="option-letter">{option.key}.</span>
                    <span className="option-text">{option.text}</span>
                    
                    {/* Visual Check/Cross indicator icons */}
                    {isAnswered && isCorrect && (
                      <span className="option-indicator-icon correct">✓</span>
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <span className="option-indicator-icon incorrect">✗</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Card Footer Next button */}
        {isAnswered && (
          <div className="quiz-card-footer">
            <button className="btn-next-question" onClick={handleNextClick}>
              {currentQuestionIdx === quizQuestions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"} <span className="arrow">→</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
