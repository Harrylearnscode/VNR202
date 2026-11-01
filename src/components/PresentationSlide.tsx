export interface ContentBlock {
  heading: string;
  items: string[];
  tone?: 'green' | 'red' | 'gold';
}

export interface PresentationSlideData {
  title: string;
  section: string;
  period: string;
  blocks: ContentBlock[];
  summary: string;
  takeaway?: string;
}

export const presentationSlides: PresentationSlideData[] = [
  {
    section: 'BỐI CẢNH LỊCH SỬ', period: '1975', title: 'ĐẤT NƯỚC SAU CHIẾN TRANH',
    summary: '',
    blocks: [
      { heading: 'Mở đầu', items: ['30/4/1975: Giải phóng miền Nam.', 'Đất nước bước vào thời kỳ hòa bình và tiến tới thống nhất toàn diện.', 'Nhiệm vụ trọng tâm: Xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc.', '1975–1986: Giai đoạn khôi phục, xây dựng và từng bước đổi mới tư duy kinh tế.'], tone: 'red' },
      { heading: 'Thuận lợi', items: ['Độc lập, hòa bình và thống nhất đất nước.', 'Tinh thần đoàn kết dân tộc.', 'Kinh nghiệm xây dựng chủ nghĩa xã hội ở miền Bắc.'], tone: 'green' },
      { heading: 'Khó khăn', items: ['Hậu quả chiến tranh nặng nề.', 'Kinh tế lạc hậu, thiếu vốn và cơ sở vật chất.', 'Hai miền có cơ chế quản lý kinh tế khác nhau.', 'Chiến tranh biên giới, bao vây và cấm vận.'], tone: 'gold' },
    ],
  },
  {
    section: 'THỐNG NHẤT NHÀ NƯỚC', period: '1976', title: 'HOÀN THÀNH THỐNG NHẤT VỀ MẶT NHÀ NƯỚC',
    summary: '',
    blocks: [
      { heading: 'Các mốc và quyết định', items: ['25/4/1976: Tổng tuyển cử bầu Quốc hội chung.', '24/6–3/7/1976: Kỳ họp đầu tiên của Quốc hội khóa VI.', 'Tên nước: Cộng hòa xã hội chủ nghĩa Việt Nam.', 'Thủ đô: Hà Nội.', 'Sài Gòn – Gia Định được đổi tên thành Thành phố Hồ Chí Minh.'], tone: 'red' },
    ],
  },
  {
    section: 'ĐẠI HỘI IV · THÀNH TỰU VÀ HẠN CHẾ', period: '1976–1981', title: 'ĐẠI HỘI IV & THỰC TIỄN',
    summary: '',
    blocks: [
      { heading: 'Đại hội IV (14–20/12/1976)', items: ['Xác định đường lối đưa cả nước tiến lên chủ nghĩa xã hội.', 'Đề ra kế hoạch phát triển kinh tế 5 năm (1976–1980).', 'Chủ trương đẩy mạnh công nghiệp hóa xã hội chủ nghĩa.', 'Ưu tiên phát triển công nghiệp nặng hợp lý trên cơ sở nông nghiệp và công nghiệp nhẹ.', 'Kết hợp xây dựng đất nước với bảo vệ Tổ quốc.'], tone: 'red' },
      { heading: 'Thành tựu', items: ['Thống nhất đất nước về mặt nhà nước.', 'Từng bước khôi phục sản xuất.', 'Bảo vệ chủ quyền và an ninh biên giới.', 'Xây dựng nền tảng chính trị, xã hội cho giai đoạn tiếp theo.'], tone: 'green' },
      { heading: 'Hạn chế', items: ['Nhiều chỉ tiêu kinh tế không đạt.', 'Sản xuất tăng chậm, năng suất thấp.', 'Thiếu lương thực và hàng tiêu dùng.', 'Cơ chế quản lý tập trung, quan liêu, bao cấp bộc lộ bất cập.'], tone: 'gold' },
    ],
  },
  {
    section: 'BƯỚC ĐỘT PHÁ ĐẦU TIÊN · 1979–1981', period: '1979–1981', title: 'BƯỚC ĐỘT PHÁ KINH TẾ ĐẦU TIÊN',
    summary: '',
    blocks: [
      { heading: 'Tháng 8/1979', items: ['Hội nghị Trung ương 6 khóa IV.', 'Chủ trương tháo gỡ rào cản để sản xuất phát triển.'], tone: 'red' },
      { heading: 'Tháng 1/1981', items: ['Chỉ thị 100-CT/TW: Khoán sản phẩm trong nông nghiệp.', 'Quyết định 25-CP: Mở rộng quyền chủ động cho xí nghiệp quốc doanh.'], tone: 'gold' },
      { heading: 'Ý nghĩa', items: ['Bước đầu đổi mới tư duy quản lý kinh tế.'], tone: 'green' },
    ],
  },
  {
    section: 'ĐẠI HỘI V · 1982', period: '1982', title: 'ĐẠI HỘI ĐẠI BIỂU TOÀN QUỐC LẦN THỨ V',
    summary: '',
    blocks: [
      { heading: 'Đại hội V (27–31/3/1982)', items: ['Tiếp tục hai nhiệm vụ chiến lược: xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc.', 'Nhận thức rõ hơn tính lâu dài của thời kỳ quá độ.', 'Coi nông nghiệp là mặt trận hàng đầu.', 'Phát triển hàng tiêu dùng và hàng xuất khẩu.', 'Từng bước ổn định và cải thiện đời sống nhân dân.'], tone: 'red' },
    ],
  },
  {
    section: 'CẢI CÁCH KINH TẾ · 1984–1985', period: '1984–1985', title: 'CẢI CÁCH KINH TẾ',
    summary: '',
    blocks: [
      { heading: 'Năm 1984', items: ['Hội nghị Trung ương 6 khóa V.', 'Tập trung giải quyết vấn đề phân phối và lưu thông.'], tone: 'gold' },
      { heading: 'Tháng 6/1985 · Bước đột phá thứ hai', items: ['Hội nghị Trung ương 8 khóa V.', 'Chủ trương xóa bỏ cơ chế tập trung quan liêu, bao cấp trong giá và lương.', 'Tiến hành cải cách giá – lương – tiền.'], tone: 'red' },
      { heading: 'Kết quả và hạn chế', items: ['Thể hiện quyết tâm thay đổi cơ chế quản lý.', 'Việc triển khai thiếu đồng bộ, chưa chuẩn bị đầy đủ.', 'Lạm phát và khó khăn kinh tế gia tăng.'], tone: 'green' },
    ],
  },
  {
    section: 'CHUYỂN BIẾN TƯ DUY · 1986', period: '1986', title: 'BƯỚC ĐỘT PHÁ THỨ BA – CHUYỂN BIẾN TƯ DUY',
    summary: '',
    blocks: [
      { heading: 'Tháng 8/1986', items: ['Bộ Chính trị đưa ra kết luận về một số vấn đề thuộc quan điểm kinh tế.'], tone: 'red' },
      { heading: 'Ba nội dung nổi bật', items: ['Điều chỉnh cơ cấu sản xuất, chú trọng nông nghiệp, công nghiệp nhẹ và xuất khẩu.', 'Nhận thức lại việc cải tạo xã hội chủ nghĩa, phù hợp với nền kinh tế nhiều thành phần.', 'Đổi mới cơ chế quản lý kinh tế, phát huy quyền chủ động trong sản xuất, kinh doanh.'], tone: 'gold' },
      { heading: 'Ý nghĩa', items: ['Tạo tiền đề cho đường lối Đổi mới tại Đại hội VI.'], tone: 'green' },
    ],
    takeaway: '',
  },
];

interface PresentationSlideProps {
  slide: PresentationSlideData;
  index: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  timelineMode?: boolean;
}

export default function PresentationSlide({ slide, index, total, onPrevious, onNext, timelineMode = false }: PresentationSlideProps) {
  const columnCount = slide.blocks.length > 3 ? 2 : slide.blocks.length;

  return (
    <main className={`presentation-slide-panel ${timelineMode ? 'timeline-detail-panel' : ''}`} aria-label={`${timelineMode ? 'Mốc' : 'Slide'} ${index + 1}: ${slide.title}`}>
      <div className="presentation-slide-scroll">
        <header className="presentation-slide-header">
          <div className="presentation-eyebrow">{timelineMode ? 'MỐC' : 'SLIDE'} {String(index + 1).padStart(2, '0')} <span>·</span> {slide.section}</div>
          <h1>{slide.title}</h1>
        </header>
        <div className="presentation-blocks" style={{ '--block-columns': columnCount } as React.CSSProperties}>
          {slide.blocks.map((block, blockIndex) => (
            <section className={`presentation-block tone-${block.tone ?? 'green'}`} key={`${block.heading}-${blockIndex}`}>
              <h2>{block.heading}</h2>
              <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          ))}
        </div>
        {slide.takeaway && <p className="presentation-takeaway">{slide.takeaway}</p>}
      </div>
      <footer className="presentation-slide-footer">
        <button className="presentation-nav-button" onClick={onPrevious} disabled={index === 0}>← <span>{timelineMode ? 'Mốc trước' : 'Slide trước'}</span></button>
        <span className="presentation-footer-count">{index + 1} / {total}</span>
        <button className="presentation-nav-button next" onClick={onNext} disabled={index === total - 1}><span>{timelineMode ? 'Mốc tiếp theo' : 'Slide tiếp theo'}</span> →</button>
      </footer>
    </main>
  );
}
